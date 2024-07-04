import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../util/api";
import { Button } from "react-bootstrap";

const EditNews = () => {
  const [edit, setEdit] = useState({});
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const { edit_id } = useParams();
  const [img, setImg] = useState(null)
  // const [path ,setPath] = useState("")
  useEffect(() => {
    axios
      .get(`${baseUrl}/get-news/${edit_id}`)
      .then((res) => {
        console.log("edit newsssssss", res.data.data);
        setEdit(res.data.data);
        // setPath(res.data.filepath)
        setImg(res.data.filepath + '/' + res.data.data.image)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [edit_id]);

  const updateImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    console.log("urlll", url)
    setImg(url)
  }
  useEffect(() => {
    axios
      .get(`${baseUrl}/get-categories`)
      .then((res) => {
        console.log("categoryyyyyy", res.data.data);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="border-3 rounded p-3 w-[700px] mx-auto">
      <h1>Edit News</h1>
      <Formik
        initialValues={{
          title: edit.title,
          description: edit.description,
          category: edit.category?._id || ''
        }}
        enableReinitialize={true}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Title is required";
          }
          if (!values.description) {
            errors.description = "Description is required";
          }
          if (!values.category) {
            errors.category = "Category is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("category", values.category);
          formData.append("avatar", img);


          axios
            .put(`${baseUrl}/update-news/${edit_id}`, formData)
            .then((res) => {
              console.log(res);
              navigate("/news");
              setSubmitting(false);
            })
            .catch((err) => {
              console.log(err);
              alert("Error!");
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className="form-control border-3 mt-3"
              placeholder="Title"
            />
            {errors.title && touched.title && errors.title}
            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className="form-control border-3 mt-3"
              placeholder="Description"
            />
            {errors.description && touched.description && errors.description}
            <img src={img} alt={edit.image} />
            <input type="file" name="avatar" id="" onChange={updateImage} className="form-control border-3 mt-3" />

            <select
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control border-3 my-3"
              values={values?.category}
            >
              {category &&
                category.map((elem, ind) => (
                  <option key={ind} value={elem._id} selected={elem._id == edit?.category?._id ? true : false}>
                    {elem.name}
                  </option>
                ))}
            </select>
            {errors.category && touched.category && errors.category}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="form-control my-2"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditNews;

import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../util/api";
import { Button } from "react-bootstrap";

const AddNews = () => {
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${baseUrl}/get-categories`)
    .then((res)=>{
      console.log("categoryyyyyy",res.data.data)
      setCategory(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="border-3 rounded p-3 w-[700px] mx-auto">
      <h1>Add News</h1>
      <Formik
        initialValues={{ title: "", description: "", category: "" }}
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
          
          axios.post(`${baseUrl}/add-news`, formData)
          .then((res)=>{
            console.log(res) 
            navigate("/news")
            setSubmitting(false)
          })
           .catch((err)=>{
            console.log(err)
            alert("Error!")
          })
         
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

            <input
              type="file"
              name=""
              id=""
              onChange={(e) => setImg(e.target.files[0])}
              className="form-control border-3 my-3"
            />


            <select
             name="category"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.category}
             className="form-control border-3 my-3"
            > 
            <option value="">Select Category</option>
              {
                category &&
                category.map((elem,ind)=>{
                  return(
                    <option key={ind} value={elem._id}>{elem.name}</option>
                  )
                })
              }
              
            </select>
            {errors.category && touched.category && errors.category}

            <Button type="submit" disabled={isSubmitting} className="form-control">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddNews;

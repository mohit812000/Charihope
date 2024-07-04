import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { baseUrl } from "../../util/api";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap"

const AddCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="addCategory_div border p-4 mx-auto">
      <h1>Add Category</h1>
      <Formik
        initialValues={{ name: "", short_description: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Category name is required";
          }
          if (!values.short_description) {
            errors.short_description = "Description is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
        
          axios
            .post(`${baseUrl}/add-category`, values)
            .then((res) => {
              console.log(res);
              alert("Category added successfully");
              navigate("/categories");
              setSubmitting(false);
            })
            .catch((err) => {
              console.log(err);
              setSubmitting(false);
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
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Category Name"
              className="form-control"
            />
            <p>{errors.name && touched.name && errors.name}</p>
            <textarea
              type="text"
              name="short_description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.short_description}
              rows="5"
              className="form-control"
              placeholder="Description"
            />

            <p>
              {errors.short_description && touched.short_description && errors.short_description}
            </p>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddCategory;

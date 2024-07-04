import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../util/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap';
import { Formik } from 'formik';

const EditCategory = () => {
  const [edit, setEdit] = useState({ name: '', short_description: '' });
  const { category_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-category/${category_id}`)
      .then((res) => {
        const { name, short_description } = res.data.data;
        setEdit({ name, short_description });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category_id]);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values); 
  
    axios
      .put(`${baseUrl}/update-category/${category_id}`, values)
      .then((res) => {
        console.log('API response:', res); 
        alert('Category updated');
        navigate('/categories');
        setSubmitting(false);
      })
      .catch((err) => {
        console.log('API error:', err); 
        alert('Error updating category. Please try again.'); 
        setSubmitting(false);
      });
  };
  

  return (
    <div className='edit_div border p-4 mx-auto'>
      <h1>Edit Category</h1>
      <Formik
        initialValues={{ name: edit.name || '', short_description: edit.short_description || '' }}
        enableReinitialize={true} // Add enableReinitialize to update initial values
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Category name is required';
          }
          if (!values.short_description) {
            errors.short_description = 'Description is required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <FormGroup controlId='formName'>
              <FormLabel>Category Name</FormLabel>
              <FormControl
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
              />
              <FormText className='text-danger'>{errors.name}</FormText>
            </FormGroup>

            <FormGroup controlId='formDescription'>
              <FormLabel>Description</FormLabel>
              <FormControl
                as='textarea'
                rows={5}
                name='short_description'
                value={values.short_description}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.short_description && !!errors.short_description}
              />
              <FormText className='text-danger'>{errors.short_description}</FormText>
            </FormGroup>

            <Button type='submit' disabled={isSubmitting} className='my-4'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCategory;

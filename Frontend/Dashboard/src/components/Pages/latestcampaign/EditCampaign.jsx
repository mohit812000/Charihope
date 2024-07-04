import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../util/api';
import axios from 'axios';
import { Formik } from 'formik';
import { LightOutlined } from '@mui/icons-material';

const EditCampaign = () => {
    const navigate = useNavigate()
    const [edit, setEdit] = useState({})
    const {edit_id} = useParams()
    const [img,setImg] = useState(null)
    
    useEffect(()=>{
        axios.get(`${baseUrl}/get-campaign/${edit_id}`)
        .then((res)=>{
            console.log(res.data.data)
            setEdit(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[edit_id])
  return (
    <div className="addcampaign_div border-solid border-2 border-sky-600 w-[800px] mx-auto rounded p-3">
      <h1>EDIT CAMPAIGN</h1>
      <Formik
       initialValues={{ title: edit.title , description: edit.description ,days:edit.days, donor: edit.donor,raised:edit.raised, goal:edit.goal}}
       enableReinitialize={true}
       validate={values => {
         const errors = {};
         if (!values.title) {
           errors.title = 'Title is required';
         }
         if (!values.description) {
          errors.description = 'Description is required';
        }  
        if (!values.days) {
          errors.days = 'Days is required';
        } 
        if (!values.donor) {
          errors.donor = 'Donor is required';
        } 
        if (!values.raised) {
          errors.raised = 'Raised is required';
        } 
        if (!values.goal) {
          errors.goal = 'Goal is required';
        } 
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        const formData = new FormData()
        formData.append("title",values.title)
        formData.append("description",values.description)
        formData.append("days",values.days)
        formData.append("donor",values.donor)
        formData.append("raised",values.raised)
        formData.append("goal",values.goal)
        formData.append("avatar",img)

        axios.put(`${baseUrl}/update-campaign/${edit_id}`,formData )
        .then((res)=>{
          console.log(res);
          alert("Data updated successfully")
          navigate("/campaign")
          setSubmitting(false)
        })
        .catch((err)=>{
          console.log(err)
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
             className="border-solid border-3 border-sky-900 form-control"
             placeholder="Title"
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
             className="border-solid border-3 border-sky-900 form-control"
             placeholder="Description"

           />
           {errors.description && touched.description && errors.description}

           <input
             type="text"
             name="days"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.days}
             className="border-solid border-3 border-sky-900 form-control"
             placeholder="Days"

           />
           {errors.days && touched.days && errors.days}

           <input
             type="number"
             name="donor"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.donor}
             className="border-solid border-3 border-sky-900 form-control"
             placeholder="Donor"

           />
           {errors.donor && touched.donor && errors.donor}

           <input
             type="number"
             name="raised"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.raised}
             className="border-solid border-3 border-sky-900 form-control"
             placeholder="Raised"

           />
           {errors.raised && touched.raised && errors.raised}

           <input
             type="number"
             name="goal"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.goal}
             className="border-solid border-3 border-sky-900 form-control"
             placeholder="Goal"

           />
           {errors.goal && touched.goal && errors.goal}
           <input type="file" name="" id="" className="form-control border-solid border-3 border-sky-900" onChange={(e)=>setImg(e.target.files[0])}/>
           {/* <img src={path + "/" + edit.image} alt="" className='h-44'/> */}


           <Button type="submit" disabled={isSubmitting} className="form-control">
             Submit
           </Button>
         </form>
       )}
     </Formik>


    </div>
  )
}

export default EditCampaign
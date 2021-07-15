import './UserForm.scss';
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { productActions } from '../../store/index';
import { useDispatch , useSelector } from "react-redux";
import axios from '../../api/axios-firebase';



const initialValues = {
  address: '',
  email: '',
  phone: ''
}

// const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const validationSchema = Yup.object({
  address:
   Yup.string()
   .required('Required'),
  email:
    Yup.string()
    .email('Invalid email format')
    .required('Required'),
  phone:
   Yup.string()
//   .matches(phoneRegExp, 'please enter valid phone number')
  .required('Required')
})

const UserForm = () => {

    const dispatch = useDispatch();
    const productsFromRedux = useSelector((state) => state);


    const onSubmit = values => {
          const order = {
            userInformation: values,
            productsDetails: productsFromRedux
          }

        axios.post( '/orders.json', order )
            .then( res => {
              dispatch(productActions.emptyCart());
              document.getElementById("successText").style.display = "block";
              } )
              .catch( error => {
                console.log("error from user form",error)
              } );

              
        }


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  return (

    <div className="form-cart mx-auto mt-5">
        <form  className="w-100" onSubmit={formik.handleSubmit}>

          <div className='form-control'>
            <label htmlFor='address'>Address</label>
            <textarea
              rows="3"
              id='address'
              name='address'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className='error'>{formik.errors.address}</div>
            ) : null}
          </div>

          <div className='form-control'>
            <label htmlFor='phone'>Phone</label>

            <PhoneInput
              country={'eg'}
              inputProps={{name:"phone",id:"phone"}}
              inputStyle={{width: "100%",padding:"6px 12px 6px 48px"}}
              onChange={(phoneNumber, country, e)=>{formik.handleChange(e)} }
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className='error'>{formik.errors.phone}</div>
            ) : null}
          </div>
    
          <div className='form-control'>
            <label htmlFor='email'>E-mail</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
          </div>
        
            <div className="text-center">
                <button className="btn btn-success" type='submit'>Confirm Order</button>
                <p className="text-success mt-3" id="successText">Your information has been registered.. Thank you</p>
            </div>

        </form>
    </div>
    )

}

export default UserForm;
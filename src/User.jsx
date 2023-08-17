import React, { useEffect, useState } from "react";
import './App.css';
import { NavLink } from "react-router-dom";
// import logo from "./assets/logo.svg";
import * as Yup from "yup";
import { Formik } from "formik";

export const  User = ({name, age}) => {

    const [details, setDetails] = useState({
        email: "",
        password: ""
    })
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const arr = [1,2]
        // array destructuring
    // const a = arr[0]
    // const b = arr[1]
    // const [a, b]=arr

    const handleChange =(e, property)=>{
        setDetails({
            ...details,
            [property]: e.target.value
        })
    }


// for validation
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is not valid"),
        password: Yup.string().required("Password is required").min(8, "Password must be more than 8 charactors").max(10, "Password must be more than 10 charactors")
    })
// second is dependency array
    // useEffect(()=>{},[])

    return(
        <>
        <Formik initialValues={{
            email: "",
            password:""
        }}validationSchema={validationSchema} onSubmit={()=>{}}>
            {
                ({
                    values,errors,handleChange,handleSubmit
                })=>{
                    return(
                        <form onSubmit={handleSubmit}>
                            <input name="email" onChange={handleChange}/>
                            <br/>
                            {errors.email  ? errors.email : ""}
                            <br/>

                            {/* <input value={details.email} onChange={(e)=>{handleChange(e, "email")}}/> */}


                            <input name="password" type="password" onChange={handleChange}/>
                            <br/>
                            {errors.password  ? errors.password : ""}

                            {/* <input value={details.password} type="password" onChange={(e)=>{handleChange(e, "password")}}/> */}
                            <button type="submit">Submit</button>
                        </form> 
                    )
                }
            }
        </Formik>
            

            


            {/* <h1>
                This is component{name} {age}
                <NavLink to = "/"> Home</NavLink>
            </h1>
            <div>User Component</div>
            {x}
            <button onClick={()=>setX(x+1)}>click me</button>
            
            <img src={logo} alt="logo"/> */}
        </>
    );
};



export const  Home = () => {

    return(
    <h1>
        Home component<NavLink to="/user"> User</NavLink>
        <NavLink to="/profile"> Profile</NavLink>
    </h1>
    );
};





import React, { useState } from 'react'
import {Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, Select} from "@chakra-ui/react"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

export function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:7700/login",{email,password},{ withCredentials: true })
        .then(res=>{
            alert(res.data.msg);
            if(res.data.msg==="User logged in Successfully"){
                navigate("/")
            }
        }).catch(err=>{
            console.log(err);
        })

        setEmail("")
        setPassword("")
    }

    return (
        <Box width="30%" m="auto" marginTop="10%" mb="40px">
            <form onSubmit={handleSubmit} style={{padding:"20px",borderRadius:"15px",boxShadow:"rgb(31, 31, 31) 0px 3px 8px"}}>

                <Heading textAlign="center" fontSize="25px">Login Account</Heading><br/>
                <FormControl isRequired>

                    <FormLabel>Enter Your Email id</FormLabel>
                    <InputGroup>
                    <Input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter Registered Email id" required/>
                    </InputGroup><br/>

                    <FormLabel>Enter Your Password</FormLabel>
                    <InputGroup>
                    <Input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter Your Password" required/>
                    </InputGroup><br/>

                    <Button background="black" color="white" width="100%" _hover={{background:"black"}} type='submit'>Login</Button>

                </FormControl>
            </form>
        </Box>
    )
}

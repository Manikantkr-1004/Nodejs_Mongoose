import React, { useEffect, useState } from 'react'
import {Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, Select} from "@chakra-ui/react"
import axios from "axios";


export function Signup() {

    const [error,setError] = useState(false);
    const [formdata,setFormdata] = useState({
        username:"",
        email:"",
        dob:"",
        role:"",
        location:"",
        password:""
    });
    const [confirm,setConfrim] = useState("");

    useEffect(()=>{
        if(confirm===formdata.password){
            setError(false);
        }else{
            setError(true)
        }
    },[confirm])

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:7700/registration",formdata)
        .then((res)=>{
            alert(res.data.msg)
        }).catch((err)=>{
            console.log(err);
        })
        setFormdata({username:"",email:"",dob:"",role:"",location:"",password:""});
        setConfrim("")
    }
    

    return (
        <Box width="30%" m="auto" marginTop="100px" mb="40px">
            <form onSubmit={handleSubmit} style={{padding:"20px",borderRadius:"15px",boxShadow:"rgb(31, 31, 31) 0px 3px 8px"}}>

                <Heading textAlign="center" fontSize="25px">Create Account</Heading><br/>
                <FormControl isRequired>

                    <FormLabel>Enter Your Username</FormLabel>
                    <InputGroup>
                    <Input value={formdata.username} onChange={(e)=> setFormdata({...formdata,username:e.target.value})} type="text" placeholder="Enter Your Username" required/>
                    </InputGroup><br/>

                    <FormLabel>Enter Your Email</FormLabel>
                    <InputGroup>
                    <Input value={formdata.email} onChange={(e)=> setFormdata({...formdata,email:e.target.value})} type="text" placeholder="Enter Full Email" required/>
                    </InputGroup><br/>

                    <FormLabel>Enter Your DOB</FormLabel>
                    <InputGroup>
                    <Input value={formdata.dob} onChange={(e)=> setFormdata({...formdata,dob:e.target.value})} type="date" required/>
                    </InputGroup><br/>

                    <FormLabel>Select Your Role</FormLabel>
                    <InputGroup>
                    <Select value={formdata.role} onChange={(e)=> setFormdata({...formdata,role:e.target.value})} required>
                        <option value="">----Select Anyone----</option>
                        <option value="Admin">Admin</option>
                        <option value="Explorer">Explorer</option>
                    </Select>
                    </InputGroup><br/>

                    <FormLabel>Enter Your Location</FormLabel>
                    <InputGroup>
                    <Input value={formdata.location} onChange={(e)=> setFormdata({...formdata,location:e.target.value})} type="text" placeholder="Enter Your Full Location" required/>
                    </InputGroup><br/>

                    <FormLabel>Enter Your Password</FormLabel>
                    <InputGroup>
                    <Input value={formdata.password} onChange={(e)=> setFormdata({...formdata,password:e.target.value})} type="password" placeholder="Enter Your Password" required/>
                    </InputGroup><br/>

                    <FormLabel>Re-enter Your Password</FormLabel>
                    <InputGroup>
                    <Input isDisabled={formdata.password===""} value={confirm} onChange={(e)=> setConfrim(e.target.value)} type="password" placeholder="Re-enter Same Password" required/>
                    </InputGroup>
                    {error && <FormHelperText fontWeight="semibold" color="red">Your Password is not matching...</FormHelperText>}<br/>

                    <Button isDisabled={error} background="black" color="white" width="100%" _hover={{background:"black"}} type='submit'>Create Account</Button>

                </FormControl>
            </form>
        </Box>
    )
}

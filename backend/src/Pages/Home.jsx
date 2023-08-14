import React from 'react'
import styled from "styled-components"
import Cookies from 'js-cookie';

export function Home() {
    
    // const accessToken = Cookies.get("accessToken")
    // const username = Cookies.get("username")

    // console.log(accessToken,username);

    console.log('All Cookies:', document.cookie);


    return (
        <DIV>
            <img src="https://wallpaperaccess.com/full/1567685.jpg" alt="home" />
        </DIV>
    )
}

const DIV = styled.div`
    width: "100%";
    
    img{
        width: 100%;
        height: 100%;
    }
`;
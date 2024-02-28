import { redirect } from "next/navigation"

export default async function RegisterUser(){
    const val= {
        name: "gopal",
        password : "gopal",
        email:"gopal@gmail.com"
    }
    
    const response = await fetch("http://localhost:8080/auth/register",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(val),
        mode:"no-cors"
    })
    
    if(response.ok){
        redirect("/")
    }
}   
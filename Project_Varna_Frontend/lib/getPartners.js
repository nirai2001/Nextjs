import { revalidatePath } from "next/cache";
// import { headers } from "next/headers";

export default async function GetPartners(){
    const val= {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            username : "nirai",
            password : "narean"
        }),
        mode:"no-cors"
    }
    console.log(val)
    const token = await fetch("http://localhost:8080/auth/token",val)
    console.log(token)
    const key = await token.text();
    localStorage.setItem("token", key)
    const response = await fetch("http://localhost:8080/profession/get",{
        headers:{
            'Authorization' : 'Bearer ' + key
        },
        mode:"no-cors"
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const partners =await response.json()
    revalidatePath("/Partners")
    return partners
}
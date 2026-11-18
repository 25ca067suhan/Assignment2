import { useState, useSyncExternalStore } from "react"
export default function Password(){
    const pass="abcd"
    const[passwrd,setPasswrd]=useState("")
    function fun(){
        if (pass==passwrd){
            alert("Login Successfull")
        }
        else{
            alert("Invalid Password")
        }
    }
    return (
        <>
            <form onSubmit={fun}>
            <label>Enter Password:</label>
            <input type="password" onChange={(e)=>setPasswrd(e.target.value)}/>
           <input type="submit"></input>
            </form>
        </>
    )
}
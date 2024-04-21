'use client'
import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"
export default function ImagePicker({label , name}){
    const[pickedImage, setPickedImage] = useState()
    const imgInput = useRef()
    function handleChange(event){
        const file = event.target.files[0];

        if(!file){
            setPickedImage(null)
            return;
        }

        const fileReader = new FileReader()
        fileReader.onload = () =>{
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file)
    }

    function hanldeClick(){
        imgInput.current.click();
    }

    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p> No image Picked</p>}
                    {pickedImage && <Image src={pickedImage} alt="Picked Image" fill/>}
                </div>
                <input
                className={classes.input}
                type= "file"
                id = {name}
                accept = "image/png, image/jpeg"
                name = {name}
                ref= {imgInput}
                onChange={handleChange}
                required
                />
                <button className={classes.button} type="button" onClick={hanldeClick}>
                    Pick an Image
                </button> 
            </div>
        </div>
    )
}
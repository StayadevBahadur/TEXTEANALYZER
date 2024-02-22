import * as React from 'react';
// import {React} from 'react'
import { useState } from 'react'



export default function TextForm(props) {
    const [text, SetText] = useState('');
    const [emails, setEmails] = useState([]);

    
// Function to count words
    const findL = (Ted) => {
        let count = 0;
        let i = 0;
        while (i < Ted.length) {
            if (Ted[i] === " ") {

            } else {
                count++;
            }
            i++;
        }
        return count;
    };

    let numC = findL(text);
// Function for converting to upperCase
    const handleUpClick = () => {
       
        let newText;
        if (text === text.toUpperCase()) {
            newText = text.toLowerCase();
        } else {
            newText = text.toUpperCase();
            props.showAlert("Converted to UpperCase","success")
        }
        SetText(newText)
    }
    const handleOnchange = (event) => {
        SetText(event.target.value)

    }
    // Email Extracter function
    function extractEmails(text) {
        const emailRegex = /[a-zA-Z0-9._%*#&+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        return text.match(emailRegex);
    }


    const handleButtonClick = () => {
        const extractedEmails = extractEmails(text);
        setEmails(extractedEmails || []);
    };
    //Function for copy the text

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();   
            navigator.clipboard.writeText(text.value);      
          // Deselect the text
          window.getSelection().removeAllRanges();
        
    }
    const handleClear =()=>{
        SetText('')
    }

    return (
        <>
            <div>
                <h1 className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label mx-4"></label>
                    <textarea className="form-control  " onChange={handleOnchange} style={{backgroundColor:props.mode === 'light' ? 'white' : '#121212', color:props.mode === 'light' ? 'black' : 'white'}} rows="8" id="myBox" value={text}> </textarea>
                </div>
                <button className="btn btn-primary my-2 mx-2  " onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary ms-2 me-md-2" onClick={handleButtonClick}>Extract all the email</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>CopyText</button>
                <button className="btn btn-primary mx-2 mt-2" onClick={handleClear}>ClearText</button>
            </div>
            <div className="container mx-3 my-2">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h1>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} color={`${props.mode === 'light' ? 'dark' : 'light'}`}>{text.trim().split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {numC} characters</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} color={`${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").filter((element)=>{
                return element.length !==0
                }).length} minitues to read</p>
                <div>
                    <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Extracted Emails:</h2>
                    <ul>
                        {emails.map((email, index) => (
                            <li key={index} className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{email} </li>// for react it is neccesery to give keys
                        ))}
                    </ul>
                </div>
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h3>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text}</p>
            </div>
        </>
    )
}

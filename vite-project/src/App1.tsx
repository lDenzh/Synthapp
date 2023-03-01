import React, { useRef, useState } from "react";
import './App.css'
import axios, { isAxiosError } from 'axios';


const DragDropFiles = () => {
    const [file, setFile] = useState();
    const inputRef = useRef();

    const handleDrag = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFile(event.dataTransfer.files)
    };

    
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    async function Postman() {
        const myPDF = await toBase64(file)

        const { data } = await axios.post("http://localhost:8000/json", myPDF, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
        })
        console.log(data);
    }

    const handleUpload = () => {
        Postman();
    }

    if (file) return (
        <div className="uploads">
            <ul>
                {Array.from(file).map((file, idx) => <li key={idx}>{file.name}</li> )}
            </ul>
            <div className="actions">
                <button onClick={() => setFile(null)}>Cancel</button>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )
    return (
        <>
            {!file && (
            <div
                className="dropzone"
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <h1>Drag and drop PDF to upload</h1>
                <h1>or select PDF from file explorer</h1>
                <input
                    type = 'file'
                    accept= 'application/pdf'
                    onChange={(event) => setFile(event.target.files)}
                    hidden
                    ref = {inputRef}
                />
                <button onClick = {() => inputRef.current.click()} className="button">Choose file</button>
            </div>
            )}
        </>
    )
}

export default DragDropFiles;
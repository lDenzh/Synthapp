import React, { useRef, useState } from "react";
import './App.css'
import pdftobase64 from "pdf-to-base64"

const DragDropFiles = () => {
    const [file, setFile] = useState(null);
    const inputRef = useRef();

    const handleDrag = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFile(event.dataTransfer.files)
    };

    const handleUpload = () => {
        pdftobase64(file)
            .then(
                (response) => {
                    console.log(response); //Logger en base64 encoded string av pdf-en
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
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
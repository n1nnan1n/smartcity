import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        const formData = new FormData();
        
        // Append the file to the form data
        formData.append("file", file);
        
        // Make an HTTP POST request to upload the file
        try {
            const response = await axios.post("http://localhost:5000/file/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
            alert(`File uploaded successfully: ${response.data.message}`);
        } catch (error) {
            alert('Error uploading file: ' + (error.response?.data?.error || 'Server error'));
        }
    };

    return (
        <div>
            <h2>Upload a File</h2>
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>
                Upload!
            </button>
        </div>
    );
}

export default FileUpload;
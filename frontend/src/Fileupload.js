import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

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
        <Sheet  variant="outlined" color="neutral" sx={{ p: 5 }}
        className='imginput'
         >
   
      <Button
        variant="outlined"
        color="primary"
        startIcon={<CloudUploadIcon />}
        onClick={() => document.getElementById('fileInput').click()}
      >
        Upload a file
      </Button>
      <input
        id="fileInput"
        type="file"
        ref={(input) => (fileInputRef.current = input)}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    
      {selectedImage && (
        <div>
          <h2>Preview Image:</h2>
          <img src={selectedImage} alt="Selected" 
          className='imgpreview'
           />
        </div>
      )}
     
      </Sheet>
    );
}

export default FileUpload;
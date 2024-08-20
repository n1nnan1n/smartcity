// import React, { useState } from 'react';
// import axios from 'axios';

// function FileUpload() {
//     const [file, setFile] = useState(null);

//     const onFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             const response = await axios.post("http://localhost:5000/file/upload", formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log(response.data)
//             alert(`File uploaded successfully: ${response.data.message}`);
//         } catch (error) {
//             alert('Error uploading file: ' + (error.response?.data?.error || 'Server error'));
//         }
//     };

//     return (
//         <Sheet  variant="outlined" color="neutral" sx={{ p: 5 }}
//         className='imginput'
//          >
   
//       <Button
//         variant="outlined"
//         color="primary"
//         startIcon={<CloudUploadIcon />}
//         onClick={() => document.getElementById('fileInput').click()}
//       >
//         Upload a file
//       </Button>
//       <input
//         id="fileInput"
//         type="file"
//         ref={(input) => (fileInputRef.current = input)}
//         style={{ display: 'none' }}
//         onChange={handleFileChange}
//       />
    
//       {selectedImage && (
//         <div>
//           <h2>Preview Image:</h2>
//           <img src={selectedImage} alt="Selected" 
//           className='imgpreview'
//            />
//         </div>
//       )}
     
//       </Sheet>
//     );
// }

// export default FileUpload;
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

const ImageUpload = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const uploadFiles = async () => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload success', response);
    } catch (error) {
      console.error('Upload error', error);
    }
  };

  return (
    <Container >
    <Box sx={{ padding: 10 }}>
      <Box {...getRootProps()} sx={{
        border: '2px dashed #aaa',
        padding: 4,
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: 2
      }}>
        <input {...getInputProps()} />
        <Typography>Drag & drop some files here, or click to select files</Typography>
      </Box>
      <Box>
        {files.map((file, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <img src={file.preview} alt="Preview" width={100} />
            <Typography>{file.name}</Typography>
          </Box>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={uploadFiles}>
        Upload
      </Button>
    </Box>
    </Container>
  );
};

export default ImageUpload;

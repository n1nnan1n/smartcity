import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayImage = ({ imageId }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/img/id/${imageId}`);
        
        // Extract the buffer array from the response
        const bufferData = response.data.image.data.data;
        
        // Convert the buffer array to a base64 string
        const base64Image = btoa(
          new Uint8Array(bufferData)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        
        // Set the image source with the correct content type
        setImageSrc(`data:${response.data.image.contentType};base64,${base64Image}`);
      } catch (error) {
        console.error('Error fetching the image', error);
      }
    };

    if (imageId) {
      fetchImage();
    }
  }, [imageId]);

  return (
    <div>
      {imageSrc ? <img src={imageSrc} alt="Fetched from server" /> : <p>Loading...</p>}
    </div>
  );
};

export default DisplayImage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayImage = ({ imageId }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/img/id/${imageId}`, {
          responseType: 'arraybuffer',
        });

        // Convert the response data to base64
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );

        // Set the image source with the correct content type
        setImageSrc(`data:${response.headers['content-type'].toLowerCase()};base64,${base64}`);
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

import React, { useState } from 'react';
import axios from 'axios';

function DisplayImage() {
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState('');

    const fetchImage = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/file/image/${filename}`, {
                responseType: 'blob' // Important to specify the response type as 'blob'
            });

            const imageBlob = response.data;
            const imageUrl = URL.createObjectURL(imageBlob);
            setImage(imageUrl);
        } catch (err) {
            console.error('Error fetching the image:', err);
            setImage(null);
        }
    };

    const handleInputChange = (e) => {
        setFilename(e.target.value);
    };

    return (
        <div style={{marginTop:'150px'}}>
            <input
                type="text"
                placeholder="Enter filename"
                value={filename}
                onChange={handleInputChange}
            />
            <button onClick={fetchImage}>Fetch Image</button>

            {image && <img src={image} alt="Fetched from MongoDB" />}
        </div>
    );
}

export default DisplayImage;

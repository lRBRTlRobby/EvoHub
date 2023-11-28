import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [users, setUsers] = useState({});

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };



  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Replace 'http://localhost:8080' with the actual base URL of your API
      const response = await axios.post('http://localhost:8080/Image/upload', formData);

      // Assuming the response contains the image URL
      await setImageUrl(response.data);
      console.log('Image uploaded successfully:', response.data);
      // Clear the file input
      setFile(null);
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  const handleUser = async () => {
    try {
      // ... (unchanged part)
      // Replace 'http://localhost:8080' with the actual base URL of your API
      const response = await axios.get('http://localhost:8080/User/getAllUsers');

      // Assuming the response contains user data
      const userData = response.data;
      setUsers(prevUsers => ({ ...prevUsers, ...userData }));
      // Use the user data as needed
      console.log('Users retrieved successfully:', userData);
      console.log('sets Users:', users);
      // Find the user with userid 15
      const userWithId15 = userData.find(user => user.userid === 15);
      if (userWithId15) {
        // Use axios to update the user with userid 15
        console.log('User with userid 15:', userWithId15);
        console.log('Image URL:', imageUrl);
        // Ensure imageUrl is not null before updating the user
        if (imageUrl !== null) {
          await axios.put(
            `http://localhost:8080/User/updateUser`,
            {
              userid: userWithId15.userid,
              bio: imageUrl,
              city: users.city,
              // ... (other fields to update)
            },
            {
              params: {
                userid: userWithId15.userid,
              },
            }
          );

          console.log('User with userid 15 updated successfully.');
        } else {
          console.log('Image URL is null. Skipping user update.');
        }
      }

      // ... (unchanged part)

    } catch (error) {
      console.error('Error retrieving user data:', error.message);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={async () => {  handleUpload(); }} disabled={!file}>
  Upload Image
</button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image</h3>
          <p>Image URL: {imageUrl}</p>
          <p>Image URL: {imageUrl.filename}</p>
          <p>Image User: {users.bio}</p>
          <img src={"/uploads/" + imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
          <button onClick={ () => {  handleUser(); }} >
  Fetch User Data
</button>

{users != null && (
  <>
  <p>Image User: {users.userid}asdasd</p>
  <p>Image User: {users.bio}asdasd</p>
  </>
)}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

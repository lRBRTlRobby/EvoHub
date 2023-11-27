
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from './Components/UserProvider';

export default function ImageDisplay() {
    const { user } = useUser();
  return (
    <div>
        ImageDisplay
        {/* <img src={"/uploads/" + users.bio} alt="Uploaded" style={{ maxWidth: '100%' }} /> */}
                    {user != null && (
                        <>
                        <p>Image User: {user.bio}</p>
                        <img src={"/uploads/" + user.bio} alt="Uploaded" style={{ maxWidth: '100%' }} />
                        </>
                    )}
    </div>
  )
}

import React, { useEffect, useState } from "react";
import { imageDb, auth } from '../../FirebaseConfig';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import './upload.css';

function FirebaseImageUpload() {
    const [img, setImg] = useState('');
    const [imgUrl, setImgUrl] = useState([]);
    const [user, setUser] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = () => {
        if (img !== null && user) {
            const imgRef = ref(imageDb, `files/${v4()}`);
            uploadBytes(imgRef, img).then(value => {
                console.log(value);
                getDownloadURL(value.ref).then(url => {
                    setImgUrl(data => [...data, url]);
                    setUploadSuccess(true);
                });
            });
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // You can use the name and email values as needed
        console.log("Name:", name);
        console.log("Email:", email);
    }

    useEffect(() => {
        setImgUrl([]);
        
        listAll(ref(imageDb, "files")).then(imgs => {
            console.log(imgs);
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImgUrl(data => [...data, url]);
                });
            });
        });

        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="uploadcss">
            <h1>Upload USG Image</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:  <input type="text" placeholder="Name Of Organization" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email: <input type="email" placeholder="abhi@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                {/* <button type="submit">Submit</button> */}
            </form>
            <div className="uploadfirst">
                <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                <button className="uploadbtn" onClick={handleClick} disabled={!user}>Upload</button>
                <a className="donebtn" href="/">Done</a>
            </div>
            <br />
            <div className="uploaded-images">
                {imgUrl.map((dataVal, index) => (
                    <div key={index}>
                        <img src={dataVal} alt={`uploaded-${index}`} height="200px" width="200px" />
                        <br />
                    </div>
                ))}
            </div>
            {uploadSuccess && <p>Thank you! The image has been successfully uploaded. <br />
                We will contact you shortly.</p>}
        </div>
    )
}

export default FirebaseImageUpload;

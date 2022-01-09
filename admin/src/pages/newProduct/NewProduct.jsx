import { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import './newProduct.css';
import app from '../../firebase';
export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const handleChange = e => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const fileName = file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      error => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
          default:
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };
  const handleCat = e => {
    setCat(e.target.value.split(', '));
  };
  console.log(cat);
  console.log(inputs);
  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input
            name='img'
            type='file'
            id='file'
            onChange={e => setFile(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Name</label>
          <input
            name='name'
            type='text'
            placeholder='Apple Airpods'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Desc</label>
          <input
            name='desc'
            type='text'
            placeholder='Apple Airpods'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Price</label>
          <input
            name='price'
            type='number'
            placeholder='Apple Airpods'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Categories</label>
          <input
            name='categories'
            type='text'
            placeholder='Apple Airpods'
            onChange={handleCat}
          />
        </div>
        <button className='addProductButton' onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

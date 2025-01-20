'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ lable, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (url) => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>
        {lable}
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image picket yet.</p>}
            {pickedImage && (
              <Image src={pickedImage} alt="The image selected by user." fill />
            )}
          </div>
          <input
            onChange={handleImageChange}
            ref={imageInput}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            className={classes.input}
          />
          <button
            onClick={handlePickClick}
            type="button"
            className={classes.button}
          >
            Pick an Image
          </button>
        </div>
      </label>
    </div>
  );
}

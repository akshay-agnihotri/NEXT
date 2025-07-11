"use client";
import { useState, useRef } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const inputRef = useRef();

  const handleImagePick = (event) => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="pickedImage" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          onClick={handleImagePick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;

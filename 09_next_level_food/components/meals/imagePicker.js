"use client";
import { useRef } from "react";
import classes from "./imagePicker.module.css";

const ImagePicker = ({ label, name }) => {
  const inputRef = useRef();
  const handlePickImage = () => {
    inputRef.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
        />
        <button className={classes.button} onClick={handlePickImage} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;

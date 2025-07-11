"use client";
import { useFormStatus } from "react-dom";

const HandleFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default HandleFormSubmit;

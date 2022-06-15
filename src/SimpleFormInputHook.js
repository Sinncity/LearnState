import React from "react";
import "./SimpleFormInputHook";
import useFormState from "./useFormState";

export default function SimpleFormInputHook() {
  const [email, handleChange, reset] = useFormState("");
  return (
    <div className="SimpleFormInputHook">
      <input type="text" value={email} onChange={handleChange} />
      <button onClick={reset}>Press </button>
    </div>
  );
}

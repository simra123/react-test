import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast(){
  const success = () => toast.success("succes")
  const error = () => toast.error("succes")
  const info = () => toast.info("succes")

  return (
    <div>
      <button onClick={success}> success </button>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar = { false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
       <button onClick={error}> eroor </button>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar = { false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <button onClick={info}> info </button>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar = { false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export default Toast;
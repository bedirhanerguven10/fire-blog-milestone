import { toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css'

export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
  });
};

export const toastInfoNotify = (msg) => {
  toast.info(msg, {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
  });
};
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { CLIENT_MSG } from '../../constants/actionTypes';

const Notify = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.auth.message?.info);
  const status = useSelector((state) => state.auth.message?.status);

  useEffect(() => {
    toast(message);
    dispatch({ type: CLIENT_MSG, message: { info: null, status: null } });
  }, [message]);

  return <ToastContainer />;
};

export default Notify;

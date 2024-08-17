import React from 'react';
import notfound from '../../assets/notfound.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center'>
      
      <img src={notfound} className='w-[100%] md:w-[70%] lg:w-[50%]' alt="" />
      <button className='px-5 text-white bg-orange-500 py-2' onClick={() => navigate('/login')}>Take Me Back To LoginPage</button>
    </div>
  )
}

export default NotFound

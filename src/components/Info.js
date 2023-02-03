import React from 'react';

const Info = () => {
  return (
    <>
      <div>
        <img src='./Rectangle.png' alt='Profile Picture' />
        <div className='text-center py-4'>
          <h1 className='text-2xl font-bold tracking-wider'>Laura Smith</h1>
          <p className='text-md font-normal text-[#F3BF99]'>Frontend Developer</p>
          <span className='text-sm font-normal'>laurasmith.website</span>
        </div>

        <div className='flex justify-evenly my-2'>
          <div className='bg-white py-2 px-5 w-max flex gap-1 rounded-sm'>
            <img src='./message.svg' alt='email' />
            <p className='text-black'>Email</p>
          </div>
          <div className='bg-blue-300 py-2 px-5 w-max flex gap-1 rounded-sm'>
            <img src='./linkedin.svg' alt='linkedin' />
            <p className='text-white'>LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

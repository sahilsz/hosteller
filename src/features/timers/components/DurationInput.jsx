import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function DurationInput({ onTime, offTime, setOnTime, setOffTime }) {
  const handleOnTimeChange = (e) => {
    const { name, value } = e.target;

    if (name === 'hours' && value >= 0 && value <= 23) {
      setOnTime((prevState) => ({
        ...prevState,
        hours: Number(value),
      }));
    } else if (name === 'minutes' && value >= 0 && value <= 59) {
      setOnTime((prevState) => ({
        ...prevState,
        minutes: value,
      }));
    }
  };

  const handleOffTimeChange = (e) => {
    const { name, value } = e.target;

    if (name === 'hours' && value >= 0 && value <= 23) {
      setOffTime((prevState) => ({
        ...prevState,
        hours: value,
      }));
    } else if (name === 'minutes' && value >= 0 && value <= 59) {
      setOffTime((prevState) => ({
        ...prevState,
        minutes: value,
      }));
    }
  };
  return (
    <div className='flex justify-between mt-4'>
      <div className='flex flex-col gap-4'>
        <p>On Time</p>
        <div className='flex items-center space-x-2'>
          <div className='flex items-center'>
            <input
              type='number'
              id='hours'
              name='hours'
              className='w-10 p-2 rounded focus:outline-none'
              min='0'
              max='23'
              placeholder='00'
              value={onTime.hours}
              onChange={handleOnTimeChange}
            />
            <span className='ml-2 text-lg'>h</span>
          </div>

          <div className='flex items-center'>
            <input
              type='number'
              id='minutes'
              name='minutes'
              className='w-10 p-2 rounded focus:outline-none'
              min='0'
              max='59'
              placeholder='00'
              value={onTime.minutes}
              onChange={handleOnTimeChange}
            />
            <span className='ml-2 text-lg'>mins</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p>Off Time</p>
        <div className='flex items-center space-x-2'>
          <div className='flex items-center'>
            <input
              type='number'
              id='hours'
              name='hours'
              className='w-10 p-2 rounded focus:outline-none'
              min='0'
              max='23'
              placeholder='00'
              value={offTime.hours}
              onChange={handleOffTimeChange}
            />
            <span className='ml-2 text-lg'>h</span>
          </div>

          <div className='flex items-center'>
            <input
              type='number'
              id='minutes'
              name='minutes'
              className='w-10 p-2 rounded focus:outline-none'
              min='0'
              max='59'
              value={offTime.minutes}
              onChange={handleOffTimeChange}
              placeholder='00'
            />
            <span className='ml-2 text-lg'>mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}

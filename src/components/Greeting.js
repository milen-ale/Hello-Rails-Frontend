import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  greeting,
  greetingStatus,
  getGreeting,
} from '../redux/greeting/greetingSlice';
import Loading from './Loading';

const Greeting = () => {
  const randomGreeting = useSelector(greeting);
  const status = useSelector(greetingStatus);
  const dispatch = useDispatch();

  const handleRandomGreeting = () => {
    dispatch(getGreeting());
  };

  useEffect(() => {
    setTimeout(() => {
      if (randomGreeting.length === 0) dispatch(getGreeting());
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div className="mt-3 flex items-center justify-between w-[360px]">
          <h1 className="text-2xl font-forzan flex gap-2 items-center">
            <span className="text-white bg-black/50">Greeting:</span>
            <span className="text-xl underline underline-offset-4 decoration-wavy decoration-amber-500 font-syera-inline">{randomGreeting}</span>
          </h1>
          <button type="button" className="capitalize bg-amber-500 p-2 rounded-lg group" onClick={handleRandomGreeting}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-white group-hover:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Greeting;

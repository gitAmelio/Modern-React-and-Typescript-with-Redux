import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const Modal: React.FC<ModalProps> = ({children, ...rest}) => {

  useEffect(()=>{
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [])

  const {onClick, actionBar, className} = rest;

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClick} className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className={twMerge("fixed inset-40 p-10 bg-white", className)}>
        {children}
        <div className='absolute bottom-[20px] right-[20px] left-[20px]'>
          <div className='flex flex-row justify-between'>
            {actionBar}
            <Button success onClick={onClick} className="max-w-[30%] min-w-[30%]" >Close Modal</Button>
          </div>
        </div>
      </div>
    </div>,

    // add div with id 'modal-container' at the bottom of the body tag 
    document.getElementById('modal-container') as Element
  )
}

export default Modal; 
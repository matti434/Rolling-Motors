import React from 'react'

export default function ModalBase({isOpen,onClose,children,title}){
   
  if(!isOpen) return null;

  return (
    <>
    <div className='fixed inset-0 bg-black/60 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-xl shadow-xl'>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
    </>
  )
}


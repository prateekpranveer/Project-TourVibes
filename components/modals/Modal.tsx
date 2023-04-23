import React from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import AlertModal from './AlertModal';

interface ModalProps {
  showModal: boolean;
  modalType: string;
  setShowModal: React.Dispatch<React.SetStateAction<{showing: boolean, modalType: string}>>
}

const Modal = ({modalType, showModal, setShowModal }: ModalProps) => {
  return (
    <>
      <div className={`${showModal ? 'opacity-80' : 'opacity-0 pointer-events-none'} fixed top-0 left-0 w-full h-full bg-gray-300 z-40 transition-opacity`}>

      </div>
      
      <div
        className={`${
          showModal ? 'opacity-100 shadow-lg' : 'opacity-0 pointer-events-none'
        } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity`}
      >

        <div className='z-50 bg-white p-12 rounded-lg w-72'>
            {
                modalType==='Login' && <LoginModal setShowModal={setShowModal}/>
                
            }
            {
                modalType==='Signup' && <SignupModal setShowModal={setShowModal}/>
            } 

        </div>
        

      </div>
    </>
  );
};

export default Modal;

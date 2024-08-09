"use client";

import React, { useState } from "react";
interface ConfirmationActionModalProps {
  openModalButton: React.ReactNode;
  cancelButtonText?: string;
  confirmButtonText?: string;
  openModalButtonStyle?: string;
  modalTitle?: React.ReactNode;
  modalBody?: React.ReactNode;
  onConfirm?: () => void;
}

const ConfirmationActionModal: React.FC<ConfirmationActionModalProps> = ({
  openModalButton,
  cancelButtonText = "",
  confirmButtonText = "",
  openModalButtonStyle = "",
  modalTitle,
  modalBody,
  onConfirm,
}) => {
  const [showConfirmationModal, setConfirmationModal] = useState(false);

  const handleModalClick = () => {
    setConfirmationModal(true);
  };
  const handleConfirmClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    handleCloseModal();
  };
  const handleCloseModal = () => {
    setConfirmationModal(false);
  };

  return (
    <>
      <button
        className={`${openModalButtonStyle}`}
        data-ripple-light="true"
        data-dialog-target="animated-dialog"
        onClick={handleModalClick}
      >
        {openModalButton}
      </button>
      {showConfirmationModal && (
        <div
          data-dialog-backdrop="animated-dialog"
          data-dialog-backdrop-close="true"
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 "
        >
          <div
            data-dialog="animated-dialog"
            data-dialog-mount="opacity-100 translate-y-0 scale-100"
            data-dialog-unmount="opacity-0 -translate-y-28 scale-90 pointer-events-none"
            data-dialog-transition="transition-all duration-300"
            className=" poppins-regular relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900  poppins-semibold">
              {modalTitle}
            </div>
            <div className="relative p-4 font-sans text-center text-lg font-semibold antialiased leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500  poppins-medium">
              {modalBody}
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-textColor">
              <button
                className=" poppins-semibold px-6 py-3 mr-1 font-sans text-xs font-bold uppercase transition-all rounded-lg hover:text-red-300 middle none center"
                onClick={handleCloseModal}
              >
                {cancelButtonText}
              </button>
              <button
                className="w-25 h-9 p-2 flex items-center justify-center  border-footerColor border-2 rounded-md shadow-sm text-md font-medium text-footerColor hover:bg-footerColor hover:text-white hover:ease-in-out focus:ring-offset-2"
                onClick={handleConfirmClick}
              >
                {confirmButtonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationActionModal;

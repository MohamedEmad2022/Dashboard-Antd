import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [percent, setPercent] = useState(0);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setIsWarningModal(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsWarningModal(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsWarningModal(false);
  };

  return (
    <StateContext.Provider
      value={{
        percent,
        setPercent,
        isWarningModal,
        setIsWarningModal,
        showModal,
        handleOk,
        handleCancel,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

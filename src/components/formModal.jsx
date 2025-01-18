import React from "react";
import { useStateContext } from "../context/contextProvider";
import { Modal } from "antd";

function FormModal() {
  const { isModalOpen, handleOk, handleCancel, isWarningModal } =
    useStateContext();

  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className="text-blue-900 text-lg">Profile Incomplete: </p>
        <p className="text-blue-900">
          the profile incomplete. do you want to save your progress and finish
          later ?{" "}
        </p>
      </Modal>
      <Modal open={isWarningModal} onOk={handleOk} onCancel={handleCancel}>
        <p className="text-red-600 text-lg">Warning: </p>
        <p className="text-blue-900">
          canceling now will delete all enteredvinformation ?{" "}
        </p>
      </Modal>
    </>
  );
}

export default FormModal;

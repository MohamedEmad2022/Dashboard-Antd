import React from "react";
import { useStateContext } from "../context/contextProvider";
import { Button, ConfigProvider, Modal } from "antd";

function FormModal() {
  const { isModalOpen, handleOk, handleCancel, isWarningModal } =
    useStateContext();

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Modal: {},
          },
          token: {
            colorPrimary: "#003465",
          },
        }}
      >
        <Modal
          footer={() => (
            <>
              <Button
                onClick={() => handleCancel()}
                className="w-[108px] h-[38px] text-[#003465] rounded-[7px] border-[#003465]"
              >
                Discard
              </Button>
              <Button
                onClick={() => handleOk()}
                className="bg-[#003465] text-white w-[108px] h-[38px] rounded-[7px] "
              >
                Finish Later
              </Button>
            </>
          )}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p className="text-[#323F49] text-[18px] font-[700]">
            Profile Incomplete:{" "}
          </p>
          <p className="text-[#323F49] text-[14px] font-[500]">
            the profile incomplete. do you want to save your progress and finish
            later ?{" "}
          </p>
        </Modal>
        <Modal
          footer={() => (
            <>
              <Button
                onClick={() => handleCancel()}
                className="w-[108px] h-[38px] text-[#003465] rounded-[7px] border-[#003465]"
              >
                Discard
              </Button>
              <Button
                onClick={() => handleOk()}
                className="bg-[#003465] text-white w-[108px] h-[38px] rounded-[7px] "
              >
                Save and Exite
              </Button>
            </>
          )}
          open={isWarningModal}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p className="text-[#FF0024] text-[18px] font-[700]">Warning: </p>
          <p className="text-[#323F49] text-[14px] font-[500]">
            canceling now will delete all enteredvinformation ?{" "}
          </p>
        </Modal>
      </ConfigProvider>
    </>
  );
}

export default FormModal;

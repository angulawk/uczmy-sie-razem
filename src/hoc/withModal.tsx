import { useModal } from "@app/hooks/useModal";

interface WithModalProps {
  WrappedComponent: React.ComponentType;
}

export const withModal = ({ WrappedComponent }: WithModalProps) => {
  return () => {
    const { isModalOpen, closeModal } = useModal();

    // const modalStyle = {
    //   width: "500px",
    //   height: "500px"
    // };

    // const overlayStyle = {
    //   backgroundColor: "rgba(0, 0, 0, 0.3)"
    // };

    return isModalOpen ? (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg" style={modalStyle}>
          <button
            className="absolute top-2 right-2 text-gray-500 text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <WrappedComponent />
        </div>
        <div
          className="fixed top-0 left-0 w-full h-full"
          style={overlayStyle}
          onClick={closeModal}
        ></div>
      </div>
    ) : null;
  };
};

import React from "react";
import Image from "next/image";

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <div className="fixed top-5 start-50 translate-middle-x bg-success text-white px-4 py-3 rounded d-flex align-items-center shadow-lg animate-slide-in z-50">
      <Image
        src="/SuccessIcon.svg"
        width={20}
        height={20}
        className="rounded-lg me-2"
        alt="success icon"
      />
      <span className="d-block">{message}</span>
    </div>
  );
};

export default SuccessMessage;

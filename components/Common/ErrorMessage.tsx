import React from "react";
import Image from "next/image";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="fixed top-5 start-50 translate-middle-x bg-danger text-white px-4 py-3 rounded d-flex align-items-center shadow-lg animate-slide-in z-50">
      <Image
        src="/ErrorIcon.svg"
        width={20}
        height={20}
        className="rounded-lg me-2"
        alt="error icon"
      />
      <span className="d-block">{message}</span>
    </div>
  );
};

export default ErrorMessage;

import React from "react";
import Spinner from "./Spinner";

interface Props {
  loading: boolean;
  action: any;
  text: string;
}

const AuthButton: React.FC<Props> = ({ loading, action, text }) => {
  return (
    <div className="w-4/12 md:w-3/12">
      <button
        type="submit"
        className="w-full h-8 font-nunito font-normal bg-blue-500 hover:bg-blue-700 rounded-full text-white text-md"
        onClick={action}
      >
        {loading ? <Spinner /> : `${text}`}
      </button>
    </div>
  );
};

export default AuthButton;

import React from "react";
import Spinner from "./Spinner";

interface Props {
  loading: boolean;
  action: any;
  text: string;
}

const AuthButton: React.FC<Props> = ({ loading, action, text }) => {
  return (
    <div className="col-6 col-md-4">
      <button
        type="submit"
        className="btn btn-primary w-100"
        onClick={action}
      >
        {loading ? <Spinner /> : text}
      </button>
    </div>
  );
};

export default AuthButton;

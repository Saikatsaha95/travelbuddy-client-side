import React from "react";
import { useLocation, useHistory } from "react-router";
import useAuth from "../../context/useAuth";

const Login = () => {
  const { signInUsingGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="mx-auto  mt-5 bg-dark w-25 p-5">
      <div className="text-center">
        <button className="btn btn-danger " onClick={handleGoogleSignIn}>
          Google sign in
        </button>
      </div>
    </div>
  );
};

export default Login;

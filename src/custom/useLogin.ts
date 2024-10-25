import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/Authcontext";
import { LoginFormInputs } from "../types";

export const useLogin = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useContext must be used within an AuthProvider");
  }

  const { setUserData } = authContext;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (val) => {
    try {
      const { data } = await axios.post(`https://dummyjson.com/auth/login`, val);
      localStorage.setItem("userTkn", data.accessToken);
      setUserData();
      navigate("/dashboard");
      toast.success(`wlecome back ${data.firstName}`);
    } catch (error) {
      console.log(error);
      toast.error("Auth error try again");
    }
  };
  return { register, errors, onSubmit, handleSubmit };
};

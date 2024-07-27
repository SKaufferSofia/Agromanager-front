import React from "react";
import { useDispatch } from "react-redux";
import { saveToken, saveUserData, signIn } from "@/redux/reducer";
import { IUser } from "@/interfaces/interfacesUser";

const useUserData = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch(saveToken(token));
        dispatch(signIn(true));
      }
    }
  }, [dispatch]);

  const saveTokenStorage = (token: string) => {
    localStorage.setItem("token", token);
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData");
      if (userData) {
        dispatch(saveUserData(JSON.parse(userData)));
      }
    }
  }, [dispatch]);

  const saveUserDataStorage = (userData: IUser) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const logOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      dispatch(signIn(false));
    }
  };

  return { saveTokenStorage, saveUserDataStorage, logOut };
};

export default useUserData;

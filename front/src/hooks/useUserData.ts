import React from "react";

const useUserData = () => {
  React.useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      return JSON.parse(userData);
    }
  }, []);
};

export default useUserData;

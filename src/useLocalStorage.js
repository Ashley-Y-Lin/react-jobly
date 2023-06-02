import React, { useState, useEffect } from "react";

//TODO: consider null vs "" for logged out and remove 'token' when logging out
const useLocalStorage = (key) => {
  const localVal = localStorage.getItem(key) || "";
  const [localStorageVal, setLocalStorageVal] = useState(localVal);

  useEffect(function checkLocalStorage() {
    if (localStorageVal === "") {
      localStorage.removeItem(key);
    }
    localStorage.setItem(key, localStorageVal);
  }, [key, localStorageVal]);

  return [localStorageVal, setLocalStorageVal];
};

export default useLocalStorage;
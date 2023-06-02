import React, { useState, useEffect } from "react";

const useLocalStorage = (key) => {
  const localVal = localStorage.getItem(key) || "";
  const [localStorageVal, setLocalStorageVal] = useState(localVal);

  useEffect(function checkLocalStorage(val) {
    localStorage.setItem(key, localStorageVal);
  }, [key, localStorageVal]);

  return [localStorageVal, setLocalStorageVal];
};

export default useLocalStorage;
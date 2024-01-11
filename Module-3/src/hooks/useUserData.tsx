import React, { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const controller = new AbortController();

  const url = "https://jsonplaceholder.typicode.com/users/";

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);
  return {isLoading, error, data};
};

export default useUserData;

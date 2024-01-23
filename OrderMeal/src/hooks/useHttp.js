import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(response.message || "fetch fail...");
  }

  return result;
}

const useHttp = (url, config, init) => {
  const [data, setData] = useState(init);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async function(data){
    setIsLoading(true);
    try {
      const result = await sendHttpRequest(url, {...config, body : data});
      setData(result);
      setError(null);
    } catch (error) {
      setError(error.message || "문제 발생");
    }
    setIsLoading(false);
  },[url, config])

  useEffect(() => {
    if(config && (config.method==="GET" || !config.method)){
      sendRequest();
    }
  }, [sendRequest, config]);

  return { data, error, isLoading, sendRequest};
};

export default useHttp;

import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();

        setData(data);
      }

      fetchData();
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false)
    }
  }, [url]);

  return { data, isLoading, error };
};

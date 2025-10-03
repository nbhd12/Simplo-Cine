import { useEffect, useState } from "react";

export const useFetch = <T>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState<unknown | null>(null);

  useEffect(() => {
    if (!path || path.includes("undefined") || path.includes("//")) {
      setLoading(false);
      return;
    }
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;

        const separator = path.includes("?") ? "&" : "?";
        const url = `${baseUrl}${path}${separator}api_key=${apiKey}&language=en-US`;
        // console.log("Fetching:", url);
        const response = await fetch(url, {
          headers: {
            accept: "application/json",
          },
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const json = (await response.json()) as T;

        if (isMounted) setData(json);
      } catch (error) {
        if (isMounted) {
          setError(true);
          setErrorMsg(error);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [path]);

  return { data, loading, error, ErrorMsg };
};

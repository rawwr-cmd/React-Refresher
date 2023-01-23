import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<null | any>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();
    // console.log(controller);

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err: string | any) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    fetchData();

    //clean up function
    return () => {
      console.log("hi");
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

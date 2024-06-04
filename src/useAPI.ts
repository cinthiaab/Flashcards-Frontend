import { useState, useEffect } from "react";

export function useAPI<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          const errorData = await response.json();
          throw new Error(
            "Erro na resposta da API: " + JSON.stringify(errorData)
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

import { useState, useEffect } from "react";

const useApiData = (apiUrl) => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setApiData(jsonData);
      } catch (error) {
        setApiError(error.message || "An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, [apiUrl]);

  return { apiData, isLoading, apiError };
};

export default useApiData;

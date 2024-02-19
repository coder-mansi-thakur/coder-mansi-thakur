import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface UseGetOptions<T> {
  url: string;
  initialData?: T;
}

interface UseGetResult<T> {
  data: T | undefined;
  error: AxiosError<unknown> | undefined;
  isLoading: boolean;
}

export function useGet<T>({ url, initialData }: UseGetOptions<T>): UseGetResult<T> {
  const [data, setData] = useState<T | undefined>(initialData);
  const [error, setError] = useState<AxiosError<unknown> | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

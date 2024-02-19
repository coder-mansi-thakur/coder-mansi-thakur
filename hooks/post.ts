import { useState } from 'react';
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

interface UsePostOptions<T> {
  url: string;
  initialData?: T;
}

interface UsePostResult<T> {
  data: T | undefined;
  error: AxiosError<unknown> | undefined;
  isLoading: boolean;
  post: (data?: any, config?: AxiosRequestConfig) => Promise<void>;
}

export function usePost<T>({ url, initialData }: UsePostOptions<T>): UsePostResult<T> {
  const [data, setData] = useState<T | undefined>(initialData);
  const [error, setError] = useState<AxiosError<unknown> | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const post = async (postData?: any, config?: AxiosRequestConfig) => {
    setIsLoading(true);

    try {
      debugger
      const response: AxiosResponse<T> = await axios.post(url, postData, config);
      setData(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, post };
}


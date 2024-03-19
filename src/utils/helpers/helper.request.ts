import axios from 'axios';
import { stringify } from '@/src/utils/utils/util.string';
import { urlBuilder } from '@/src/utils/utils/util.url';

import type { AxiosRequestConfig } from 'axios'
import type { Response, TTokenResponse } from '@/src/types/type';

// Define a helper function for making API requests
async function makeRequest<TRequest,TResponse>(method: string, path: string, data?: TRequest, queryParams?: any) {

    const url : string = urlBuilder(path,queryParams);
    //const { readAuthAsync } = useAuthInfo();
    //const token : TTokenResponse | undefined = await readAuthAsync();

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };
      
    //   if (token?.accessToken) {
    //     headers['Authorization'] = 'Bearer ' + token.accessToken;
    //   }

    const options : AxiosRequestConfig = {
        url: url,
        method,
        headers: headers
    };

    // Add request body if data is provided
    if (data) {
        options.data = stringify(data);
    }

    // Make the API request
    try {
        const response = await axios<Response<TResponse>>(options);
        return response.data;

    }
    catch (err : any) {
        console.log('Error: ', err);
    }

    // Return the response data
}

// Define your REST API request methods
export async function get<TRequest, TResponse>(path: string, queryParams?: any) {
    return makeRequest<TRequest, TResponse>('GET', path, undefined, queryParams);
}

export async function post<TRequest, TResponse>(path: string, data?: any) {
    return makeRequest<TRequest, TResponse>('POST', path, data);
}

export async function put<TRequest, TResponse>(path: string, data?: any) {
    return makeRequest<TRequest, TResponse>('PUT', path, data);
}

export async function del<TRequest, TResponse>(path: string, data?: any) {
    return makeRequest<TRequest, TResponse>('DELETE', path, data);
}
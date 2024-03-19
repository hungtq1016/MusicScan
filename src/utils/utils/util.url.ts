export function urlBuilder(path: string, params?: object): string {

    let queryString : string = process.env.EXPO_PUBLIC_API_URL + ':' + process.env.EXPO_PUBLIC_API_HOST + path;

    if (params) {
        const query = Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
        queryString += `?${query}`;
    }
    
    return queryString;
}

export type TMusic = {
    id:string;
    title: string;
    singer: string;
    image: string;
}

export type Response<T> = {
    data: T,
    message: string,
    statusCode: number,
    isError: boolean
};

export type TTokenResponse = {
    accessToken: string,
    refreshToken: string,
    tokenType: string,
    expiredAt: string
}

export type TPagination = {
    pageNumber: number
    pageSize: number
    firstPage: number
    lastPage: number
    totalPages: number
    totalRecords: number
    nextPage: number
    previousPage: number
}

export type TPaginationResponse<T> = TPagination & {
    data: T[],
}

export type TFileResponse = {
    id: string
    title: string
    alt: string
    size: number
    path: string
    extension: string
}
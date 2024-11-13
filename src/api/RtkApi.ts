import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    tagTypes: ['Review'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bbaco92isfvukfbtqvrh.containers.yandexcloud.net',
    }),
    endpoints: (builder) => ({}),
});

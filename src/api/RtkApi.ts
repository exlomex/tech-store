import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {USER_ACCESS_TOKEN_KEY} from "@/const/localStorage";
import {StateSchema} from "@/store/config";

export const rtkApi = createApi({
    tagTypes: ['Review', 'Goods', 'Cart'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bbaco92isfvukfbtqvrh.containers.yandexcloud.net',
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem(USER_ACCESS_TOKEN_KEY) || ''
            if (Boolean((getState() as StateSchema).user.isAuth)) {
                headers.set('Auth', `Bearer ${token}`)
            }
            return headers
        }

    }),
    endpoints: (builder) => ({}),
});

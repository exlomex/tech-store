import { rtkApi } from '@/api/RtkApi'
import {ProductInterface} from "@/types/productsTypes";
import {USER_ACCESS_TOKEN_KEY} from "@/const/localStorage";

export interface cartItem {
    id: number;
    quantity: number;
    good: ProductInterface;
    userId: number;
}

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCartItems: build.query<cartItem[], null>({
            query: () => ({
                url: `/cart`
            }),
            providesTags: ['Cart']
        }),

    }),
})

export const useFetchCartItems = extendedApi.useFetchCartItemsQuery
export const useLazyFetchCartItems = extendedApi.useLazyFetchCartItemsQuery

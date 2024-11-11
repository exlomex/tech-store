import { rtkApi } from '@/api/RtkApi'
import {ProductInterface} from "@/types/productsTypes";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGoodsByString: build.query<ProductInterface[], {string: string}>({
            query: ({string}) => ({
                url: `/goods/search?title=${string}`,
            }),
        }),

    }),
})

export const LazyFetchGoodsByString = extendedApi.useLazyFetchGoodsByStringQuery
export const FetchGoodsByString = extendedApi.useFetchGoodsByStringQuery

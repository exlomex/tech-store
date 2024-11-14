import { rtkApi } from '@/api/RtkApi'
import {DetailsUnion, ProductInterface, ProductTypeLowerCase, ReviewInterface} from "@/types/productsTypes";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        searchGoodByFilters: build.query<ProductInterface[], {type: ProductTypeLowerCase, filters: Partial<DetailsUnion>}>({
            query: ({type, filters}) => ({
                url: `/goods/search?type=${type}`,
                body: filters,
                method: 'POST'
            }),
            providesTags: ['Goods']
        }),

    }),
})

export const useSearchGoodByFilters = extendedApi.useSearchGoodByFiltersQuery
export const useLazySearchGoodByFilters = extendedApi.useLazySearchGoodByFiltersQuery
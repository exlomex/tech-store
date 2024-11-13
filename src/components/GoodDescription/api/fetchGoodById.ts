import { rtkApi } from '@/api/RtkApi'
import {ProductInterface} from "@/types/productsTypes";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGoodById: build.query<ProductInterface, {id: number}>({
            query: ({id}) => ({
                url: `/goods/${id}`,
            }),
        }),

    }),
})

export const useFetchGoodById = extendedApi.useFetchGoodByIdQuery

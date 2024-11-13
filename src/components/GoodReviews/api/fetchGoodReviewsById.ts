import { rtkApi } from '@/api/RtkApi'
import {ProductInterface, ReviewInterface} from "@/types/productsTypes";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGoodReviewsById: build.query<ReviewInterface[], {id: number}>({
            query: ({id}) => ({
                url: `/reviews/good/${id}`,
            }),
        }),

    }),
})

export const useFetchGoodReviewsById = extendedApi.useFetchGoodReviewsByIdQuery

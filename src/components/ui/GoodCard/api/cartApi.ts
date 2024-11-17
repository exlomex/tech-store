import {rtkApi} from "@/api/RtkApi";
export interface cartBody {
    goodId: number
}

const cartApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addGoodIntoCart: build.mutation<null, cartBody>({
            query: (body) => ({
                url: '/cart',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['Cart'],
        }),
        deleteGoodFromCart: build.mutation<null, {cartId: number}>({
            query: (body) => ({
                url: `/cart/decrease/${body.cartId}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Cart'],
        }),
    }),
});

export const useAddGoodIntoCart = cartApi.useAddGoodIntoCartMutation
export const useDeleteGoodFromCart = cartApi.useDeleteGoodFromCartMutation

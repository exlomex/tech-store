import {ProductsLabelsMap, ProductTypeLowerCase, unionDescriptionsValues} from "@/types/productsTypes";

export interface FiltersSliceSchema {
    phonesFilters: ProductFilters;
    tvsFilters: ProductFilters;
    laptopsFilters: ProductFilters;
    tabletsFilters: ProductFilters;
    computersFilters: ProductFilters;
    musicSpeakersFilters: ProductFilters;
    currentGoodCategory: ProductTypeLowerCase;
}

type ProductFilters = {
    [key in keyof typeof ProductsLabelsMap]?: unionDescriptionsValues;
};
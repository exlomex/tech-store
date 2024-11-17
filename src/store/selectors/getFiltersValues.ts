import {createSelector} from "@reduxjs/toolkit";
import {getFilters} from "@/store/selectors/getFilters";
import {FiltersSliceSchema} from "@/store/reducers/FiltersSliceSchema";

export const getFiltersCategory = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.currentGoodCategory,
);

export const getFiltersComputer = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.computersFilters,
);

export const getFiltersPhone = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.phonesFilters,
);

export const getFiltersTablet = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.tabletsFilters,
);

export const getFiltersLaptop = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.laptopsFilters,
);

export const getFiltersMusicSpeaker = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.musicSpeakersFilters,
);

export const getFiltersTv = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.tvsFilters,
);

export const getFiltersStateByType = createSelector(
    getFilters,
    (filter: FiltersSliceSchema) => {
        switch (filter.currentGoodCategory) {
            case 'phones':
                return filter.phonesFilters;
            case 'tvs':
                return filter.tvsFilters;
            case 'laptops':
                return filter.laptopsFilters;
            case 'computers':
                return filter.computersFilters;
            case 'tablets':
                return filter.tabletsFilters;
            case 'music_speakers':
                return filter.musicSpeakersFilters;
            default:
                return getFiltersPhone;
        }
    }
)

export const getCurrentFiltredData = createSelector(
    getFilters,
    (search: FiltersSliceSchema) => search.filtredData,
);
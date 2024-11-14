import {useAppDispatch} from "@/hooks/useAppDispatch";
import {ProductsLabelsMap, ProductTypeLowerCase, unionDescriptionsValues} from "@/types/productsTypes";
import {FiltersSliceActions} from "@/store/reducers/FiltersSlice";

export const setFiltersByProductType = (
    productType: ProductTypeLowerCase | 'none',
    filterName: keyof typeof ProductsLabelsMap,
    filterValue: unionDescriptionsValues,
    dispatch: ReturnType<typeof useAppDispatch>
) => {
    switch (productType) {
        case 'phones':
            dispatch(FiltersSliceActions.setPhonesFilters({ filterName, filterValue }));
            break;
        case 'tvs':
            dispatch(FiltersSliceActions.setTvsFilters({ filterName, filterValue }));
            break;
        case 'laptops':
            dispatch(FiltersSliceActions.setLaptopsFilters({ filterName, filterValue }));
            break;
        case 'computers':
            dispatch(FiltersSliceActions.setComputersFilters({ filterName, filterValue }));
            break;
        case 'tablets':
            dispatch(FiltersSliceActions.setTabletsFilters({ filterName, filterValue }));
            break;
        case 'music_speakers':
            dispatch(FiltersSliceActions.setMusicSpeakersFilters({ filterName, filterValue }));
            break;
        default:
            break
    }
};
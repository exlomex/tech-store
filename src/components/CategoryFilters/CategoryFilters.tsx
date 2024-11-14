import { classNames } from '@/lib/classNames';
import cls from './CategoryFilters.module.scss';
import {DetailsUnion, ProductTypeLowerCase, unionDescriptionsValues} from "@/types/productsTypes";
import {ProductTypeFiltersMap} from "@/components/CategoryFilters/consts/productTypeFiltersMap";
import {useSelector} from "react-redux";
import {
    getFiltersCategory, getFiltersStateByType,
} from "@/store/selectors/getFiltersValues";
import {CheckboxFilter} from "@/components/CheckboxFilter";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/Button";
import {useLazySearchGoodByFilters} from "@/components/CategoryFilters/api/searchGoodByFilters";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {FiltersSliceActions} from "@/store/reducers/FiltersSlice";

interface CategoryFiltersProps {
    className?: string;
    categoryType: ProductTypeLowerCase;
}

export const CategoryFilters = (props: CategoryFiltersProps) => {
    const { className } = props;

    const categoryType = useSelector(getFiltersCategory)
    const currentTypeFilters = ProductTypeFiltersMap[categoryType]

    const [isShowAllFilters, setIsShowAllFilters] = useState(false)
    const [SearchTrigger, {isFetching}] = useLazySearchGoodByFilters()

    const currentTypeState = useSelector(getFiltersStateByType)
    const onFilterSubmitHandler = () => {
        const filteredState = Object.keys(currentTypeState).reduce((acc, key) => {
            const typedKey = key as keyof typeof currentTypeState;
            const value = currentTypeState[typedKey];
            if (value !== '') acc[typedKey] = value;
            return acc;
        }, {});

        const FiltersBody = {...filteredState, type: categoryType} as Partial<DetailsUnion>

        SearchTrigger({filters: FiltersBody, type: categoryType })
    }

    return (
        <div className={classNames(cls.CategoryFilters, {}, [className])}>

            {currentTypeFilters?.map((filter, index) => (
                <div key={index} className={classNames('', {[cls.isFilterShows]: isShowAllFilters}, [])}>
                    <CheckboxFilter filter={filter}/>
                </div>
            ))}
            {(currentTypeFilters?.length || 0) < 4 ? null : <button onClick={() => setIsShowAllFilters(prev => !prev)} className={cls.CategoryFiltersIsShowAll}>
                {!isShowAllFilters ? 'Показать все фильтры' : 'Скрыть фильтры'}
            </button>}

            <Button onClick={onFilterSubmitHandler} className={cls.FiltersButton}>Применить</Button>
        </div>
    )
};

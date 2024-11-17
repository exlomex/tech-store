import { classNames } from '@/lib/classNames';
import cls from './CategoryPage.module.scss';
import { useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {Header} from "@/components/Header";
import {MainContainer} from "@/components/MainContainer";
import {CategoryFilters} from "@/components/CategoryFilters";
import {ProductTypeLowerCase} from "@/types/productsTypes";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {FiltersSliceActions} from "@/store/reducers/FiltersSlice";
import {NavigationLine} from "@/components/NavigationLine";
import {
    navigationLineOptions,
    navigationLineUnion,
    TranslatedCategories
} from "@/components/NavigationLine/types/navigationLineLevels";
import {CategoryGoodsSection} from "@/components/CategoryGoodsSection/CategoryGoodsSection";

interface CategoryPageProps {
    className?: string;
}

export const CategoryPage = (props: CategoryPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch()

    const [searchParams] = useSearchParams();
    const categoryType = searchParams.get('type') as ProductTypeLowerCase;

    const translatedCurrentCategory = TranslatedCategories[categoryType] as navigationLineUnion

    useEffect(() => {
        dispatch(FiltersSliceActions.setCurrentGoodCategory(categoryType))
        dispatch(FiltersSliceActions.clearAllFilters())

    }, [dispatch, categoryType]);

    return (
        <div className={classNames(cls.CategoryPage, {}, [className])}>
            <Header/>
            <MainContainer>
                <NavigationLine currentPath={translatedCurrentCategory} previousPaths={['Главная']}/>
                <div className={cls.CategoryPageInner}>
                    <CategoryFilters categoryType={categoryType}/>
                    <CategoryGoodsSection categoryType={categoryType}/>
                </div>
            </MainContainer>
        </div>
    )
};

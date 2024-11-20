import { classNames } from '@/lib/classNames';
import cls from './CategoryPage.module.scss';
import { useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Header} from "@/components/Header";
import {MainContainer} from "@/components/MainContainer";
import {CategoryFilters} from "@/components/CategoryFilters";
import {ProductTypeLowerCase} from "@/types/productsTypes";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {FiltersSliceActions} from "@/store/reducers/FiltersSlice";
import {NavigationLine} from "@/components/NavigationLine";
import {
    navigationLineUnion,
    TranslatedCategories
} from "@/components/NavigationLine/types/navigationLineLevels";
import {CategoryGoodsSection} from "@/components/CategoryGoodsSection/CategoryGoodsSection";
import {useMediaQuery} from "react-responsive";
import {MobileNavigation} from "@/components/MobileNavigation";
import {useSelector} from "react-redux";
import {getUserIsMobileFilterOpen} from "@/store/selectors/getUserValues";
import {UserSliceActions} from "@/store/reducers/UserSlice";

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

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const isMobileFiltersOpen = useSelector(getUserIsMobileFilterOpen)

    const onChangeMobileFiltersOpen = () => {
        dispatch(UserSliceActions.toggleMobileFilterOpen())
    }

    return (
        <div className={classNames(cls.CategoryPage, {}, [className])}>
            <Header/>
            {isTabletOrMobile && <MobileNavigation/>}
            <MainContainer>
                <NavigationLine currentPath={translatedCurrentCategory} previousPaths={['Главная']} isMobile={isTabletOrMobile}/>
                <div className={cls.CategoryPageInner}>
                    <CategoryFilters categoryType={categoryType} mobileOptions={{isMobile: isTabletOrMobile, isOpen: isMobileFiltersOpen, onChange: onChangeMobileFiltersOpen}}/>
                    <CategoryGoodsSection categoryType={categoryType}/>
                </div>
            </MainContainer>
        </div>
    )
};

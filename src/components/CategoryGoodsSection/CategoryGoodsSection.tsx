import {classNames} from '@/lib/classNames';
import cls from './CategoryGoodsSection.module.scss';
import {HStack} from "@/components/ui/Stack";
import {Skeleton} from "@/components/ui/Skeleton";
import {GoodCard} from "@/components/ui/GoodCard";
import {useSelector} from "react-redux";
import {getUserCartIds} from "@/store/selectors/getUserValues";
import {useSearchGoodByFilters} from "@/components/CategoryFilters/api/searchGoodByFilters";
import {ProductTypeLowerCase} from "@/types/productsTypes";
import {useEffect} from "react";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {FiltersSliceActions} from "@/store/reducers/FiltersSlice";
import {getCurrentFiltredData} from "@/store/selectors/getFiltersValues";

interface CategoryGoodsSectionProps {
    className?: string;
    categoryType: ProductTypeLowerCase;
}

export const CategoryGoodsSection = (props: CategoryGoodsSectionProps) => {
    const { className, categoryType } = props;

    const {data, isLoading} = useSearchGoodByFilters({filters: {type: categoryType}, type: categoryType})
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) dispatch(FiltersSliceActions.setCurrentFiltredData(data));
    }, [dispatch, data]);

    const cartIds = useSelector(getUserCartIds)
    const currentFiltredData = useSelector(getCurrentFiltredData)

    return (
            <section className={classNames(cls.CategoryGoodsSection, {}, [className])}>
                <div className={cls.CardsWrapper}>
                    {
                        isLoading ? (
                            <HStack gap={'32'} justify={'start'}>
                                <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                                <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                                <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                                <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                            </HStack>
                        ) : (currentFiltredData && currentFiltredData.map(card => (
                            <GoodCard key={card.id} id={card.id}
                                      cartIds={cartIds} title={card.title}
                                      price={card.price} image={card.image || ''}
                            />
                        )))
                    }
                </div>
            </section>
    )
};

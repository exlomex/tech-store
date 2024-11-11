import { classNames } from '@/lib/classNames';
import cls from './AllGoodsSection.module.scss';
import {MainContainer} from "@/components/MainContainer";
import {FetchGoodsByString} from "@/components/SearchGood";
import {GoodCard} from "@/components/ui/GoodCard";
import {HStack} from "@/components/ui/Stack";
import {Skeleton} from "@/components/ui/Skeleton";

interface AllGoodsSectionProps {
    className?: string;
}

export const AllGoodsSection = (props: AllGoodsSectionProps) => {
    const { className } = props;

    const {data, isError, isLoading} = FetchGoodsByString({string: ''})

    return (
        <section className={classNames(cls.AllGoodsSection, {}, [className])}>
            <MainContainer>
                <div className={cls.AllGoodsInner}>
                    <h2 className={cls.AllGoodsTitle}>Все товары</h2>
                    <div className={cls.CardsWrapper}>
                        {
                            isLoading ? (
                                <HStack gap={'32'} justify={'start'}>
                                    <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                                    <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                                    <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                                    <Skeleton height={'25vh'} width={'15vw'} border={'8px'}/>
                                </HStack>
                            ) : (data && data.map(card => (
                                <GoodCard key={card.id} id={card.id} inCard={false} title={card.title} price={card.price} image={card.image || ''}/>
                            )))
                        }
                        </div>
                    </div>
            </MainContainer>
        </section>
    )
};

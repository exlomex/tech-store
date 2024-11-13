import { classNames } from '@/lib/classNames';
import cls from './GoodReviews.module.scss';
import {MainContainer} from "@/components/MainContainer";
import {useFetchGoodById} from "@/components/GoodDescription/api/fetchGoodById";
import {Rating} from "react-simple-star-rating";
import {Review} from "@/components/Review";

interface GoodReviewsProps {
    className?: string;
    goodId: number;
}

export const GoodReviews = (props: GoodReviewsProps) => {
    const { className, goodId} = props;

    // const {data: reviews, isLoading, isError} = useFetchGoodReviewsById({id: goodId})
    const {data: good, isLoading, error} = useFetchGoodById({id: goodId})

    if (!good) return (
        <></>
    )

    return (
        <div className={classNames(cls.GoodReviews, {}, [className])}>
            <MainContainer>
                <div className={cls.GoodReviewsInner}>
                    <h3 className={cls.GoodReviewsTitle}>Отзывы</h3>
                    <p className={cls.GoodReviewCount}>Всего: {good.reviews.length} {good.reviews.length < 6 ? 'Отзыва' : 'Отзывов'}</p>

                    <div className={cls.GoodReviewRating}>
                        <p className={cls.GoodReviewRatingTitle}>Средняя оценка: {Math.round(good.rating)}</p>
                        <Rating
                            className={cls.GoodReviewRatingStar}
                            initialValue={good.rating}
                            readonly
                            size={30}
                        />
                    </div>

                    <div className={cls.GoodWrapper}>
                        {good.reviews.map(review => (
                            <Review review={review}/>
                        ))}
                    </div>
                </div>
            </MainContainer>
        </div>
    )
};

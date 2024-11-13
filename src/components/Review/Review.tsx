import { classNames } from '@/lib/classNames';
import cls from './Review.module.scss';
import {Rating} from "react-simple-star-rating";
import {ReviewInterface} from "@/types/productsTypes";

interface ReviewProps {
    className?: string;
    review: ReviewInterface;
}

export const Review = (props: ReviewProps) => {
    const { className, review } = props;
    return (
        <div className={classNames(cls.Review, {}, [className])}>
            <div className={cls.ReviewTopLine}>
                <div className={cls.ReviewTopLineTitle}>{review.userId.firstName} {review.userId.lastName}</div>

                <Rating
                    className={cls.GoodReviewRatingStar}
                    initialValue={review.rating}
                    readonly
                    size={24}
                />
            </div>

            <p className={cls.ReviewTitle}>{review.description}</p>
        </div>
    )
};

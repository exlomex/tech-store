import { classNames } from '@/lib/classNames';
import { Button } from '../Button';
import cls from './GoodCard.module.scss';
import {Link} from "react-router-dom";

enum CardTypes {
    VERTICAL_CARD = 'verticalCard',
    HORIZONTAL_CARD = 'horizontalCard',
}

const typesClasses: Record<CardTypes, string> = {
    verticalCard: cls.VerticalCard,
    horizontalCard: cls.HorizontalCard
};

interface GoodCardProps {
    className?: string;
    image?: string;
    title: string;
    price: number;
    inCard: boolean;
    id: number
    cardType?: CardTypes;
}

export const GoodCard = (props: GoodCardProps) => {
    const { className, cardType = CardTypes.VERTICAL_CARD, inCard, id, title, price, image } = props;

    if (cardType === CardTypes.VERTICAL_CARD) {
        // vertical card
        return (
            <div className={classNames(cls.Card, {[cls.GoodIntoCard]: inCard}, [className, typesClasses[cardType]])}>
                <Link to={`/goods/${id}`} className={cls.CardInfoWrapper}>
                    {image ? <img className={cls.CardImage} src={image} alt={`${title} image`}/> : <div className={classNames(cls.CardImage, {}, [cls.CardWithoutImage])}></div>}
                    <p className={cls.CardTitle}>{title}</p>
                    <p className={cls.CardPrice}>{price} ₽</p>
                </Link>
                <Button fullWidth={true}>В корзину</Button>
            </div>
        )

    } else {
        // horizontal card
        return (
            <div className={classNames(cls.Card, {[cls.GoodIntoCard]: inCard}, [className, typesClasses[cardType]])}>
                <p>{title}</p>
                <p>{price}</p>
                <img src={image} alt="non"/>
            </div>
        )
    }

};

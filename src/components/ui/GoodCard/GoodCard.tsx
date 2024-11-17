import { classNames } from '@/lib/classNames';
import { Button } from '../Button';
import cls from './GoodCard.module.scss';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserAuth, getUserCartIdByGoodId} from "@/store/selectors/getUserValues";
import {useGoodButtonHandler} from "@/hooks/useButtonClickHandler";

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
    id: number
    cardType?: CardTypes;
    cartIds: number[]
}

export const GoodCard = (props: GoodCardProps) => {
    const { className, cardType = CardTypes.VERTICAL_CARD, id, title, price, image, cartIds } = props;

    const isGoodInCartByIds = cartIds.includes(id)
    const isAuth = useSelector(getUserAuth)
    const cartIdByGoodId = useSelector(getUserCartIdByGoodId(id))

    const {onGoodButtonClickHandler} = useGoodButtonHandler()

    if (cardType === CardTypes.VERTICAL_CARD) {
        // vertical card
        return (
            <div className={classNames(cls.Card, {}, [className, typesClasses[cardType]])}>
                <Link to={`/goods/${id}`} className={cls.CardInfoWrapper}>
                    {image ? <img className={cls.CardImage} src={image} alt={`${title} image`}/> : <div className={classNames(cls.CardImage, {}, [cls.CardWithoutImage])}></div>}
                    <p className={cls.CardTitle}>{title}</p>
                    <p className={cls.CardPrice}>{price} ₽</p>
                </Link>
                <Button onClick={onGoodButtonClickHandler(isGoodInCartByIds, id, cartIdByGoodId)} fullWidth={true} disabled={!isAuth}>{isGoodInCartByIds ? 'Удалить из корзины' : 'В корзину'}</Button>
            </div>
        )

    } else {
        // horizontal card
        return (
            <div className={classNames(cls.Card, {}, [className, typesClasses[cardType]])}>
                <p>{title}</p>
                <p>{price}</p>
                <img src={image} alt="non"/>
            </div>
        )
    }

};

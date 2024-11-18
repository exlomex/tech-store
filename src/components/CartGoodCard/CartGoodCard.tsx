import { classNames } from '@/lib/classNames';
import cls from './CartGoodCard.module.scss';
import {ProductInterface} from "@/types/productsTypes";
import {ReactComponent as TrashSvg} from "@/assets/trashIcon.svg";
import {ReactComponent as MinusSvg} from "@/assets/counter/minusIcon.svg";
import {ReactComponent as PlusSvg} from "@/assets/counter/plusIcon.svg";
import {useDecreaseGoodQuantity, useIncreaseGoodQuantity} from "@/components/CartGoodCard/api/cartMutationsApi";
import {useDeleteGoodFromCart} from "@/components/ui/GoodCard/api/cartApi";
import {CheckBox} from "@/components/ui/CheckBox";
import {useSelector} from "react-redux";
import {getUserActiveCartCheckboxes} from "@/store/selectors/getUserValues";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";

interface CartGoodCardProps {
    className?: string;
    good: ProductInterface;
    quantity: number;
    cartId: number
}

export const CartGoodCard = (props: CartGoodCardProps) => {
    const { className, quantity, good, cartId } = props;

    const [increaseGoodQuantity, {}] = useIncreaseGoodQuantity()
    const [decreaseGoodQuantity, {}] = useDecreaseGoodQuantity()

    const onCounterMinusClickHandler = () => {
        decreaseGoodQuantity({id: cartId})
    }

    const onCounterPlusClickHandler = () => {
        increaseGoodQuantity({id: cartId})
    }

    const [deleteGood, {}] = useDeleteGoodFromCart();
    const onSingleTrashButtonClickHandler = () => {
        deleteGood({ids: [cartId]})
    };

    const activeCartCheckboxes = useSelector(getUserActiveCartCheckboxes)
    const onMultiplyTrashButtonClickHandler = () => {
        const deleteIds: number[] = []
        Object.keys(activeCartCheckboxes).forEach(key => {
            if (activeCartCheckboxes[+key]) deleteIds.push(+key)
        })
        console.log(deleteIds);
        // deleteGood({ids: [cartId]})
    };
    const dispatch = useAppDispatch()
    const onSingleCheckBoxClickHandler = () => {
        dispatch(UserSliceActions.toggleActiveCartCheckbox(cartId))
    }

    return (
        <div className={classNames(cls.CartGoodCard, {}, [className])}>
            <div className={cls.GoodCardImageContainer}>
                {good.image ? <img src={good.image} className={cls.GoodCardImage} alt=""/> : <div className={cls.GoodCardImage}></div>}
            </div>

            <div className={cls.GoodCardContentContainer}>
                <div className={cls.ContentUpperContainer}>
                    <div className={cls.ContentGoodDescription}>
                        <h2 className={cls.ContentTitle}>{good.title}</h2>
                        <p className={cls.ContentPrice}>{good.price} ₽</p>
                    </div>

                    <CheckBox isChecked={activeCartCheckboxes[cartId] || false} onChange={onSingleCheckBoxClickHandler}/>
                </div>

                <div className={cls.ContentBottomContainer}>
                    <TrashSvg className={cls.DeleteButton} onClick={onSingleTrashButtonClickHandler}/>
                    <div className={cls.Counter}>
                        <div className={classNames(cls.CounterSvg, {[cls.disabled]: quantity <= 1}, [])} onClick={onCounterMinusClickHandler}><MinusSvg className={cls.CounterMinus}/></div>
                        <span className={cls.CounterCount}>{quantity}</span>
                        <div className={cls.CounterSvg} onClick={onCounterPlusClickHandler}><PlusSvg className={cls.CounterPlus}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

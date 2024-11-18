import { classNames } from '@/lib/classNames';
import cls from './CartDescription.module.scss';
import {Button} from "@/components/ui/Button";
import {cartItem, useFetchCartItems} from "@/components/Header/api/fetchCartItems";
import {ReactComponent as EmptyCartIcon} from "@/assets/cartEmptyBasket.svg";
import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartGoodCard} from "@/components/CartGoodCard";
import {useDeleteGoodFromCart} from "@/components/ui/GoodCard/api/cartApi";
import {useSelector} from "react-redux";
import {
    getUserActiveCartCheckboxes,
    getUserActiveCartCheckboxesArray,
    getUserIsAllCartCheckboxesActive
} from "@/store/selectors/getUserValues";
import {ReactComponent as TrashSvg} from "@/assets/trashIcon.svg";
import {CheckBox} from "@/components/ui/CheckBox";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {useCreateNewOrder} from "@/components/CartDescription/api/createOrderApi";
interface CartDescriptionProps {
    className?: string;
}

export const CartDescription = (props: CartDescriptionProps) => {
    const { className } = props;

    const {data: currentCartItems, isLoading} = useFetchCartItems(null)

    const [deleteGood] = useDeleteGoodFromCart();

    const activeCartCheckboxesArray = useSelector(getUserActiveCartCheckboxesArray)
    const activeCartCheckboxes = useSelector(getUserActiveCartCheckboxes)
    const onMultiplyTrashButtonClickHandler = () => {
        deleteGood({ids: activeCartCheckboxesArray})
    };
    const dispatch = useAppDispatch()
    const onMultiplyCheckboxClickHandler = () => {
        dispatch(UserSliceActions.toggleAllActiveCartCheckboxes())
    }

    const isAllCartCheckboxesActive = useSelector(getUserIsAllCartCheckboxesActive)

    const [createNewOrder, {data: orderData}] = useCreateNewOrder()

    const navigate = useNavigate()

    useEffect(() => {
        orderData && dispatch(UserSliceActions.setLastOrderDetails(orderData))
    }, [orderData]);
    const onPurchaseButtonClickHandler = async () => {
        try {
            await createNewOrder({ids: activeCartCheckboxesArray})
            navigate('/order')
        } catch (e) {
            console.error('Ошибка при создании заказа:', e);
            throw new Error()
        }
    }

    if (isLoading) {
        return <></>
    }

    const totalPrice = (currentCartItems: cartItem[], activeCartCheckboxes: Record<number, boolean>) => {
        let totalPrice = 0;
        currentCartItems.forEach(cartItem => {
            if (activeCartCheckboxes[cartItem.id]) totalPrice += cartItem.good.price
        });
        return totalPrice;
    }

    if (currentCartItems && currentCartItems.length === 0) {
        return (
            <section className={classNames(cls.EmptyCartDescription, {}, [className])}>
                <h2 className={cls.EmptyCartTitle}>Ваша корзина пуста</h2>
                <EmptyCartIcon className={cls.EmptyCartIcon}/>
                <p className={cls.EmptyCartExtraText}>Добавьте товары из каталога</p>
                <Link to={'/'}><Button>Вернуться на главную</Button></Link>
            </section>
        )
    }

    return (
        <section className={classNames(cls.CartDescription, {}, [className])}>
            <div className={cls.CartDescriptionUpperLine}>
                <div onClick={onMultiplyTrashButtonClickHandler} className={cls.RemoveButton}><TrashSvg/><span>Удалить</span></div>
                <div onClick={onMultiplyCheckboxClickHandler} className={cls.SelectAllCheckbox}><span>Выбрать все</span><CheckBox isChecked={isAllCartCheckboxesActive} onChange={() => {}}/></div>
            </div>

            <div className={cls.CartItems}>
                {currentCartItems &&  currentCartItems.map(cartItem => (
                    <CartGoodCard key={cartItem.id} good={cartItem.good} quantity={cartItem.quantity} cartId={cartItem.id}/>)
                )}
            </div>

            <div className={cls.TotalPrice}>Итого {totalPrice(currentCartItems || [], activeCartCheckboxes)} ₽</div>
            <Button onClick={onPurchaseButtonClickHandler}>Оформить заказ</Button>
        </section>
    )
};

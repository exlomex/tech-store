import { classNames } from '@/lib/classNames';
import cls from './OrderPage.module.scss';
import {MainContainer} from "@/components/MainContainer";
import {NavigationLine} from "@/components/NavigationLine";
import {Header} from "@/components/Header";
import {LastOrderDescription} from "@/components/LastOrderDescription";

interface OrderPageProps {
    className?: string;
}

export const OrderPage = (props: OrderPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.OrderPage, {}, [className])}>
            <Header/>
            <MainContainer>
                <NavigationLine previousPaths={['Главная', 'Корзина']} currentPath={"Оформление заказа"}/>
                <LastOrderDescription/>
            </MainContainer>
        </div>
    )
};

import { classNames } from '@/lib/classNames';
import cls from './OrderPage.module.scss';
import {MainContainer} from "@/components/MainContainer";
import {NavigationLine} from "@/components/NavigationLine";
import {Header} from "@/components/Header";
import {LastOrderDescription} from "@/components/LastOrderDescription";
import {MobileNavigation} from "@/components/MobileNavigation";
import {useMediaQuery} from "react-responsive";

interface OrderPageProps {
    className?: string;
}

export const OrderPage = (props: OrderPageProps) => {
    const { className } = props;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={classNames(cls.OrderPage, {}, [className])}>
            <Header/>
            {isTabletOrMobile && <MobileNavigation/>}
            <MainContainer>
                <NavigationLine previousPaths={['Главная', 'Корзина']} currentPath={"Оформление заказа"}/>
                <LastOrderDescription/>
            </MainContainer>
        </div>
    )
};

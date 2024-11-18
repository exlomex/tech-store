import { classNames } from '@/lib/classNames';
import cls from './CartPage.module.scss';
import {Header} from "@/components/Header";
import {MainContainer} from "@/components/MainContainer";
import {NavigationLine} from "@/components/NavigationLine";
import {CartDescription} from "@/components/CartDescription";

interface CartPageProps {
    className?: string;
}

export const CartPage = (props: CartPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <Header/>
            <MainContainer>
                <NavigationLine previousPaths={['Главная']} currentPath={'Корзина'}/>
                <CartDescription/>
            </MainContainer>
        </div>
    )
};

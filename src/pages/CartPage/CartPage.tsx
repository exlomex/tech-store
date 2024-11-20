import { classNames } from '@/lib/classNames';
import cls from './CartPage.module.scss';
import {Header} from "@/components/Header";
import {MainContainer} from "@/components/MainContainer";
import {NavigationLine} from "@/components/NavigationLine";
import {CartDescription} from "@/components/CartDescription";
import {useMediaQuery} from "react-responsive";
import {MobileNavigation} from "@/components/MobileNavigation";

interface CartPageProps {
    className?: string;
}

export const CartPage = (props: CartPageProps) => {
    const { className } = props;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <Header/>
            {isTabletOrMobile && <MobileNavigation/>}
            <MainContainer>
                <NavigationLine previousPaths={['Главная']} currentPath={'Корзина'}/>
                <CartDescription/>
            </MainContainer>
        </div>
    )
};

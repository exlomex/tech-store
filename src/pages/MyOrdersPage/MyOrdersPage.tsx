import { classNames } from '@/lib/classNames';
import cls from './MyOrdersPage.module.scss';
import {Header} from "@/components/Header";
import {MainContainer} from "@/components/MainContainer";
import {NavigationLine} from "@/components/NavigationLine";
import {MyOrdersDescription} from "@/components/MyOrdersDescription";
import {MobileNavigation} from "@/components/MobileNavigation";
import {useMediaQuery} from "react-responsive";

interface MyOrdersPageProps {
    className?: string;
}

export const MyOrdersPage = (props: MyOrdersPageProps) => {
    const { className } = props;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={classNames(cls.MyOrdersPage, {}, [className])}>
            <Header/>
            {isTabletOrMobile && <MobileNavigation/>}
            <MainContainer>
                <NavigationLine previousPaths={['Главная']} currentPath={"Мои заказы"}/>
                <MyOrdersDescription/>
            </MainContainer>
        </div>
    )
};

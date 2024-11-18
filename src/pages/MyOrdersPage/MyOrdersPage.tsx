import { classNames } from '@/lib/classNames';
import cls from './MyOrdersPage.module.scss';
import {Header} from "@/components/Header";
import {MainContainer} from "@/components/MainContainer";
import {NavigationLine} from "@/components/NavigationLine";
import {MyOrdersDescription} from "@/components/MyOrdersDescription";

interface MyOrdersPageProps {
    className?: string;
}

export const MyOrdersPage = (props: MyOrdersPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MyOrdersPage, {}, [className])}>
            <Header/>
            <MainContainer>
                <NavigationLine previousPaths={['Главная']} currentPath={"Мои заказы"}/>
                <MyOrdersDescription/>
            </MainContainer>
        </div>
    )
};

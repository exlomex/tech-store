import { classNames } from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";
import {CatalogSection} from "@/components/CatalogSection";
import {AllGoodsSection} from "@/components/AllGoodsSection";

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header/>
            <CatalogSection/>
            <AllGoodsSection/>
        </div>
    )
};

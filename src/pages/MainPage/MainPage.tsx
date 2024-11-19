import {classNames} from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";
import {CatalogSection} from "@/components/CatalogSection";
import {AllGoodsSection} from "@/components/AllGoodsSection";
import {useMediaQuery} from "react-responsive";
import {MobileNavigation} from "@/components/MobileNavigation";

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;

    // MEDIA
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {isTabletOrMobile && <MobileNavigation/>}
            <Header/>
            <CatalogSection/>
            <AllGoodsSection/>
        </div>
    )
};

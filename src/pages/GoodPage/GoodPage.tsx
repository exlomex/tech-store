import { classNames } from '@/lib/classNames';
import cls from './GoodPage.module.scss';
import {Header} from "@/components/Header";
import {GoodDescription} from "@/components/GoodDescription";
import {useParams} from "react-router-dom";
import {GoodReviews} from "@/components/GoodReviews";
import {NavigationLine} from "@/components/NavigationLine";
import {MainContainer} from "@/components/MainContainer";

interface GoodPageProps {
    className?: string;
}

export const GoodPage = (props: GoodPageProps) => {
    const { className } = props;

    const {id: goodId} = useParams<{id: string}>()

    return (
        <div className={classNames(cls.GoodPage, {}, [className])}>
            <Header/>
            <MainContainer><NavigationLine currentPath={'Карточка товара'} previousPaths={['Главная']}/></MainContainer>
            <GoodDescription goodId={goodId ? +goodId : 0}/>
            <GoodReviews goodId={goodId ? +goodId : 0}/>
        </div>
    )
};

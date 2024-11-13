import { classNames } from '@/lib/classNames';
import cls from './GoodPage.module.scss';
import {Header} from "@/components/Header";
import {GoodDescription} from "@/components/GoodDescription";
import {useParams} from "react-router-dom";

interface GoodPageProps {
    className?: string;
}

export const GoodPage = (props: GoodPageProps) => {
    const { className } = props;

    const {id: goodId} = useParams<{id: string}>()

    return (
        <div className={classNames(cls.GoodPage, {}, [className])}>
            <Header/>
            <GoodDescription goodId={goodId ? +goodId : 0}/>
        </div>
    )
};

import { classNames } from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header/>
            <section style={{height: '50vh'}}></section>
        </div>
    )
};

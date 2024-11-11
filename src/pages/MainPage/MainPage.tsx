import { classNames } from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";
import {CatalogSection} from "@/components/CatalogSection";
import {AllGoodsSection} from "@/components/AllGoodsSection";
import {Modal} from "@/components/ui/Modal";
import {ReactNode, useState} from "react";

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const onCloseHandler = () => {
        setIsOpen(false)
    }

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header/>
            <CatalogSection/>
            <AllGoodsSection/>
            <Modal isOpen={isOpen} onClose={onCloseHandler}/>
            <button onClick={() => {setIsOpen(true)}}>Открыть модал</button>
        </div>
    )
};

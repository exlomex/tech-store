import {classNames} from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";
import {CatalogSection} from "@/components/CatalogSection";
import {AllGoodsSection} from "@/components/AllGoodsSection";
import {Modal} from "@/components/ui/Modal";
import {useState} from "react";
import {useSelector} from "react-redux";
import {getUserIsModalOpen, getUserModalType} from "@/store/selectors/getUserValues";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {UserModalType} from "@/store/reducers/UserSliceSchema";
import {LoginForm} from "@/components/LoginForm";
import {RegisterForm} from "@/components/RegisterForm";

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

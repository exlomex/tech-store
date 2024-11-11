import { classNames } from '@/lib/classNames';
import cls from './Header.module.scss';
import {MainContainer} from "@/components/MainContainer";
import LogoIcon from '@/assets/shopLogoIcon.svg'
import {ReactComponent as CatalogSvg} from '@/assets/catalogIcon.svg'
import {ReactComponent as CardSvg} from '@/assets/cardIcon.svg'
import {ReactComponent as ProfileSvg} from '@/assets/profileIcon.svg'
import {SearchGood} from "@/components/SearchGood";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <MainContainer>
                <div className={cls.Header_inner}>
                    <img src={LogoIcon} className={cls.Logo} alt="goods"/>

                    <SearchGood/>

                    <nav className={cls.Header_nav}>
                        <a className={cls.nav_item}>
                            <CatalogSvg/>
                            <p className={cls.nav_title}>Каталог</p>
                        </a>
                        <a className={cls.nav_item}>
                            <CardSvg/>
                            <p className={cls.nav_title}>Корзина</p>
                        </a>
                        <a className={cls.nav_item}>
                            <ProfileSvg/>
                            <p className={cls.nav_title}>Профиль</p>
                        </a>
                    </nav>
                </div>

            </MainContainer>
        </div>
    )
};

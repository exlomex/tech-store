import { classNames } from '@/lib/classNames';
import cls from './Header.module.scss';
import {MainContainer} from "@/components/MainContainer";
import LogoIcon from '@/assets/shopLogoIcon.svg'
import {ReactComponent as CatalogSvg} from '@/assets/catalogIcon.svg'
import {ReactComponent as CardSvg} from '@/assets/cardIcon.svg'
import {ReactComponent as ProfileSvg} from '@/assets/profileIcon.svg'
import {SearchGood} from "@/components/SearchGood";
import {DropDown, DropdownItem} from "@/components/ui/DropDown";
import {useMemo, useState} from "react";
import {ReactComponent as LoginSvg} from "@/assets/loginIcon.svg";
import {ReactComponent as RegisterIcon} from "@/assets/registerIcon.svg";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;


    const NonAuthorizationItems = useMemo((): DropdownItem[] => [
        {content: (
                <div className={cls.ItemsDropDown}>
                    <div className={cls.ItemSvgWrapper}><LoginSvg width={"18px"}/></div>
                    <p>Авторизация</p>
                </div>), to: '/auth'},
        {content: (
                <div className={cls.ItemsDropDown}>
                    <div className={cls.ItemSvgWrapper}><RegisterIcon width={'20px'}/></div>
                    <p>Регистрация</p>
                </div>), to: '/registration'},
    ], [cls.ItemsDropDown, cls.ItemSvgWrapper]);

    const AuthorizationUserItems: DropdownItem[] = [
        {content: 'Выйти', to: '/logout'},
    ]

    const AuthorizationAdminItems: DropdownItem[] = [
        {content: 'Панель управления', to: '/admin'},
        {content: 'Выйти', to: '/logout'},
    ]

    const ProfileTrigger = () => (
        <a className={cls.nav_item}
            onMouseEnter={() => setIsProfileDropDownActive(true)}
        >
            <ProfileSvg/>
            <p className={cls.nav_title}>Профиль</p>
        </a>
    )

    const [isProfileDropDownActive, setIsProfileDropDownActive] = useState(false)

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
                        <DropDown items={NonAuthorizationItems} trigger={<ProfileTrigger/>}
                                  isActive={isProfileDropDownActive}
                                  onClose={setIsProfileDropDownActive}
                        />

                    </nav>
                </div>

            </MainContainer>
        </div>
    )
};

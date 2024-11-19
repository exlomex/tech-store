import { classNames } from '@/lib/classNames';
import cls from './Navigation.module.scss';
import {DropDown} from "@/components/ui/DropDown";
import {
    AuthorizationAdminItems,
    AuthorizationUserItems,
    CatalogItems,
    currentItemByRole,
    NonAuthorizationItems
} from "@/components/Header/consts/navigationConsts";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserCartIds, getUserRole} from "@/store/selectors/getUserValues";
import {useState} from "react";
import {ReactComponent as CatalogSvg} from '@/assets/catalogIcon.svg'
import {ReactComponent as CardSvg} from '@/assets/cardIcon.svg'
import {ReactComponent as ProfileSvg} from '@/assets/profileIcon.svg'
import {ReactComponent as HomeSvg} from '@/assets/homeIcon.svg'

interface NavigationProps {
    className?: string;
    navType?: 'default' | 'mobile'
}

export const Navigation = (props: NavigationProps) => {
    const { className, navType = 'default' } = props;

    const role = useSelector(getUserRole)

    const ProfileTrigger = () => (
        <a className={cls.nav_item}
           onMouseEnter={() => setIsProfileDropDownActive(true)}
        >
            <ProfileSvg/>
            <p className={cls.nav_title}>Профиль</p>
        </a>
    )

    const CatalogTrigger = () => (
        <a className={cls.nav_item}
           onMouseEnter={() => setIsCatalogDropDownActive(true)}
        >
            <CatalogSvg/>
            <p className={cls.nav_title}>Каталог</p>
        </a>
    )

    const [isCatalogDropDownActive, setIsCatalogDropDownActive] = useState(false)
    const [isProfileDropDownActive, setIsProfileDropDownActive] = useState(false)

    const CartItemsFromState = useSelector(getUserCartIds)

    return (
        <nav className={classNames(cls.Navigation, {}, [className])}>
            {navType === 'mobile' && <Link to={'/'} className={cls.nav_item}>
                <div className={cls.CartWrapper}>
                    <HomeSvg/>
                </div>
                <p className={cls.nav_title}>Главная</p>
            </Link>}
            <DropDown
                text={'Категории: '}
                items={CatalogItems}
                trigger={<CatalogTrigger/>}
                isActive={isCatalogDropDownActive}
                onClose={setIsCatalogDropDownActive}
                isMobile={navType === 'mobile'}
            />
            <Link to={'/cart'} className={cls.nav_item}>
                <div className={cls.CartWrapper}>
                    {CartItemsFromState.length > 0 && <span>{CartItemsFromState.length}</span>}
                    <CardSvg/>
                </div>
                <p className={cls.nav_title}>Корзина</p>
            </Link>
            <DropDown
                items={currentItemByRole([NonAuthorizationItems(), AuthorizationUserItems(), AuthorizationAdminItems()], role)}
                trigger={<ProfileTrigger/>}
                isActive={isProfileDropDownActive}
                onClose={setIsProfileDropDownActive}
                isMobile={navType === 'mobile'}
                topLeftAnchor={true}
            />
        </nav>
)
};

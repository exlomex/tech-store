import {classNames} from '@/lib/classNames';
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
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {UserModalType, UserRoles} from "@/store/reducers/UserSliceSchema";
import {useSelector} from "react-redux";
import {getUserRole} from "@/store/selectors/getUserValues";
import {GoodCategories} from "@/types/productsTypes";
import {ReactComponent as LaptopIcon} from '@/assets/categories/icons/LaptopIcon.svg'
import {ReactComponent as TvIcon} from '@/assets/categories/icons/TvIcon.svg'
import {ReactComponent as PhoneIcon} from '@/assets/categories/icons/PhoneIcon.svg'
import {ReactComponent as ComputerIcon} from '@/assets/categories/icons/ComputerIcon.svg'
import {ReactComponent as TabletIcon} from '@/assets/categories/icons/TabletIcon.svg'
import {ReactComponent as MusicSpeaker} from '@/assets/categories/icons/MusicSpeaker.svg'

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch()

    const NonAuthorizationItems = useMemo((): DropdownItem[] => [
        {content: (
                <div className={cls.ItemsDropDown}>
                    <div className={cls.ItemSvgWrapper}><LoginSvg width={"18px"}/></div>
                    <p>Авторизация</p>
                </div>), onClick: () => {
                dispatch(UserSliceActions.setModalIsOpen(true))
                dispatch(UserSliceActions.setModalType(UserModalType.AUTH_MODAL))
            }},
        {content: (
                <div className={cls.ItemsDropDown}>
                    <div className={cls.ItemSvgWrapper}><RegisterIcon width={'20px'}/></div>
                    <p>Регистрация</p>
                </div>), onClick: () => {
                dispatch(UserSliceActions.setModalIsOpen(true))
                dispatch(UserSliceActions.setModalType(UserModalType.REGISTER_MODAL))
            }
        }
    ], [cls.ItemsDropDown, cls.ItemSvgWrapper]);

    const AuthorizationUserItems: DropdownItem[] = [
        {content: 'Выйти', onClick: () => {
                dispatch(UserSliceActions.logout())
            }}
    ]

    const AuthorizationAdminItems: DropdownItem[] = [
        {content: 'Панель управления', to: '/admin'},
        {content: 'Выйти', onClick: () => {
                dispatch(UserSliceActions.logout())
            }},
    ]

    const role = useSelector(getUserRole)
    const currentItemByRole = (items: DropdownItem[][], currentRole: UserRoles) => {
        switch (currentRole) {
            case UserRoles.GUEST: return items[0]
            case UserRoles.USER: return items[1]
            case UserRoles.ADMIN: return items[2]
        }
    }

    const CatalogItems: DropdownItem[] = [
        {
            content: <div className={cls.ItemsDropDown}>
                <div className={cls.ItemSvgWrapper}><PhoneIcon width={'11px'}/></div>
                <p>Смартфоны</p>
            </div>, to: `/goods?type=${GoodCategories.PHONES}`
        },
        {
            content: <div className={cls.ItemsDropDown}>
                <div className={cls.ItemSvgWrapper}><LaptopIcon width={'25px'}/></div>
                <p>Ноутбуки</p>
            </div>, to: `/goods?type=${GoodCategories.LAPTOPS}`
        },
        {
            content: <div className={cls.ItemsDropDown}>
                <div className={cls.ItemSvgWrapper}><ComputerIcon width={'14px'}/></div>
                <p>Компьютеры</p>
            </div>, to: `/goods?type=${GoodCategories.COMPUTERS}`
        },
        {
            content: <div className={cls.ItemsDropDown}>
                <div className={cls.ItemSvgWrapper}><TvIcon width={'20px'}/></div>
                <p>Телевизоры</p>
            </div>, to: `/goods?type=${GoodCategories.TVS}`
        },
        {
            content: <div className={cls.ItemsDropDown}>
                <div className={cls.ItemSvgWrapper}><TabletIcon width={'20px'}/></div>
                <p>Планшеты</p>
            </div>, to: `/goods?type=${GoodCategories.TABLETS}`
        },
        {
            content: <div className={cls.ItemsDropDown}>
                <div className={cls.ItemSvgWrapper}><MusicSpeaker width={'14px'}/></div>
                <p>Колонки</p>
            </div>, to: `/goods?type=${GoodCategories.MUSIC_SPEAKERS}`
        },
    ]

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

    return (
        <div className={classNames(cls.Header, {}, [className])}>
        <MainContainer>
                <div className={cls.Header_inner}>
                    <img src={LogoIcon} className={cls.Logo} alt="goods"/>

                    <SearchGood/>

                    <nav className={cls.Header_nav}>
                        <DropDown
                            text={'Категории: '}
                            items={CatalogItems}
                            trigger={<CatalogTrigger/>}
                            isActive={isCatalogDropDownActive}
                            onClose={setIsCatalogDropDownActive}
                        />
                        <a className={cls.nav_item}>
                            <CardSvg/>
                            <p className={cls.nav_title}>Корзина</p>
                        </a>
                        <DropDown
                            items={currentItemByRole([NonAuthorizationItems, AuthorizationUserItems, AuthorizationAdminItems], role)}
                            trigger={<ProfileTrigger/>}
                            isActive={isProfileDropDownActive}
                            onClose={setIsProfileDropDownActive}
                        />
                    </nav>
                </div>

            </MainContainer>
        </div>
    )
};
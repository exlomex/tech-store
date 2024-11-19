import {DropdownItem} from "@/components/ui/DropDown";
import {GoodCategories} from "@/types/productsTypes";
import {ReactComponent as LaptopIcon} from '@/assets/categories/icons/LaptopIcon.svg'
import {ReactComponent as TvIcon} from '@/assets/categories/icons/TvIcon.svg'
import {ReactComponent as PhoneIcon} from '@/assets/categories/icons/PhoneIcon.svg'
import {ReactComponent as ComputerIcon} from '@/assets/categories/icons/ComputerIcon.svg'
import {ReactComponent as TabletIcon} from '@/assets/categories/icons/TabletIcon.svg'
import {ReactComponent as MusicSpeaker} from '@/assets/categories/icons/MusicSpeaker.svg'
import {useMemo} from "react";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {UserModalType, UserRoles} from "@/store/reducers/UserSliceSchema";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {ReactComponent as LoginSvg} from "@/assets/loginIcon.svg";
import {ReactComponent as RegisterIcon} from "@/assets/registerIcon.svg";
import cls from './navigationConsts.module.scss'

export const CatalogItems: DropdownItem[] = [
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

export const NonAuthorizationItems: () => DropdownItem[] = () => {
    const dispatch = useAppDispatch()

    return useMemo((): DropdownItem[] => [
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
    ], [dispatch]);
}

export const AuthorizationUserItems: () => DropdownItem[] = () => {
    const dispatch = useAppDispatch()

    return [
        {content: 'Мои заказы', to: '/orders'},
        {content: 'Выйти', onClick: () => {
                dispatch(UserSliceActions.logout())
            }}
    ]
}

export const AuthorizationAdminItems: () => DropdownItem[] = () => {
    const dispatch = useAppDispatch()

    return [
        {content: 'Панель управления', to: '/admin'},
        {content: 'Мои заказы', to: '/orders'},
        {content: 'Выйти', onClick: () => {
                dispatch(UserSliceActions.logout())
                dispatch(UserSliceActions.clearCartItems())
            }},
    ]
}

export const currentItemByRole = (items: DropdownItem[][], currentRole: UserRoles) => {
    switch (currentRole) {
        case UserRoles.GUEST: return items[0]
        case UserRoles.USER: return items[1]
        case UserRoles.ADMIN: return items[2]
    }
}
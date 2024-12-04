import {classNames} from '@/lib/classNames';
import cls from './Header.module.scss';
import {MainContainer} from "@/components/MainContainer";
import LogoIcon from '@/assets/shopLogoIcon.svg'
import {SearchGood} from "@/components/SearchGood";
import {useEffect} from "react";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserValues";
import {Link} from "react-router-dom";
import {useLazyFetchCartItems} from "@/components/Header/api/fetchCartItems";
import {useMediaQuery} from "react-responsive";
import {Navigation} from "@/components/Navigation";


interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch()

    const [fetchCartItems, {data: cartItems}] = useLazyFetchCartItems()

    const isAuth = useSelector(getUserAuth)

    useEffect(() => {
        if (isAuth) {
            fetchCartItems(null)
        }
    }, [isAuth, fetchCartItems]);

    useEffect(() => {
        if (cartItems) {
            dispatch(UserSliceActions.setCartItems(cartItems))
        }
    }, [cartItems, dispatch]);

    // MEDIA
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })



    return (
        <header className={classNames(cls.Header, {}, [className])}>
        <MainContainer>
                <div className={cls.Header_inner}>
                    <Link to={'/'}><img src={LogoIcon} className={cls.Logo} alt="goods"/></Link>

                    <SearchGood/>

                    {isDesktopOrLaptop && <Navigation/>}
                </div>
            </MainContainer>
        </header>
    )
};
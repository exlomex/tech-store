import {MainPage} from "@/pages/MainPage";
import {Suspense, useEffect, useState} from "react";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {AppRouter} from "@/components/AppRouter/AppRouter";
import {UserModalType} from "@/store/reducers/UserSliceSchema";
import {LoginForm} from "@/components/LoginForm";
import {RegisterForm} from "@/components/RegisterForm";
import {Modal} from "@/components/ui/Modal";
import {useSelector} from "react-redux";
import {getUserIsModalOpen, getUserModalType} from "@/store/selectors/getUserValues";

export default function App() {
    const dispatch = useAppDispatch()

    const [inited, setInited] = useState(false)

    useEffect(() => {
        if (!inited) {
            dispatch(UserSliceActions.initAuth())
            setInited(true)
        }
    }, [inited, dispatch]);

    const onCloseHandler = () => {
        dispatch(UserSliceActions.setModalIsOpen(false))
    }

    const isModalOpen = useSelector(getUserIsModalOpen)
    const modalType = useSelector(getUserModalType) || 'auth_modal'

    if (!inited) return (
        <></>
    )

    return (
        <div className='wrapper'>
            <Suspense fallback={'loading...'}>
                <AppRouter/>
            </Suspense>
            <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
                {
                    modalType === UserModalType.AUTH_MODAL ? <LoginForm/> : <RegisterForm/>
                }
            </Modal>
        </div>
    );
}

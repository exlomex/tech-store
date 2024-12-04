import {classNames} from '@/lib/classNames';
import cls from './LoginForm.module.scss';
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {Button} from "@/components/ui/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/components/ui/Input";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {UserModalType} from "@/store/reducers/UserSliceSchema";
import {InputTypes} from "@/components/ui/Input/Input";
import {loginByUsername, loginByUsernameProps} from "@/store/services/loginByUsername";
import {useSelector} from "react-redux";
import {getUserLoginError} from "@/store/selectors/getUserValues";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<loginDataInputs>()

    interface loginDataInputs {
        loginUsername: string;
        loginPassword: string
    }

    const onSubmit: SubmitHandler<loginDataInputs> = (data) => {
        const newData: loginByUsernameProps = {
            username: data.loginUsername,
            password: data.loginPassword
        }

        dispatch(loginByUsername(newData))
    }

    const loginFormUsernameReg = register("loginUsername", { required: true, onBlur: () => trigger('loginUsername')});
    const loginFormPasswordReg = register("loginPassword", { required: true, minLength: 5, onBlur: () => trigger('loginPassword')})

    const loginError = useSelector(getUserLoginError)

    return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
        <h2 className={cls.LoginFormTitle}>Авторизация</h2>
        <form className={classNames(cls.LoginFormForma, {}, [])} onSubmit={handleSubmit(onSubmit)}>
            <div className={cls.InputWrapper}>
                <label className={cls.InputTitle} htmlFor='loginUsername'>Имя пользователя <span>*</span></label>
                <Input
                    id={'loginUsername'}
                    error={errors.loginUsername}
                        className={classNames('', {}, [])}
                        placeholder={'Введите имя пользователя'}
                        register={{...loginFormUsernameReg}}
                    />
                    {errors.loginUsername && <span className={cls.InputErrorText}>Обязательное поле</span>}
                </div>
                <div className={cls.InputWrapper}>
                    <label className={cls.InputTitle} htmlFor='loginPassword'>Пароль<span>*</span></label>
                    <Input
                        error={errors.loginPassword}
                        register={{...loginFormPasswordReg}}
                        id={'loginPassword'}
                        className={classNames('', {}, [])}
                        placeholder={'Введите пароль'}
                        buttonType={InputTypes.PASSWORD_INPUT}
                    />
                    {errors.loginPassword &&
                        <span className={cls.InputErrorText}>Пароль должен быть не короче 5 символов</span>}
                </div>

                <Button type={"submit"} className={cls.InputButton} fullWidth>Войти</Button>
                {loginError && <h3 className={cls.LoginFormError}>Ошибка авторизации! Введите корректные данные!</h3>}
                <div className={cls.FormBottomBlock}>
                    <p>Нет аккаунта?</p>
                    <p onClick={() => dispatch(UserSliceActions.setModalType(UserModalType.REGISTER_MODAL))}>Регистрация</p>
                </div>

            </form>
        </div>
    )
};

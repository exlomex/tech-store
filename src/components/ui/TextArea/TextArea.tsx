import React, {ForwardedRef, forwardRef, InputHTMLAttributes, useState} from 'react';
import cls from './TextArea.module.scss';
import {classNames} from "@/lib/classNames";
import {
    FieldError,
    UseFormRegisterReturn
} from "react-hook-form";
import {ReactComponent as ErrorIcon} from "@/assets/inputIcons/errorInputIcon.svg";

type HtmlTextAreaProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'maxLength'
>;

interface InputProps extends HtmlTextAreaProps {
    className?: string;
    maxLength?: number;
    register?: UseFormRegisterReturn<string>;
    error?: FieldError | undefined;
}

export const TextArea = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const {
            className,
            placeholder,
            maxLength = 40,
            id,
            register,
            error,
            disabled
        } = props;

        return (
            <div className={classNames(cls.TextAreaWrapper, {[cls.TextAreaError]: error !== undefined}, [])}>
                <textarea
                    disabled={disabled}
                    maxLength={maxLength}
                    className={classNames(cls.TextArea, {}, [className])}
                    placeholder={placeholder}
                    id={id}
                    autoComplete={'false'}
                    {...register}
                />
                {error && <span className={cls.ErrorIcon}><ErrorIcon/></span>}
            </div>
        );
})
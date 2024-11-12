import { classNames } from '@/lib/classNames';
import cls from './DropDown.module.scss';
import React, {Dispatch, memo, ReactNode, SetStateAction} from "react";
import {Link} from "react-router-dom";

export interface DropdownItem {
    disabled?: boolean;
    content: ReactNode;
    to?: string;
    onClick?: () => void
}

interface DropDownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    isActive: boolean;
    onClose: Dispatch<SetStateAction<boolean>>
    text?: string;
}

export const DropDown = memo((props: DropDownProps) => {
    const {
        className,
        trigger,
        items,
        isActive,
        onClose,
        text
    } = props;

    return (
            <div className={classNames(cls.DropDown, {}, [className])}
                onMouseLeave={() => onClose(false)}
            >
                {trigger}
                <div className={classNames(cls.DropDownWrapper, {[cls.MenuOpen]: isActive}, [])}>
                    <div className={cls.DropDownInner}>
                        {text && <div className={cls.DropDownTitle}>{text}</div>}

                        {items.map((item, index) => (
                            <>
                                {item.to && <Link to={item.to} key={index} className={cls.DropDownItem}>
                                    {item.content}
                                </Link>}
                                {
                                    item.onClick && <div key={index} className={cls.DropDownItem} onClick={item.onClick}>
                                        {item.content}
                                    </div>
                                }
                            </>
                        ))}
                    </div>
                </div>
            </div>
    );
});

import { classNames } from '@/lib/classNames';
import cls from './Modal.module.scss';
import {Dialog} from "@headlessui/react";
import {ReactNode} from "react";

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
    children?: ReactNode;
}

export const Modal = (props: ModalProps) => {
    const { className, isOpen, onClose, children } = props;

    return (
        <Dialog
            className={classNames(cls.Modal, {}, [className])}
            open={isOpen}
            onClose={onClose}
            transition as={'div'}
        >
            <div onClick={onClose} className={cls.ModalInner}>
                {children}
            </div>
        </Dialog>
    )
};

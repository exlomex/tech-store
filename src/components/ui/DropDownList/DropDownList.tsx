import cls from './DropDownList.module.scss';
import {ProductInterface} from "@/types/productsTypes";
import {ReactComponent as RightUpArrow} from "@/assets/arrowRightUpIcon.svg";
import {ReactComponent as Search} from "@/assets/searchIcon.svg";
import {Link} from "react-router-dom";
import {classNames} from "@/lib/classNames";
import {Dispatch, SetStateAction} from "react";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";

interface DropDownProps {
    className?: string;
    items?: ProductInterface[] | undefined;
    isLoading: boolean;
}

export const DropDownList = (props: DropDownProps) => {
    const { className, items, isLoading} = props;

    const dispatch = useAppDispatch()

    return (
        <div className={classNames(cls.DropDownList, {[cls.dataLoading]: isLoading}, [className])}>
            {
                !isLoading
                    ? (
                        items && items.length > 0
                            ? items.map(item => (
                                <Link
                                    to={`/goods/${item.id}`}
                                    key={item.id}
                                    className={cls.ItemWrapper}
                                    onClick={() => dispatch(UserSliceActions.setSearchIsOpen(false))}
                                >
                                    <div className={cls.ItemContent}>
                                        <Search/>
                                        <p className={cls.ItemTitle}>
                                            {item.title}
                                        </p>
                                    </div>
                                    <RightUpArrow width={'11px'}/>
                                </Link>
                            ))
                            : <p className={cls.noContent}>По вашему запросу ничего не найдено</p>
                    )
                    : <div className={cls.loaderWrapper}>
                        <span className={cls.loader}></span>
                    </div>
            }

        </div>
    )
};

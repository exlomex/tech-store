import cls from './DropDownList.module.scss';
import {ProductInterface} from "@/types/productsTypes";
import {ReactComponent as RightUpArrow} from "@/assets/arrowRightUpIcon.svg";
import {ReactComponent as Search} from "@/assets/searchIcon.svg";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {classNames} from "@/lib/classNames";

interface DropDownProps {
    className?: string;
    items?: ProductInterface[] | undefined;
}

export const DropDownList = (props: DropDownProps) => {
    const { className, items} = props;

    return (
        <div className={classNames(cls.DropDownList, {}, [className])}>
            {
                !items?.length
                    ? <p className={cls.noContent}>По вашему запросу ничего не найдено</p>
                    : items.map(item => (
                        <Link to={`/goods/${item.id}`} key={item.id} className={cls.ItemWrapper}>
                            <div className={cls.ItemContent}>
                                <Search/>
                                <p className={cls.ItemTitle}>
                                    {item.title}
                                </p>
                            </div>
                            <RightUpArrow width={'11px'}/>
                        </Link>
                    ))
            }
        </div>
    )
};

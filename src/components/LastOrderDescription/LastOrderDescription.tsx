import { classNames } from '@/lib/classNames';
import cls from './LastOrderDescription.module.scss';
import {OrderInterface} from "@/components/CartDescription/api/createOrderApi";
import {OrderedGoodsList} from "@/components/OrderedGoodsList";
import {useSelector} from "react-redux";
import {getUserLastOrder} from "@/store/selectors/getUserValues";

interface LastOrderDescriptionProps {
    className?: string;
}

export const LastOrderDescription = (props: LastOrderDescriptionProps) => {
    const { className } = props;

    const lastDataDescription = useSelector(getUserLastOrder)

    if (!lastDataDescription) {
        return <div>Заказов не найдено</div>
    }

    return (
        <div className={classNames(cls.LastOrderDescription, {}, [className])}>
            <h2 className={cls.LastOrderTitle}>Заказ оформлен!</h2>
            <OrderedGoodsList orderDescription={lastDataDescription}/>
        </div>
    )
};

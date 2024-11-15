import { classNames } from '@/lib/classNames';
import cls from './GoodDescription.module.scss';
import {useState} from "react";
import {useFetchGoodById} from "@/components/GoodDescription/api/fetchGoodById";
import {MainContainer} from "@/components/MainContainer";
import {Button} from "@/components/ui/Button";
import {renderProductDetailsByType} from "./lib/renderProductDetailsByType";

interface GoodDescriptionProps {
    className?: string;
    goodId: number;
}

export const GoodDescription = (props: GoodDescriptionProps) => {
    const { className, goodId } = props;

    const {data, isLoading, error} = useFetchGoodById({id: goodId})

    const [isShowAllDetails, setIsShowAllDetails] = useState(false)

    if (!data) return (
        <></>
    )

    return (
        <section className={classNames(cls.GoodDescription, {}, [className])}>
            <MainContainer>
                <div className={cls.GoodDescriptionInner}>
                    {data.image ?
                        <img className={cls.GoodImage} src={data.image} alt={`${data.title} image`}/> :
                        <div className={classNames(cls.GoodImage, {}, [cls.GoodWithoutImage])}></div>
                    }

                    <div className={cls.GoodDescriptionContent}>
                        <p className={cls.GoodDescriptionTitle}>{data.title}</p>

                        <div className={classNames(cls.GoodDetailsWrapper, {[cls.IsShowAllDetails]: isShowAllDetails}, [])}>
                            <p className={cls.GoodDetailsTitle}>Характеристики</p>
                            <div className={cls.GoodDetails}>
                                {data && renderProductDetailsByType(data)}
                            </div>

                            {['COMPUTERS', 'MUSIC_SPEAKERS', 'TABLETS'].includes(data.type) ? null : <button onClick={() => setIsShowAllDetails(prev => !prev)}
                                     className={cls.GoodDescriptionShowAll}>
                                {!isShowAllDetails ? 'Все характеристики' : 'Скрыть характеристики'}
                            </button>}
                        </div>
                    </div>

                    <div className={cls.GoodDescriptionRightBox}>
                        <p className={cls.GoodDescriptionPrice}>{data.price} ₽</p>
                        <Button className={cls.GoodDescriptionButton}>В корзину</Button>
                    </div>
                </div>
            </MainContainer>
        </section>
    )
};

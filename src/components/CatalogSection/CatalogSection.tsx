import { classNames } from '@/lib/classNames';
import cls from './CatalogSection.module.scss';
import ComputerImage from '@/assets/categories/pcCategoryIcon.png'
import LaptopImage from '@/assets/categories/lapropCategoryIcon.png'
import PhoneImage from '@/assets/categories/phoneCategoryIcon.png'
import TvImage from '@/assets/categories/tvCategoryIcon.png'
import SpeakerImage from '@/assets/categories/speakerCategoryIcon.png'
import TabletImage from '@/assets/categories/tabletCategoryIcon.png'
import {MainContainer} from "@/components/MainContainer";
import {Link} from "react-router-dom";
import React, {useEffect, useRef} from "react";
import {usePreventOuterScroll} from "@/hooks/usePreventOuterScroll";
import {GoodCategories} from "@/types/productsTypes";

interface CatalogSectionProps {
    className?: string;
}

export const CatalogSection = (props: CatalogSectionProps) => {
    const { className } = props;

    interface catalogItemInterface {
        title: string;
        img: string;
        path: string
    }

    const items: catalogItemInterface[] = [
        {title: 'Смартфоны', img: PhoneImage, path: `/goods?type=${GoodCategories.PHONES}`},
        {title: 'Ноутбуки', img: LaptopImage, path: `/goods?type=${GoodCategories.LAPTOPS}`},
        {title: 'Компьютеры', img: ComputerImage, path: `/goods?type=${GoodCategories.COMPUTERS}`},
        {title: 'Телевизоры', img: TvImage, path: `/goods?type=${GoodCategories.TVS}`},
        {title: 'Планшеты', img: TabletImage, path: `/goods?type=${GoodCategories.TABLETS}`},
        {title: 'Колонки', img: SpeakerImage, path: `/goods?type=${GoodCategories.MUSIC_SPEAKERS}`},
    ]

    const catalogRef = useRef<HTMLDivElement>(null)

    const onWheelScrollingHandler = (e: React.WheelEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        target.scrollLeft += e.deltaY;
    };

    usePreventOuterScroll(catalogRef);

    return (
            <section className={classNames(cls.CatalogSection, {}, [className])}>
                <MainContainer>
                    <div className={cls.CatalogSectionInner}>
                        <h2 className={cls.CatalogTitle}>Каталог</h2>

                        <div
                            className={cls.CatalogCategories}
                            ref={catalogRef}
                            onWheel={onWheelScrollingHandler}
                        >
                            {items.map((item, index) => (
                                <Link key={index} to={item.path} className={cls.CategoryItemWrapper}>
                                    <div className={cls.CategoryItemImageWrapper}>
                                        <img className={cls.CategoryItemImage} src={item.img} alt={`${item.title}`}/>
                                    </div>
                                    <p className={cls.CategoryItemTitle}>{item.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </MainContainer>
            </section>
    )
};

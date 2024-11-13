import { classNames } from '@/lib/classNames';
import cls from './GoodDescription.module.scss';
import {useEffect, useState} from "react";
import {useFetchGoodById} from "@/components/GoodDescription/api/fetchGoodById";
import {
    ComputerDetails, HZLabelsMap, InMemoryLabelsMap, LaptopDetails,
    MusicSpeakerDetails, OperationMemoryLabelsMap, OperationSystemLabelsMap,
    PhoneDetails, ProcessorBrandLabelsMap,
    ProductInterface,
    ProductsLabelsMap, ScreenResolutionLabelsMap,
    TabletDetails,
    TVDetails
} from "@/types/productsTypes";
import {MainContainer} from "@/components/MainContainer";
import {Button} from "@/components/ui/Button";

interface GoodDescriptionProps {
    className?: string;
    goodId: number;
}

const renderProductDetailsByType = (product: ProductInterface) => {
    switch (product.type) {
        case 'PHONES':
            return RenderPhoneDetails(product.details);
        case 'LAPTOPS':
            return RenderLaptopDetails(product.details);
        case 'COMPUTERS':
            return RenderComputerDetails(product.details);
        case 'TABLETS':
            return RenderTabletDetails(product.details);
        case 'MUSIC_SPEAKERS':
            return RenderMusicSpeakerDetails(product.details);
        case 'TVS':
            return RenderTVDetails(product.details);
        default:
            return null;
    }
};

const RenderPhoneDetails = (details: PhoneDetails) => (
    <>
        <p><span>{ProductsLabelsMap['screenType']}:</span> <span></span>  <span>{details.screenType}</span></p>
        <p><span>{ProductsLabelsMap['inMemory']}:</span> <span></span> <span>{InMemoryLabelsMap[details.inMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationMemory']}:</span> <span></span> <span>{OperationMemoryLabelsMap[details.operationMemory]}</span></p>
        <p><span>{ProductsLabelsMap['processorBrand']}:</span> <span></span> <span>{ProcessorBrandLabelsMap[details.processorBrand]}</span></p>
        <p><span>{ProductsLabelsMap['operationSystem']}:</span> <span></span> <span>{OperationSystemLabelsMap[details.operationSystem]}</span></p>
        <p><span>{ProductsLabelsMap['wirelessCharging']}:</span> <span></span> <span>{details.wirelessCharging ? 'Да' : 'Нет'}</span></p>
        <p><span>{ProductsLabelsMap['numberOfCores']}:</span> <span></span> <span>{details.numberOfCores}</span></p>
        <p><span>{ProductsLabelsMap['diagonalScreen']}:</span> <span></span> <span>{details.diagonalScreen} дюймов</span></p>
        <p><span>{ProductsLabelsMap['batteryCapacity']}:</span> <span></span> <span>{details.batteryCapacity} мАч</span></p>
        <p><span>{ProductsLabelsMap['mainCameraMP']}:</span> <span></span> <span>{details.mainCameraMP} МП</span></p>
        <p><span>{ProductsLabelsMap['frontCameraMP']}:</span> <span></span> <span>{details.frontCameraMP} МП</span></p>
    </>
);

const RenderTVDetails = (details: TVDetails) => (
    <>
        <p><span>{ProductsLabelsMap['screenDiagonal']}:</span> <span></span> <span>{details.screenDiagonal} дюймов</span></p>
        <p><span>{ProductsLabelsMap['screenResolution']}:</span><span></span><span>{ScreenResolutionLabelsMap[details.screenResolution]}</span></p>
        <p><span>{ProductsLabelsMap['matrix']}:</span> <span></span> <span>{details.matrix}</span></p>
        <p><span>{ProductsLabelsMap['hdr']}:</span> <span></span> <span>{details.hdr ? 'Да' : 'Нет'}</span></p>
        <p><span>{ProductsLabelsMap['hz']}:</span> <span></span> <span>{HZLabelsMap[details.hz]} Герц</span></p>
        <p><span>{ProductsLabelsMap['brand']}:</span> <span></span> <span>{details.brand}</span></p>
    </>
);

const RenderLaptopDetails = (details: LaptopDetails) => (
    <>
        <p><span>{ProductsLabelsMap['inMemory']}:</span> <span></span> <span>{InMemoryLabelsMap[details.inMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationMemory']}:</span> <span></span> <span>{OperationMemoryLabelsMap[details.operationMemory]}</span></p>
        <p><span>{ProductsLabelsMap['screenDiagonal']}:</span> <span></span> <span>{details.screenDiagonal} дюймов</span></p>
        <p><span>{ProductsLabelsMap['brand']}:</span> <span></span> <span>{details.brand}</span></p>
        <p><span>{ProductsLabelsMap['processorBrand']}:</span> <span></span> <span>{details.processorBrand}</span></p>
        <p><span>{ProductsLabelsMap['operationSystem']}:</span> <span></span> <span>{details.operationSystem}</span></p>
        <p><span>{ProductsLabelsMap['screenResolution']}:</span> <span></span> <span>{ScreenResolutionLabelsMap[details.screenResolution]}</span></p>
    </>
);

const RenderComputerDetails = (details: ComputerDetails) => (
    <>
        <p><span>{ProductsLabelsMap['inMemory']}:</span> <span></span> <span>{InMemoryLabelsMap[details.inMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationMemory']}:</span> <span></span> <span>{OperationMemoryLabelsMap[details.operationMemory]}</span></p>
        <p><span>{ProductsLabelsMap['processorBrand']}:</span> <span></span> <span>{details.processorBrand}</span></p>
        <p><span>{ProductsLabelsMap['case']}:</span> <span></span> <span>{details.case}</span></p>
        <p><span>{ProductsLabelsMap['operationSystem']}:</span> <span></span> <span>{details.operationSystem ? 'Да' : 'Нет'}</span></p>
    </>
);

const RenderTabletDetails = (details: TabletDetails) => (
    <>
        <p><span>{ProductsLabelsMap['inMemory']}:</span> <span></span> <span>{InMemoryLabelsMap[details.inMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationMemory']}:</span> <span></span> <span>{OperationMemoryLabelsMap[details.operationMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationSystem']}:</span> <span></span> <span>{OperationSystemLabelsMap[details.operationSystem]}</span></p>
        <p><span>{ProductsLabelsMap['brand']}:</span> <span></span> <span>{details.brand}</span></p>
        <p><span>{ProductsLabelsMap['diagonalScreen']}:</span> <span></span> <span>{details.diagonalScreen} дюймов</span></p>
    </>
);

const RenderMusicSpeakerDetails = (details: MusicSpeakerDetails) => (
    <>
        <p><span>{ProductsLabelsMap['speakerType']}:</span> <span></span> <span>{details.speakerType}</span></p>
        <p><span>{ProductsLabelsMap['format']}:</span> <span></span> <span>{details.format}</span></p>
        <p><span>{ProductsLabelsMap['energyType']}:</span> <span></span> <span>{details.energyType}</span></p>
        <p><span>{ProductsLabelsMap['brand']}:</span> <span></span> <span>{details.brand}</span></p>
        <p><span>{ProductsLabelsMap['power']}:</span> <span></span> <span>{details.power} Вт</span></p>
    </>
);



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

                            {data.type !== 'COMPUTERS' && data.type !== 'MUSIC_SPEAKERS' && data.type !== 'TABLETS' && <button onClick={() => setIsShowAllDetails(prev => !prev)}
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

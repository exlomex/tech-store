import {
    ComputerDetails,
    HZLabelsMap,
    InMemoryLabelsMap, LaptopDetails, MusicSpeakerDetails,
    OperationMemoryLabelsMap, OperationSystemLabelsMap,
    PhoneDetails,
    ProcessorBrandLabelsMap,
    ProductsLabelsMap, ScreenResolutionLabelsMap, TabletDetails, TVDetails
} from "@/types/productsTypes";

export const RenderPhoneDetails = (details: PhoneDetails) => (
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

export const RenderTVDetails = (details: TVDetails) => (
    <>
        <p><span>{ProductsLabelsMap['screenDiagonal']}:</span> <span></span> <span>{details.screenDiagonal} дюймов</span></p>
        <p><span>{ProductsLabelsMap['screenResolution']}:</span><span></span><span>{ScreenResolutionLabelsMap[details.screenResolution]}</span></p>
        <p><span>{ProductsLabelsMap['matrix']}:</span> <span></span> <span>{details.matrix}</span></p>
        <p><span>{ProductsLabelsMap['hdr']}:</span> <span></span> <span>{details.hdr ? 'Да' : 'Нет'}</span></p>
        <p><span>{ProductsLabelsMap['hz']}:</span> <span></span> <span>{HZLabelsMap[details.hz]} Герц</span></p>
        <p><span>{ProductsLabelsMap['brand']}:</span> <span></span> <span>{details.brand}</span></p>
    </>
);

export const RenderLaptopDetails = (details: LaptopDetails) => (
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

export const RenderComputerDetails = (details: ComputerDetails) => (
    <>
        <p><span>{ProductsLabelsMap['inMemory']}:</span> <span></span> <span>{InMemoryLabelsMap[details.inMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationMemory']}:</span> <span></span> <span>{OperationMemoryLabelsMap[details.operationMemory]}</span></p>
        <p><span>{ProductsLabelsMap['processorBrand']}:</span> <span></span> <span>{details.processorBrand}</span></p>
        <p><span>{ProductsLabelsMap['case']}:</span> <span></span> <span>{details.case}</span></p>
        <p><span>{ProductsLabelsMap['operationSystem']}:</span> <span></span> <span>{details.operationSystem ? 'Да' : 'Нет'}</span></p>
    </>
);

export const RenderTabletDetails = (details: TabletDetails) => (
    <>
        <p><span>{ProductsLabelsMap['inMemory']}:</span> <span></span> <span>{InMemoryLabelsMap[details.inMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationMemory']}:</span> <span></span> <span>{OperationMemoryLabelsMap[details.operationMemory]}</span></p>
        <p><span>{ProductsLabelsMap['operationSystem']}:</span> <span></span> <span>{OperationSystemLabelsMap[details.operationSystem]}</span></p>
        <p><span>{ProductsLabelsMap['brand']}:</span> <span></span> <span>{details.brand}</span></p>
        <p><span>{ProductsLabelsMap['diagonalScreen']}:</span> <span></span> <span>{details.diagonalScreen} дюймов</span></p>
    </>
);

export const RenderMusicSpeakerDetails = (details: MusicSpeakerDetails) => (
    <>
        <p><span>{ProductsLabelsMap['speakerType']}:</span> <span></span> <span>{details.speakerType}</span></p>
        <p><span>{ProductsLabelsMap['format']}:</span> <span></span> <span>{details.format}</span></p>
        <p><span>{ProductsLabelsMap['energyType']}:</span> <span></span> <span>{details.energyType}</span></p>
        <p><span>{ProductsLabelsMap['brand']}:</span> <span></span> <span>{details.brand}</span></p>
        <p><span>{ProductsLabelsMap['power']}:</span> <span></span> <span>{details.power} Вт</span></p>
    </>
);
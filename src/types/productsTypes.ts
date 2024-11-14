export type ProductType = 'TVS' | 'PHONES' | 'LAPTOPS' | 'COMPUTERS' | 'TABLETS' | 'MUSIC_SPEAKERS';
export type ProductTypeLowerCase = 'tvs' | 'phones' | 'laptops' | 'computers' | 'tablets' | 'music_speakers';

export enum GoodCategories {
    PHONES = 'phones',
    LAPTOPS = 'laptops',
    COMPUTERS = 'computers',
    TVS = 'tvs',
    TABLETS = 'tablets',
    MUSIC_SPEAKERS = 'music_speakers',
}

export const ProductsLabelsMap: Partial<Record<keyof LaptopDetails | keyof ComputerDetails | keyof TVDetails | keyof TabletDetails | keyof PhoneDetails | keyof MusicSpeakerDetails, string>> = {
    brand: 'Бренд',
    inMemory: 'Встроенная память',
    operationMemory: 'Оперативная память',
    screenDiagonal: 'Диагональ экрана',
    processorBrand: 'Производитель процессора',
    operationSystem: 'Операционная система',
    screenResolution: 'Разрешение экрана',
    screenType: 'Тип экрана',
    batteryCapacity: 'Емкость батареи',
    case: 'Корпус',
    hdr: 'hdr',
    diagonalScreen: 'Диагональ экрана',
    energyType: 'Тип подключения',
    format: 'Тип аудио',
    frontCameraMP: 'Фронтальная камера',
    hz: 'Частота обновления',
    matrix: 'Тип матрицы',
    power: 'Емкость аккумулятора',
    mainCameraMP: 'Основная камера',
    speakerType: 'Тип',
    numberOfCores: 'Количество ядер',
    wirelessCharging: 'Беспроводная зарядка'
};

type InMemory = 'M_32' | 'M_64' | 'M_128' | 'M_256' | 'M_512' | 'M_1024';
type OperationMemory = 'M_2' | 'M_4' | 'M_8' | 'M_16';
type ProcessorBrand = 'APPLE' | 'MEDIATEK' | 'QUALCOMM';
type LaptopOperationSystem = 'MACOS' | 'WINDOWS' | 'LINUX'
type OperationSystem = 'IOS' | 'ANDROID';
type ScreenResolution = 'FULL_HD' | 'TWO_K' | 'FOUR_K';
type HZ = 'HZ_60' | 'HZ_140';
type LaptopBrand = 'APPLE' | 'SAMSUNG' | 'SONY' | 'LENOVO';
type ScreenDiagonal = 13 | 15 | 17 | 19 | 21 | 24 | 27 | 32 | 64 | 42 | 46 | 50 | 52 | 55 | 4 | 6 | 7 | 8 | 9 | 10 ;
type ComputerProcessorBrand = 'INTEL' | 'AMD';
type ComputerCase = "TOWER" | 'MINI';
type TabletBrand = 'APPLE' | 'SAMSUNG' | 'SONY' | 'LENOVO';
type TvMatrix = 'LED' | 'OLED' | 'QLED';
type TvBrand = 'SONY' | 'SAMSUNG' | 'APPLE' | 'NOKIA';
type SpeakerType = 'AUDIO_SYSTEM' | 'SMART_SPEAKER';
type MusicFormat = "F_1_0" | "F_1_1" | 'F_2_0' | 'F_2_1' | 'F_5_1';
type MusicEnergyType = "BATTERY" | 'NETWORK';
type MusicBrand = "SONY" | 'JBL';
type MusicPower = 100 | 200 | 300 | 400 | 500 | 700 | 600 | 800 | 900 | 1000;
type PhoneScreenType = 'AMOLED' | 'OLED' | 'IPS'

export type unionDescriptionsValues = '' | false | true | LaptopOperationSystem | PhoneScreenType | InMemory | OperationMemory | ProcessorBrand | OperationSystem | ScreenResolution | HZ | ScreenDiagonal | LaptopBrand | ComputerProcessorBrand | ComputerCase | TabletBrand | TvMatrix | TvBrand | SpeakerType | MusicFormat | MusicEnergyType | MusicBrand | MusicPower;


export const HZLabelsMap: Record<HZ, number> = {
    HZ_60: 60,
    HZ_140: 144,
}

export const InMemoryLabelsMap: Record<InMemory, string> = {
    M_32: '32 ГБ',
    M_64: '64 ГБ',
    M_128: '128 ГБ',
    M_256: '256 ГБ',
    M_512: '512 ГБ',
    M_1024: '1 ТБ'
};

export const OperationMemoryLabelsMap: Record<OperationMemory, string> = {
    M_2: '2 ГБ',
    M_4: '4 ГБ',
    M_8: '8 ГБ',
    M_16: '16 ГБ'
};

export const ProcessorBrandLabelsMap: Record<ProcessorBrand, string> = {
    APPLE: 'Apple',
    MEDIATEK: 'MediaTek',
    QUALCOMM: 'Qualcomm'
};

export const OperationSystemLabelsMap: Record<OperationSystem, string> = {
    IOS: 'iOS',
    ANDROID: 'Android'
};

export const ScreenResolutionLabelsMap: Record<ScreenResolution, string> = {
    FULL_HD: 'Full HD',
    TWO_K: '2K',
    FOUR_K: '4K'
};

export interface ReviewInterface {
    id: number;
    description: string;
    rating: number;
    userId: {
        firstName: string;
        lastName: string;
    };
    goodId: number;
}

interface BaseProduct {
    type: ProductType;
    id: number;
    title: string;
    price: number;
    rating: number;
    image: string | null;
    reviews: ReviewInterface[];
}

export interface LaptopDetails {
    type: 'laptops';
    id: number;
    inMemory: InMemory;
    operationMemory: OperationMemory;
    screenDiagonal: ScreenDiagonal;
    brand: LaptopBrand;
    processorBrand: ComputerProcessorBrand;
    operationSystem: OperationSystem;
    screenResolution: ScreenResolution;
}

export interface ComputerDetails {
    type: 'computers';
    id: number;
    "inMemory": InMemory,
    "operationMemory": OperationMemory,
    "processorBrand": ComputerProcessorBrand,
    "case": ComputerCase,
    "operationSystem": boolean
}

export interface TabletDetails {
    type: 'tablets';
    id: number;
    "inMemory": InMemory,
    "operationMemory": OperationMemory,
    "operationSystem": OperationSystem,
    "brand": TabletBrand,
    "diagonalScreen": ScreenDiagonal;
}

export interface MusicSpeakerDetails {
    type: 'music_speakers';
    id: number;
    "speakerType": SpeakerType;
    "format": MusicFormat;
    "energyType": MusicEnergyType;
    "brand": MusicBrand;
    "power": MusicPower;
}

export interface TVDetails {
    type: 'tvs';
    id: number;
    screenDiagonal: ScreenDiagonal;
    screenResolution: ScreenResolution;
    matrix: TvMatrix;
    hdr: boolean;
    hz: HZ;
    brand: TvBrand;
}



export interface PhoneDetails {
    type: 'phones';
    id: number;
    screenType: PhoneScreenType;
    inMemory: InMemory;
    operationMemory: OperationMemory;
    processorBrand: ProcessorBrand;
    operationSystem: OperationSystem;
    wirelessCharging: boolean;
    numberOfCores: number;
    diagonalScreen: number;
    batteryCapacity: number;
    mainCameraMP: number;
    frontCameraMP: number;
}

interface TVProduct extends BaseProduct {
    type: 'TVS'
    details: TVDetails;
}

interface PhoneProduct extends BaseProduct {
    type: 'PHONES';
    details: PhoneDetails;
}

interface LaptopProduct extends BaseProduct {
    type: 'LAPTOPS';
    details: LaptopDetails;
}

interface ComputerProduct extends BaseProduct {
    type: 'COMPUTERS';
    details: ComputerDetails;
}

interface TabletProduct extends BaseProduct {
    type: 'TABLETS';
    details: TabletDetails;
}

interface MusicSpeakerProduct extends BaseProduct {
    type: 'MUSIC_SPEAKERS';
    details: MusicSpeakerDetails;
}

export type DetailsUnion = PhoneDetails | MusicSpeakerDetails | TabletDetails | LaptopDetails | ComputerDetails | TVDetails
export type ProductInterface = PhoneProduct | LaptopProduct | ComputerProduct | TVProduct | TabletProduct | MusicSpeakerProduct;
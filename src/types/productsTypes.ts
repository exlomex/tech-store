// export type ProductType = 'TVS' | 'PHONES' | 'LAPTOPS' | 'COMPUTERS' | 'TABLETS' | 'MUSIC_SPEAKERS';

export enum GoodCategories {
    PHONES = 'phones',
    LAPTOPS = 'laptops',
    COMPUTERS = 'computers',
    TVS = 'tvs',
    TABLETS = 'tablets',
    MUSIC_SPEAKERS = 'music_speakers',
}

type InMemory = 'M_32' | 'M_64' | 'M_128' | 'M_256' | 'M_512' | 'M_1024';
type OperationMemory = 'M_2' | 'M_4' | 'M_8' | 'M_16';
// TODO replace qualcomm
type ProcessorBrand = 'APPLE' | 'MEDIATEK' | 'QUALCOMm';
type OperationSystem = 'IOS' | 'ANDROID';
type ScreenResolution = 'FULL_HD' | 'TWO_K' | 'FOUR_K';
interface ReviewInterface {
    id: number;
    description: string;
    rating: number;
    userId: number;
    goodId: number;
}

interface BaseProduct {
    id: number;
    title: string;
    price: number;
    rating: number;
    image: string | null;
    reviews: ReviewInterface[];
}

interface LaptopDetails {
    type: 'laptops';
    id: number;
    inMemory: InMemory;
    operationMemory: OperationMemory;
    "screenDiagonal": number;
    "brand": 'APPLE' | 'SAMSUNG' | 'SONY' | 'LENOVO';
    "processorBrand": ProcessorBrand;
    "operationSystem": OperationSystem;
    "screenResolution": ScreenResolution;
}

interface ComputerDetails {
    type: 'computers';
    id: number;
    "inMemory": InMemory,
    "operationMemory": OperationMemory,
    "processorBrand": 'INTEL' | 'AMD',
    "case": "TOWER" | 'MINI',
    "operationSystem": boolean
}

interface TabletDetails {
    type: 'tablets';
    id: number;
    "inMemory": InMemory,
    "operationMemory": OperationMemory,
    "operationSystem": OperationSystem,
    "brand": 'APPLE' | 'SAMSUNG' | 'SONY' | 'LENOVO',
    "diagonalScreen": number;
}

interface MusicSpeakerDetails {
    type: 'music_speakers';
    id: number;
    "speakerType": 'AUDIO_SYSTEM' | 'SMART_SPEAKER';
    "format": "F_1_0" | "F_1_1" | 'F_2_0' | 'F_2_1' | 'F_5_1';
    "energyType": "BATTERY" | 'NETWORK';
    "brand": "SONY" | 'JBL';
    "power": number;
}

interface TVDetails {
    type: 'tvs';
    id: number;
    screenDiagonal: number;
    screenResolution: ScreenResolution;
    matrix: 'LED' | 'OLED' | 'QLED';
    hdr: boolean;
    hz: 'HZ_60' | 'HZ_140';
    brand: 'SONY' | 'SAMSUNG' | 'APPLE' | 'NOKIA';
}

interface PhoneDetails {
    type: 'phones';
    id: number;
    screenType: 'AMOLED' | 'OLED' | 'IPS';
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

export type ProductInterface = PhoneProduct | LaptopProduct | ComputerProduct | TVProduct | TabletProduct | MusicSpeakerProduct;
import {ProductsLabelsMap, ProductTypeLowerCase, unionDescriptionsValues} from "@/types/productsTypes";

export interface productTypeFilterOptionsInterface {
    label: string;
    labelKey: keyof typeof ProductsLabelsMap;
    options: string[];
    optionKeys: unionDescriptionsValues[]
}

export type productTypeFiltersMapInterface = {
    [key in ProductTypeLowerCase]: productTypeFilterOptionsInterface[];
};

export const ProductTypeFiltersMap: Partial<productTypeFiltersMapInterface> = {
    phones: [
        {
            label: 'Производитель процессора',
            labelKey: 'processorBrand',
            options: ['нет', 'Apple', 'MediaTek', 'Qualcomm'],
            optionKeys: ['', 'APPLE', 'MEDIATEK', 'QUALCOMM']
        },
        {
            label: 'Оперативная память',
            labelKey: 'operationMemory',
            options: ['нет', '2 ГБ', '4 ГБ', '8 ГБ', '16 ГБ'],
            optionKeys: ['', 'M_2', 'M_4', 'M_8', 'M_16']
        },
        {
            label: 'Встроенная память',
            labelKey: 'inMemory',
            options: ['нет', '32 ГБ', '64 ГБ', '128 ГБ', '256 ГБ', '512 ГБ', '1 ТБ'],
            optionKeys: ['', 'M_32', 'M_64', 'M_128', 'M_256', 'M_512', 'M_1024']
        },
        {
            label: 'Диагональ экрана',
            labelKey: 'diagonalScreen',
            options: ['нет', '4 дюймов', '6 дюймов', '7 дюймов'],
            optionKeys: ['', 4, 6, 7]
        },
        {
            label: 'Операционная система',
            labelKey: 'operationSystem',
            options: ['нет', 'iOS', 'Android'],
            optionKeys: ['', 'IOS', 'ANDROID']
        }
    ],
    laptops: [
        {
            label: 'Производитель процессора',
            labelKey: 'processorBrand',
            options: ['нет', 'Intel', 'AMD'],
            optionKeys: ['', 'INTEL', 'AMD']
        },
        {
            label: 'Разрешение экрана',
            labelKey: 'screenResolution',
            options: ['нет', 'Full HD', '2K', '4K'],
            optionKeys: ['', 'FULL_HD', 'TWO_K', 'FOUR_K']
        },
        {
            label: 'Оперативная память',
            labelKey: 'operationMemory',
            options: ['нет', '2 ГБ', '4 ГБ', '8 ГБ', '16 ГБ'],
            optionKeys: ['', 'M_2', 'M_4', 'M_8', 'M_16']
        },
        {
            label: 'Встроенная память',
            labelKey: 'inMemory',
            options: ['нет', '32 ГБ', '64 ГБ', '128 ГБ', '256 ГБ', '512 ГБ', '1 ТБ'],
            optionKeys: ['', 'M_32', 'M_64', 'M_128', 'M_256', 'M_512', 'M_1024']
        },
        {
            label: 'Диагональ экрана',
            labelKey: 'screenDiagonal',
            options: ['нет', '13 дюймов', '15 дюймов', '17 дюймов', '19 дюймов'],
            optionKeys: ['', 13, 15, 17, 19]
        },
        {
            label: 'Операционная система',
            labelKey: 'operationSystem',
            options: ['нет', 'MacOS', 'Windows', 'Linux'],
            optionKeys: ['', 'MACOS' ,'WINDOWS', 'LINUX']
        },
        {
            label: 'Бренд',
            labelKey: 'brand',
            options: ['нет', 'Apple', 'Samsung', 'Sony', 'Lenovo'],
            optionKeys: ['', 'APPLE', 'SAMSUNG', 'SONY', 'LENOVO']
        },
    ],
    tvs: [
        {
            label: 'Тип матрицы',
            labelKey: 'matrix',
            options: ['нет', 'LED', 'OLED', 'QLED'],
            optionKeys: ['', 'LED', 'OLED', 'QLED']
        },
        {
            label: 'Разрешение экрана',
            labelKey: 'screenResolution',
            options: ['нет', 'Full HD', '2K', '4K'],
            optionKeys: ['', 'FULL_HD', 'TWO_K', 'FOUR_K']
        },
        {
            label: 'Диагональ экрана',
            labelKey: 'screenDiagonal',
            options: ['нет', "27 дюймов", "32 дюйма","64 дюйма", "42 дюймов", "46 дюймов", "50 дюймов", "52 дюйма", "55 дюймов"],
            optionKeys: ['', 27, 32, 64, 42, 46, 50, 52, 55]
        },
        {
            label: 'Частота обновления',
            labelKey: 'hz',
            options: ['нет', '60 Гц', '144 Гц'],
            optionKeys: ['', 'HZ_60', 'HZ_140']
        },
        {
            label: 'Hdr',
            labelKey: 'hdr',
            options: ['Есть', 'Нет'],
            optionKeys: [true, false]
        }
    ],
    computers: [
        {
            label: 'Производитель процессора',
            labelKey: 'processorBrand',
            options: ['нет', 'Intel', 'AMD'],
            optionKeys: ['', 'INTEL', 'AMD']
        },
        {
            label: 'Оперативная память',
            labelKey: 'operationMemory',
            options: ['нет', '2 ГБ', '4 ГБ', '8 ГБ', '16 ГБ'],
            optionKeys: ['', 'M_2', 'M_4', 'M_8', 'M_16']
        },
        {
            label: 'Встроенная память',
            labelKey: 'inMemory',
            options: ['нет', '32 ГБ', '64 ГБ', '128 ГБ', '256 ГБ', '512 ГБ', '1 ТБ'],
            optionKeys: ['', 'M_32', 'M_64', 'M_128', 'M_256', 'M_512', 'M_1024']
        },
        {
            label: 'Корпус',
            labelKey: 'case',
            options: ['нет', 'Tower', 'Mini'],
            optionKeys: ['', 'TOWER', 'MINI']
        }
    ],
    tablets: [
        {
            label: 'Бренд',
            labelKey: 'brand',
            options: ['нет', 'Apple', 'Samsung', 'Sony', 'Lenovo'],
            optionKeys: ['', 'APPLE', 'SAMSUNG', 'SONY', 'LENOVO']
        },
        {
            label: 'Диагональ экрана',
            labelKey: 'diagonalScreen',
            options: ['нет', '8 дюймов', '9 дюймов', '10 дюймов'],
            optionKeys: ['', 8, 9, 10]
        },
        {
            label: 'Оперативная память',
            labelKey: 'operationMemory',
            options: ['нет', '2 ГБ', '4 ГБ', '8 ГБ', '16 ГБ'],
            optionKeys: ['', 'M_2', 'M_4', 'M_8', 'M_16']
        }
    ],
    music_speakers: [
        {
            label: 'Тип колонок',
            labelKey: 'speakerType',
            options: ['нет', 'Аудиосистема', 'Умная колонка'],
            optionKeys: ['', 'AUDIO_SYSTEM', 'SMART_SPEAKER']
        },
        {
            label: 'Формат',
            labelKey: 'format',
            options: ['нет', '1.0', '1.1', '2.0', '2.1', '5.1'],
            optionKeys: ['', 'F_1_0', 'F_1_1', 'F_2_0', 'F_2_1', 'F_5_1']
        },
        {
            label: 'Тип питания',
            labelKey: 'energyType',
            options: ['нет', 'Батарея', 'Сеть'],
            optionKeys: ['', 'BATTERY', 'NETWORK']
        },
        {
            label: 'Бренд',
            labelKey: 'brand',
            options: ['нет', 'Sony', 'JBL'],
            optionKeys: ['', 'SONY', 'JBL']
        },
        {
            label: 'Мощность',
            labelKey: 'power',
            options: ['нет', '100 Вт', '200 Вт', '300 Вт', '400 Вт', '500 Вт', '600 Вт', '700 Вт', '800 Вт', '900 Вт', '1000 Вт'],
            optionKeys: ['', 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
        }
    ]
};


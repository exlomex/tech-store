import {ProductTypeLowerCase} from "@/types/productsTypes";

type previouslyPathValues = 'Смартфоны' | "Компьютеры" | 'Ноутбуки' | 'Планшеты' | 'Колонки' | 'Телевизоры' | 'Корзина' | 'Главная'
type lastPathValues = 'Оформление заказа' | 'Карточка товара'
export type navigationLineUnion = previouslyPathValues | lastPathValues

export const previousPathByPathTitle: Record<previouslyPathValues, string> = {
    'Главная': '/',
    'Колонки': '/goods?type=music_speakers',
    'Компьютеры': '/goods?type=computers',
    'Корзина': '/cart',
    'Планшеты': '/goods?type=tablets',
    'Смартфоны': 'goods?type=phones',
    'Телевизоры': '/goods?type=tvs',
    'Ноутбуки': '/goods?type=laptops'
}

export const TranslatedCategories: Record<ProductTypeLowerCase, string> = {
    'phones': 'Смартфоны',
    'tvs': 'Телевизоры',
    'tablets': 'Планшеты',
    'music_speakers': 'Колонки',
    'computers': 'Компьютеры',
    'laptops': 'Ноутбуки'
}

export interface navigationLineOptions {
    previousPaths: previouslyPathValues[];
    currentPath: Omit<navigationLineUnion, 'Главная'> ;
}

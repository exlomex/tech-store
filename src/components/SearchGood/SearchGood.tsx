import { classNames } from '@/lib/classNames';
import cls from './SearchGood.module.scss';
import { ReactComponent as SearchSvg } from "@/assets/searchIcon.svg";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {LazyFetchGoodsByString} from "@/components/SearchGood/api/fetchGoodsByString";
import useDebounce from "@/hooks/useDebounce";
import {DropDownList} from "@/components/ui/DropDownList";

interface SearchGoodProps {
    className?: string;
}

export const SearchGood = (props: SearchGoodProps) => {
    const { className } = props;

    const [inputActive, setInputActive] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const [triggerGoodsFetch, {data: searchData, isLoading: searchIsLoading, error, isFetching: searchIsFetching}] = LazyFetchGoodsByString()

    const onSearchClickHandler = () => {
        setInputActive(true)

        inputRef.current && inputRef.current.focus()
    }

    useEffect(() => {
        const onClickHandler = (e: MouseEvent) => {
            if (e.target === overlayRef.current) {
                setInputActive(false)
            }
        }
        document.addEventListener('click',  onClickHandler)
        return () => document.removeEventListener('click',  onClickHandler);
    }, []);

    useEffect(() => {
        const onClickHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setInputActive(false)
                inputRef.current && inputRef.current.blur()
            }
        }
        document.addEventListener('keydown',  onClickHandler)
        return () => document.removeEventListener('keydown',  onClickHandler);
    }, []);


    const [queryValue, setQueryValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQueryValue(e.target.value)
    }

    const debouncedQueryValue = useDebounce(queryValue, 1000)

    useEffect(() => {
        if (debouncedQueryValue) {
            triggerGoodsFetch({string: debouncedQueryValue})
        }
    }, [debouncedQueryValue]);

    return (
        <>
            <div className={classNames(cls.SearchGood, {[cls.inputActive]: inputActive}, [className])} onClick={onSearchClickHandler}>
                <div className={cls.Input_wrapper}>
                    <SearchSvg/>
                    <input
                        className={classNames(cls.Input, {[cls.inputActive]: inputActive}, [])}
                        placeholder={'Поиск'} type="text" ref={inputRef}
                        onChange={onInputChange} value={queryValue}
                    />
                    {searchIsFetching &&
                        <div className={cls.loaderWrapper}>
                            <span className={cls.loader}></span>
                        </div>
                    }

                </div>
                {debouncedQueryValue && inputActive && !searchIsLoading && <DropDownList items={searchData}/>}
            </div>
            <div ref={overlayRef} className={classNames(cls.Overlay, {[cls.Overlay_active]: inputActive}, [])}></div>
        </>
    )
};

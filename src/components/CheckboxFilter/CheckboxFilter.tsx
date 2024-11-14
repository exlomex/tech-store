import { classNames } from '@/lib/classNames';
import cls from './CheckboxFilter.module.scss';
import {Field, Label, Radio, RadioGroup} from "@headlessui/react";
import React, {useState} from "react";
import {productTypeFilterOptionsInterface} from "@/components/CategoryFilters/consts/productTypeFiltersMap";
import {useSelector} from "react-redux";
import {getFiltersCategory} from "@/store/selectors/getFiltersValues";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {setFiltersByProductType} from "@/components/CheckboxFilter/lib/setFiltersByProductType";

interface CheckboxFilterProps {
    className?: string;
    filter: productTypeFilterOptionsInterface;
}

export const CheckboxFilter = (props: CheckboxFilterProps) => {
    const { className, filter } = props;

    const radioValues = filter.options

    const categoryType = useSelector(getFiltersCategory)
    const dispatch = useAppDispatch()

    let [selected, setSelected] = useState('')

    const handleSelect = (value: string) => {
        setSelected(value);
        const indexOfValue = filter.options.indexOf(value)

        setFiltersByProductType(categoryType, filter.labelKey, filter.optionKeys[indexOfValue], dispatch)
    };

    return (
        <div className={classNames(cls.CheckboxFilter, {}, [className])}>
            <h2 className={cls.CheckboxFilterTitle}>{filter.label}</h2>

            <RadioGroup value={selected} onChange={handleSelect} className={cls.RadioGroup}>
                {radioValues.map((value, index) => (
                    <Field key={index} className={cls.RadioGroupField}>
                        <Radio value={value} className={cls.Radio}>
                            <span></span>
                        </Radio>
                        <p className={cls.RadioTitle}>{value}</p>
                    </Field>
                ))}
            </RadioGroup>
        </div>
    )
};

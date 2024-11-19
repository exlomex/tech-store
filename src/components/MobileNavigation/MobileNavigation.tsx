import { classNames } from '@/lib/classNames';
import cls from './MobileNavigation.module.scss';
import {Navigation} from "@/components/Navigation";
import {MainContainer} from "@/components/MainContainer";

interface MobileNavigationProps {
    className?: string;
}

export const MobileNavigation = (props: MobileNavigationProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MobileNavigation, {}, [className])}>
            <MainContainer>
                <Navigation navType={"mobile"}/>
            </MainContainer>
        </div>
    )
};

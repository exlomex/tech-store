import { classNames } from '@/lib/classNames';
import cls from './NavigationLine.module.scss';
import {navigationLineOptions, previousPathByPathTitle} from "@/components/NavigationLine/types/navigationLineLevels";
import {ReactComponent as LeftArrowIcon} from "@/assets/leftArrowIcon.svg";
import {Link} from "react-router-dom";

interface NavigationLineProps extends navigationLineOptions {
    className?: string;
}

export const NavigationLine = (props: NavigationLineProps) => {
    const { className, previousPaths, currentPath } = props;

    const previousPath = previousPathByPathTitle[previousPaths[previousPaths.length - 1]]

    return (
        <div className={classNames(cls.NavigationLine, {}, [className])}>
            <div className={cls.PathLine}>
                {previousPaths.map((lastPath, index) => (
                    <p key={index} className={cls.NavigationLinePathBefore}> {lastPath} /</p>
                ))}
                <p className={cls.NavigationLinePathAfter}>{currentPath}</p>
            </div>

            <div className={cls.ContentLine}>
                <Link className={cls.NavigationLineLink} to={previousPath}><LeftArrowIcon/></Link>
                <p className={cls.NavigationLineCurrentPath}>{currentPath}</p>
            </div>
        </div>
    )
};

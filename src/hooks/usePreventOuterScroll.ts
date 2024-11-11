import React, {useEffect} from "react";

export const usePreventOuterScroll = (catalogRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const preventScroll = (e: WheelEvent) => {
            if (catalogRef.current && catalogRef.current.contains(e.target as Node)) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", preventScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", preventScroll);
        };
    }, [catalogRef]);
};
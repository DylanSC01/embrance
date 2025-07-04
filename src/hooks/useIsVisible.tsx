

import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseIsVisibleReturn<T extends HTMLElement> {
    ref: RefObject<T | null>;
    isVisible: boolean;
}

export const useIsVisible = <T extends HTMLElement>(options: IntersectionObserverInit): UseIsVisibleReturn<T> => {
  
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        if(!ref.current || isVisible) return;
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, options);

        observer.observe(ref.current);

        return () => observer.disconnect();

    }, [isVisible])
  
    return { ref, isVisible }
}

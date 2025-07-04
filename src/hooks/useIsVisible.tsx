

import { useEffect, useRef, useState } from 'react'



export const useIsVisible = (options: IntersectionObserverInit) => {
  
    const ref = useRef<HTMLDivElement>(null);
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

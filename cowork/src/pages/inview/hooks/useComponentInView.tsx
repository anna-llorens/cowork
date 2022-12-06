import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";


export const useComponentInView = () => {
    const [isRefInView, setIsRefInView] = useState(false);
    const { ref, inView } = useInView();
  
    useEffect(() => {
        setIsRefInView(!inView);
    }, [inView, isRefInView]);
    return {inView, ref}
}
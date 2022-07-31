import { useEffect, useRef } from "react";

export const useObserver = (ref, isLoading, pagesTotal, page, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    let observerCallback = function (entries) {
      if (entries[0].isIntersecting && page < pagesTotal) callback();
    };

    observer.current = new IntersectionObserver(observerCallback);
    observer.current.observe(ref.current);
  }, [isLoading]);
};

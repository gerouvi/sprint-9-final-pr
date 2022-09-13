import { useEffect, useRef } from 'react';

const useObserver = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('entries');
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      {
        threshold: 1.0,
      }
    );
    const copyRef = { ...ref };

    if (copyRef.current) observer.observe(copyRef.current);
  }, [callback]);

  return ref;
};

export default useObserver;

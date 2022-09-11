// import { useEffect, useRef } from 'react';

// const useObserver = (callback) => {
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         callback();
//       }
//     });
//     const copyRef = { ...ref };
//     observer.observe(copyRef.current);
//     return () => {
//       observer.unobserve(copyRef.current);
//     };
//   }, [callback]);
//   return ref;
// };

// export default useObserver;

import { useEffect, useRef } from 'react';

const useObserver = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1.0 }
    );
    const copyRef = { ...ref };
    if (copyRef.current) observer.observe(copyRef.current);
    return () => {
      if (copyRef.current) observer.unobserve(copyRef.current);
    };
  }, [callback]);

  return ref;
};

export default useObserver;

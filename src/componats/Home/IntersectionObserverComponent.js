import React, { useRef, useEffect, useState } from 'react';

const IntersectionObserverComponent = () => {
  const [num, setNum] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is intersecting');
          // Example: Update state when element is intersecting
          setNum(prevNum => prevNum + 1);
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div style={{ height: '200vh' }}>
      <div ref={targetRef} style={{ marginTop: '170vh' }}>{num}</div>
    </div>
  );
};

export default IntersectionObserverComponent;

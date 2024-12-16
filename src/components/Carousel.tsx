import React, { useState, useEffect, ReactElement, useCallback } from 'react';

interface CarouselProps {
  children: ReactElement<{ goToSlide: (index: number) => void }>[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0 && currentIndex < totalItems - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    },
    [currentIndex, totalItems]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => handleScroll(e);
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleScroll]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        className="h-full transition-transform duration-700"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="h-screen w-full">
            {React.cloneElement(child, { goToSlide })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

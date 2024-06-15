import { useState, useEffect } from "react";

const useScrollPosition = (threshold = 20) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [threshold]);

  return hasScrolled;
};

export default useScrollPosition;

import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !isFetching
      ) {
        setIsFetching(true);
        callback()
      }

      // JUST FOR TEST. ignore this code. START
      if (window.scrollTop === -500 && !isFetching) {
        setIsFetching(true);
      }
      // END
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;

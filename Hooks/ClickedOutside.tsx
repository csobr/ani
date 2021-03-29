import React, {useEffect} from 'react';

export default function useComponentVisible(ref, handler) {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) return;
    handler(event);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);
    return () => window.removeEventListener('click', handleClickOutside, true);
  }, [ref, handler]);
}

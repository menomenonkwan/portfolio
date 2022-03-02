import { useEffect, useState } from 'react';

// styles
import './Progress.css';

export default function Progress() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    setDocHeight(Math.max(
      document.body.scrollHeight, 
      document.documentElement.scrollHeight, 
      document.body.offsetHeight,  
      document.documentElement.offsetHeight, 
      document.body.clientHeight,  
      document.documentElement.clientHeight
    ));
  }, []);

  useEffect(() => {
    const calculatePosition = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const totalDocScrollLength = docHeight - windowHeight;
      const currentPosition = Math.floor(scrollTop / totalDocScrollLength * 100);

      setScrollPosition(currentPosition);
    }
    window.addEventListener('scroll', calculatePosition);

    return () => window.removeEventListener('scroll', calculatePosition);
  }, [docHeight]);

  return (
    <div className='progress-bar' >
      <div 
        className="progress"
        style={{ 
          width: `${scrollPosition}%`,
        }}
      ></div>
    </div>
  )
}

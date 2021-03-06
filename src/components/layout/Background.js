import { useState } from 'react';
import background from '../assets/images/background_image.jpg';

const Background = () => {
  const [loading, setLoading] = useState(true);

  function handleVideoLoaded() {
    setLoading(false);
    };

  return ( 
    <img
      onLoad={() => {
        handleVideoLoaded();
      }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        left: "0",
        top: "0",
        opacity: loading ? 0 : 1,
        transition: "opacity, 1.5s ease-in-out",
      }}
      src={background}
      alt=""
    />
   );
}
 
export default Background;
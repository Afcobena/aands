// DEPENDENCIES
import Image from "next/image";
import { useEffect, useState } from "react";

// RENDER
export default function FeatureLargeCard(props) {
  const { img1, img2, img3, legend, text } = props;
  const [showSecondImage, setShowSecondImage] = useState(true)
  const [showThirdImage, setShowThirdImage] = useState(true);

  // 800px
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setShowSecondImage(false);
      } else {
        setShowSecondImage(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1200px
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1200) {
        setShowThirdImage(false);
      } else {
        setShowThirdImage(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='card--large'>
      <div className="card--large__text">
        <h3>{legend}</h3>
        <p>{text}</p>
      </div>

      <div className="card--large__products">
        <Image
          className="card--large__image1"
          src={img1}
          alt="image1 picture"
         />
        {showSecondImage && (
          <Image
            className="card--large__image2"
            src={img2}
            alt="image1 picture"
          />
         )}
        {showThirdImage && (
          <Image
            className="card--large__image3"
            src={img3}
            alt="image1 picture"
          />
         )}
      </div>
    </div>
  )
}
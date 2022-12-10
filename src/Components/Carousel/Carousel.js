import style from "./Carousel.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
// import { useEffect } from "react";

import i1 from "../../../src/images/10.jpg";
import i2 from "../../../src/images/9.jpg";
import i3 from "../../../src/images/8.jpg";
import i4 from "../../../src/images/7.jpg";
import i5 from "../../../src/images/6.jpg";

const titles = ["This is Alena", "Donate Us Please", "This is Mariona", "Hello everyone help us", "We wanna live"];

const Carousel = () => {
  const [allImages, setAllImages] = useState([i1, i2, i3, i4, i5]);
  const length = allImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  // =============All Titles ===========================
  const [allTitle, setAllTitle] = useState(titles);
  const titleLength = allTitle.length;
  const [titleIndex, setTitleIndex] = useState(0);

  // =============Next Button===========================
  const Next = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    setTitleIndex(titleIndex === titleLength - 1 ? 0 : titleIndex + 1);
  };

  // ===============Previous Button=========================
  const Prev = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    setTitleIndex(titleIndex === 0 ? titleLength - 1 : titleIndex - 1);
  };

  // ==================Index============================
  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // ==============Set Interval==========================
  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentIndex((currentIndex) => (currentIndex === length - 1 ? 0 : currentIndex + 1));
  //   }, 2000);
  // }, []);
  return (
    <div>
      <div className={style.carousel}>
        <h1>Carousel with HTML, CSS, & React.js</h1>
        <div className={style.imageDiv}>
          <div>
            <img className={style.image} src={allImages[currentIndex]} alt="avatar" />
            <div className={style.titleDiv}>
              <h1 className={style.title}>{allTitle[titleIndex]}</h1>
            </div>
          </div>

          <div className={style.iconDiv}>
            <i>
              <BiChevronLeft className={style.icon} onClick={Prev} />
            </i>
            <i>
              <BiChevronRight className={style.icon} onClick={Next} />
            </i>
          </div>
          <div className={style.dotDiv}>
            {allImages.map((image, imageIndex) => (
              <div key={imageIndex} className={currentIndex === imageIndex ? style.block : style.dot} onClick={() => goToIndex(imageIndex)}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

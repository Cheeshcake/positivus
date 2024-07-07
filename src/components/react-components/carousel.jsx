import { useState } from "react";
import { testimonials } from "../../js/data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="flex flex-col items-center justify-center relative w-11/12 md:w-3/4 my-10 py-10 bg-dark overflow-hidden text-white m-auto rounded-3xl">
      <div className="flex overflow-hidden w-full">
        <div
          className="flex transform duration-500 ease w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              className={`p-5 w-full  ${
                index === currentIndex ? "active" : ""
              }`}
              key={index}
              style={{
                flex: "0 0 100%",
              }}
            >
              <div className="w-full md:w-3/5 m-auto">
                <p className="border text-center border-green rounded-3xl p-3 md:p-8 w-full">
                  {testimonial.text}
                </p>
                <div className="p-10">
                  <h4 className="text-green">{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-3/4 md:w-1/2 m-auto mt-4">
        <button
          className="rotate-180 bg-none border-none cursor-pointer text-4xl"
          onClick={goToPrevious}
        >
          {"➔"}
        </button>
        <div className="flex justify-center mt-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`indicator text-xl cursor-pointer my-1 ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              ✦
            </span>
          ))}
        </div>
        <button
          className="bg-none border-none cursor-pointer text-4xl"
          onClick={goToNext}
        >
          {"➔"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;

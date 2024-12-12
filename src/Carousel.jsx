import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    {
      image: 'register.png',
      description: 'Functional design of Sign Up and Login page using React.',
    },
    {
      image: 'todo.png',
      description: 'A functional todo task lister that has option for add, remove and Up/Down to prioritize the tasks.',
    },
    {
      image: 'clock.png',
      description: 'A digital clock that shows real time and also has features of stopwatch.',
    },
    {
      image: 'closet.png',
      description: 'A simple design of website landing page.',
    },
    {
      image: 'maskdetect.webp',
      description: 'Output of our group project in ML that detects facemask.',
    },
    {
      image: 'digitalmarketing.png',
      description: 'A certificate of online instagram marketing.',
    },
   
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-8">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full flex-none px-4 py-8 text-center"
            >
              <img
                src={skill.image}
                alt={skill.description}
                className="w-max h-64 mx-auto mb-4"
              />
              <p className="text-lg">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

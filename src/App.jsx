// import React from 'react';

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">

      {/* Header Section */}
      <header className="bg-gray-800 text-white py-16 text-center">
        <h1 className="text-5xl md:font-bold mb-2">Kushal Khanal</h1>
        <p>CSIT Student</p>
      </header>

      {/* Navigation Menu */}
      <nav className="flex justify-center bg-gray-700 py-4">
        <a href="#about-me" className="text-white px-6 py-2 hover:bg-gray-600 uppercase">About Me</a>
        <a href="#skills" className="text-white px-6 py-2 hover:bg-gray-600 uppercase">Skills & Achievements</a>
        <a href="#contact" className="text-white px-6 py-2 hover:bg-gray-600 uppercase">Contact</a>
      </nav>

      {/* About Me Section */}
      <section id="about-me" className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-4">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Hello! I&apos;m Kushal Khanal. I would like to describe myself as a learner who is always keen to learn new skills. I am currently pursuing Bachelor of Science in Computer Science and Information Technology (BSc.CSIT) at Tribhuvan University. I am passionate about Web Application Development, Machine Learning, Cloud Computing and creating impactful digital solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">Skills & Acheivements</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg w-80">
              <p className="text-lg">Familiar with C, C++, Python, HTML, CSS, Javascript, Tailwind and React.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg w-80">
              <p className="text-lg">Experience with Machine Learning and Image Classification.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg w-80">
              <p className="text-lg">Developed group project in Real Time Face Mask Detection System.</p>
            </div>
          </div>
          <div className="flex mx-20">
          <img
                src="cprogram.svg"
                alt="C-program"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              <img
                src="cplusplus.svg"
                alt="C++"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              <img
                src="python.svg"
                alt="Python"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              <img
                src="html.svg"
                alt="HTML"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              <img
                src="css.svg"
                alt="CSS"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              <img
                src="javascript.svg"
                alt="Javascript"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              <img
                src="tailwindcss.svg"
                alt="TailwindCSS"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              <img
                src="react.svg"
                alt="React"
                className="w-12 h-12 rounded-full mx-auto mb-4 mt-5"
              />
              </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">Contact Information</h2>
          <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg w-80">
              <h3 className="text-2xl mb-2">Facebook</h3>
              <p>
                <a href="https://www.facebook.com/khanalkushal72" target="_blank" className="text-blue-600">Facebook Profile</a>
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg w-80">
              <h3 className="text-2xl mb-2">Email</h3>
              <p>
                <a href="mailto:khanalkushal72@gmail.com" className="text-blue-600">khanalkushal72@gmail.com</a>
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg w-80">
              <h3 className="text-2xl mb-2">LinkedIn</h3>
              <p>
                <a href="https://www.linkedin.com/in/kushal-khanal-785868282/" target="_blank" className="text-blue-600">LinkedIn Profile</a>
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg w-80">
              <h3 className="text-2xl mb-2">GitHub</h3>
              <p>
                <a href="https://github.com/Kushal-Khanal" target="_blank" className="text-blue-600">github.com/kushal-khanal</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 Kushal Khanal. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { saturn } from "../assets";
import { ComputersCanvas, StarsCanvas } from "./canvas";

const useTypewriter = (texts, speed = 150, delay = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const fullText = texts[loopNum % texts.length];
      const updatedText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        typingTimeout = setTimeout(() => setIsDeleting(true), delay);
        setTypingSpeed(delay);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(speed);
      } else if (isDeleting) {
        setTypingSpeed(speed / 2);
      }

      typingTimeout = setTimeout(handleTyping, typingSpeed);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, loopNum, texts, speed, delay]);

  return displayedText;
};

const Hero = () => {
  const text = useTypewriter(
    ['Full-Stack Developer', 'Machine Learning Enthusiast'],
    150,
    2000
  );

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Viswaraje</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span>{text}</span>
          </p>

          {/* Centered, larger resume button */}
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <a
              href="https://drive.google.com/file/d/1qDG1UbXwHwHa6dxpU94nysfbh0H7MoKs/view?usp=sharing" // Replace this with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 bg-[#915EFF] text-white py-4 px-8 rounded text-2xl hover:bg-[#7d4fd4] transition"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>

      {/* Floating Saturn Image */}
      <img src={saturn} alt="Saturn" className="saturn" />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      <style jsx>{`
        .saturn {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          width: 80%;
          max-width: 400px; /* Maximum size */
          height: auto;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-90%) translateX(10px);
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .saturn {
            max-width: 400px; /* Adjust the size for medium screens */
          }
        }

        @media (max-width: 992px) {
          .saturn {
            max-width: 300px; /* Adjust the size for smaller screens */
          }
        }

        @media (max-width: 768px) {
          .saturn {
            max-width: 200px; /* Adjust the size for mobile screens */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

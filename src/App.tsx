import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import meImage from "./assets/images/me.png";
import "./Biodata.css";

const TypingText = ({ text }: { text: string }) => {
  const chars = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
      }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

function App() {
  const name: string = "Rifky Abdul Hanan";
  const job: string = "Development Manager";
  const currentClass: string = "TIF PK 23 CID";
  const taskDescription: string =
    "Tugas Pembuatan Biodata dari mata kuliah Pemrograman Web 2 menggunakan React dan Vite: Menampilkan biodata diri, zodiak berdasarkan tanggal lahir, dan daftar film favorit.";
  const birthDate: Date = new Date(2001, 4, 30);

  const birthDateString = birthDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [zodiacResult, setZodiacResult] = useState<string | null>(null);

  const favoriteMovies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 4,
      title: "Avatar",
      year: 2009,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    },
    {
      id: 5,
      title: "The Matrix",
      year: 1999,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      id: 6,
      title: "The Lord of the Rings",
      year: 2001,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      id: 7,
      title: "The Transporter",
      year: 2002,
      imageUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_face/dncJ81z1BahrT3ogLvlxOUC5n4u.jpg",
    },
    {
      id: 8,
      title: "Fast Five",
      year: 2011,
      imageUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_face/vDztZS30sheoqnJnKyO4QMnf3f8.jpg",
    },
    {
      id: 9,
      title: "The Mechanic",
      year: 2011,
      imageUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_face/i8IcT4oBKL793qyo91P1RnhroiQ.jpg",
    },
    {
      id: 10,
      title: "Furious 7",
      year: 2015,
      imageUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_face/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    },
    {
      id: 11,
      title: "Fast & Furious Presents: Hobbs & Shaw",
      year: 2019,
      imageUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_face/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
    },
    {
      id: 12,
      title: "The Meg",
      year: 2018,
      imageUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_face/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg",
    },
  ];

  const checkZodiac = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let zodiac: string;
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
      zodiac = "Aquarius ♒";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
      zodiac = "Pisces ♓";
    else if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
      zodiac = "Aries ♈";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
      zodiac = "Taurus ♉";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
      zodiac = "Gemini ♊";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
      zodiac = "Cancer ♋";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
      zodiac = "Leo ♌";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
      zodiac = "Virgo ♍";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
      zodiac = "Libra ♎";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
      zodiac = "Scorpio ♏";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
      zodiac = "Sagittarius ♐";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
      zodiac = "Capricorn ♑";
    else zodiac = "Tidak diketahui";

    setZodiacResult(
      `Karena tanggal lahirnya ${birthDateString}\nZodiak-ku adalah ${zodiac}`,
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="app-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="layout-wrapper">
        <motion.div className="left-column" variants={itemVariants}>
          <img
            src={meImage}
            alt="Me"
            draggable={false}
            className="hero-image"
          />
        </motion.div>

        <div className="right-column">
          <motion.div variants={itemVariants}>
            <motion.div
              className="bubble-biodata"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <h1>
                <TypingText text={`Halo, Saya ${name}`} />
              </h1>

              <div className="info-grid">
                <div className="info-label">
                  <TypingText text="Pekerjaan" />
                </div>
                <div className="info-colon">
                  <TypingText text=":" />
                </div>
                <div className="info-value">
                  <TypingText text={job} />
                </div>

                <div className="info-label">
                  <TypingText text="Tanggal Lahir" />
                </div>
                <div className="info-colon">
                  <TypingText text=":" />
                </div>
                <div className="info-value">
                  <TypingText text={birthDateString} />
                </div>

                <div className="info-label">
                  <TypingText text="Kelas" />
                </div>
                <div className="info-colon">
                  <TypingText text=":" />
                </div>
                <div className="info-value">
                  <TypingText text={currentClass} />
                </div>
              </div>

              <div className="task-description">
                <TypingText text={taskDescription} />
              </div>

              <button
                className="zodiac-btn"
                onClick={() => checkZodiac(birthDate)}
              >
                Cek Zodiak Saya
              </button>
            </motion.div>
          </motion.div>

          <motion.div className="movies-section" variants={itemVariants}>
            <h2>Film Favorit Saya</h2>
            <motion.div className="movies-grid" variants={containerVariants}>
              {favoriteMovies.map((movie) => (
                <motion.div
                  className="movie-card"
                  key={movie.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="movie-year">{movie.year}</div>
                  <img
                    src={movie.imageUrl}
                    draggable={false}
                    alt={movie.title}
                  />
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="social-links">
            <a
              href="https://instagram.com/kyy.ix"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="mailto:rifky@meis.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a
              href="https://github.com/bit-specter"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/rifkyabdulhanan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {zodiacResult && (
          <motion.div
            className="custom-alert-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="custom-alert-box"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3>Zodiak Saya</h3>
              <p>{zodiacResult}</p>
              <button onClick={() => setZodiacResult(null)}>Tutup</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;

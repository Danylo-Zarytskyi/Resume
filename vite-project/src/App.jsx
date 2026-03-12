import { useState } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import "./App.css";

function App() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0710] via-[#1a0f24] to-[#0e0b15] fixed inset-0 overflow-y-auto">
      {/* Фонові декорації */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Головне фіолетове коло */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Додаткові кола */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-800/10 rounded-full blur-3xl"></div>

        {/* Сітка */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.05) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Динамічні лінії */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(139, 92, 246, 0.2)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Великі геометричні фігури */}
        <div className="absolute -top-40 -right-40 w-96 h-96 border border-purple-500/10 rotate-45"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 border border-purple-500/10 rotate-12"></div>

        {/* Трикутники */}
        <svg
          className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,100 100,100 50,0"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
          />
        </svg>

        <svg
          className="absolute top-0 right-0 w-72 h-72 opacity-10 rotate-180"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,100 100,100 50,0"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
          />
        </svg>

        {/* Падаючі зірки/точки */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Головний контейнер на всю висоту */}
      <div className="relative min-h-screen w-full flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-[#0f071a]/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-2xl p-10 hover:border-purple-500/30 transition-all duration-700">
            {/* Інтерактивний заголовок з ефектом */}
            <div
              className="relative group cursor-default mb-8"
              onMouseEnter={() => setHoveredSection("header")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-6xl md:text-7xl font-light tracking-tight bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                  Данило Заріцький
                </h1>
                <div className="w-20 h-20 border-2 border-purple-500/30 rounded-full flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-all"></div>
                </div>
              </div>
              <div className="absolute -inset-2 bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-all duration-500 -z-10"></div>
            </div>

            {/* Контактна інформація з іконками - тепер інтерактивна */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 border-y border-purple-500/20 py-6 mb-8">
              {/* Локація - відкриває Google Maps */}
              <a
                href="https://maps.google.com/?q=Стрий, Львівська область, Україна"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-300 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">Стрий, Українa</span>
              </a>

              {/* Телефон - відкриває додаток для дзвінків */}
              <a
                href="tel:+380666526164"
                className="flex items-center gap-3 hover:text-purple-300 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">+380666526164</span>
              </a>

              {/* Email - відкриває поштовий клієнт */}
              <a
                href="mailto:z1keldanulo281@gmail.com?subject=Зв'язок з портфоліо"
                className="flex items-center gap-3 hover:text-purple-300 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">z1keldanulo281@gmail.com</span>
              </a>
            </div>

            {/* Сітка для контенту */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ліва колонка */}
              <div className="space-y-8">
                <Section
                  title="Про мене"
                  isEmpty={true}
                  isHovered={hoveredSection === "about"}
                  onHover={() => setHoveredSection("about")}
                  onLeave={() => setHoveredSection(null)}
                >
                  <span className="text-sm line-clamp-3">
                    Молодий Full-Stack розробник з фокусом на створенні сучасних
                    веб-додатків. Працюю з JavaScript, React та Node.js, створюю
                    як клієнтську частину інтерфейсів, так і серверну логіку.
                    Цікавлюсь архітектурою веб-додатків, UI/UX та оптимізацією
                    продуктивності.
                  </span>
                </Section>

                <Section
                  title="Навички"
                  isEmpty={true}
                  isHovered={hoveredSection === "skills"}
                  onHover={() => setHoveredSection("skills")}
                  onLeave={() => setHoveredSection(null)}
                >
                  <span className="text-sm line-clamp-4">
                    JavaScript, React, Node.js, HTML, CSS, TailwindCSS, Git. Маю
                    досвід створення повноцінних веб-додатків: розробки
                    інтерфейсів, роботи з компонентною архітектурою React,
                    створення серверної логіки на Node.js та інтеграції REST
                    API.
                  </span>
                </Section>

                <Section
                  title="Мови"
                  isHovered={hoveredSection === "languages"}
                  onHover={() => setHoveredSection("languages")}
                  onLeave={() => setHoveredSection(null)}
                >
                  <div className="space-y-4">
                    <LanguageItem
                      language="Українська"
                      level="Рідна"
                      progress={100}
                    />
                    <LanguageItem
                      language="Англійська"
                      level="B1"
                      progress={50}
                    />
                  </div>
                </Section>
              </div>

              {/* Права колонка */}
              <div className="space-y-8">
                <Section
                  title="Досвід роботи"
                  isEmpty={true}
                  isHovered={hoveredSection === "experience"}
                  onHover={() => setHoveredSection("experience")}
                  onLeave={() => setHoveredSection(null)}
                >
                  <span className="text-sm line-clamp-4">
                    Навчався веб-розробці у ProCode IT School, де отримав
                    практичний досвід створення веб-додатків. Реалізував кілька
                    особистих проєктів з використанням React та Node.js. Під час
                    роботи над проєктами розвинув навички роботи з Git,
                    структурування коду та побудови сучасних веб-інтерфейсів.
                  </span>
                </Section>

                {/* Додаткова інформація */}
                <Section
                  title="Інтереси"
                  isHovered={hoveredSection === "interests"}
                  onHover={() => setHoveredSection("interests")}
                  onLeave={() => setHoveredSection(null)}
                >
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full-Stack Development",
                      "Web Technologies",
                      "UI/UX Design",
                    ].map((interest, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all cursor-default"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </Section>
              </div>
            </div>

            {/* Footer з кнопками */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-purple-500/20">
              <div className="flex gap-3">
                <a
                  href="https://github.com/Danylo-Zarytskyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-all group"
                >
                  <Github className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Компонент секції
function Section({ title, children, isEmpty, isHovered, onHover, onLeave }) {
  return (
    <div
      className={`relative transition-all duration-500 ${
        isHovered ? "transform scale-[1.02] translate-y-[-2px]" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-sm uppercase tracking-wider text-purple-300/70 font-light">
          {title}
        </h2>
        <div
          className={`h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-50"
          }`}
        ></div>
        {isHovered && (
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
        )}
      </div>
      <div
        className={`transition-all duration-300 ${
          isHovered ? "text-purple-200" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

// Компонент мови
function LanguageItem({ language, level, progress }) {
  return (
    <div className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
      <span className="w-24 text-purple-200 group-hover:text-purple-300 transition-colors text-sm">
        {language}
      </span>
      <span className="text-purple-300/70 text-xs w-16">{level}</span>
      <div className="flex-1 h-2 bg-purple-900/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-700 group-hover:from-purple-300 group-hover:to-purple-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;

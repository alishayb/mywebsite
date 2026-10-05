import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Card from "./card/Card";
import Toast from "./modal/Toast";
import arrowRightIcon from "/icons/arrow-turn-right-white.svg";
import mailIcon from "/icons/envelope-regular-full.svg";
import linkedinLogo from "/linkedin-logo-white.png";
import myHomeKoreaPreview1 from "/Myhomekorea_preview_1.png";
import myHomeKoreaPreview2 from "/Myhomekorea_preview_2.png";
import recipiePreview1 from "/recipie preview 1.png";
import recipiePreview2 from "/recipie preview 2.png";
import recipiePreview3 from "/recipie preview 3.png";
import recipiePreview4 from "/recipie preview 4.png";
import smartThingsLogo from "/smartthings-logo.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

function App() {
  const [copyNotification, setCopyNotification] = useState(false);
  return (
    <main>
      <div className="navhome">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h6>ALISHA / Frontend</h6>
          <ul>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </motion.nav>
        <motion.section
          id="home"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="accent">Frontend developer · Jakarta, Indonesia</p>
          <h1>
            Crafting refined <br /> interfaces for the web.
          </h1>
          <p>
            I&apos;m <span className="name">Alisha</span> , a frontend developer
            who focused on building adaptive and functional <br /> digital
            product tailored to achieve business objectives.
          </p>
          <div className="buttons">
            <a href="#work">See selected work</a>
            <a
              className="secondary"
              href="https://www.linkedin.com/in/alisha-yumna-bakri/"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <img src={linkedinLogo} alt="Linkedin" width={20} />{" "}
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.section>
      </div>
      <motion.section
        id="work"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <p className="accent">Selected Work</p>
        <h2>A few things I've helped bring to life</h2>
        <motion.div
          className="cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {[
            <Card
              title="Samsung SmartThings"
              description="Internal B2B Platform and Content Management System"
              role="Web Application Developer"
              year={[2024, 2026]}
              img={{
                displaySrc: smartThingsLogo,
                displayAlt: "Samsung SmartThings",
                style: { maxWidth: "80%" },
              }}
              detail={{
                skills: ["React", "Next.js", "NodeJS", "SQL"],
                description: `I built Samsung SmartThings internal B2B enterprise portal and supported the development of SmartThings' CMS web application.

SmartThings is Samsung's IoT platform, used by millions to connect and control smart home devices`,
                points: [
                  "Built the interface for the SmartThings B2B portal using React and Next.js to manage enterprise accounts from member, locations, service accounts, and device capabilities configuration.",
                  "Integrated OAuth authentication and custom RBAC policies to enforce multi-tier access control across the portal.",
                  "Resolved various bugs in the CMS and developed a dynamic form that can render input fields based on complex device capability structures.",
                  "Implemented unit and automation test suites, establishing the project's testing foundation.",
                ],
              }}
              workType="Fulltime"
            />,
            <Card
              title="Recipie"
              description="AI-powered app for homecook to help them answers cooking and recipes questions"
              role="Full-Stack Developer"
              year={[2026]}
              img={{
                displaySrc: recipiePreview1,
                displayAlt: "Recipie",
                additionals: [
                  recipiePreview1,
                  recipiePreview2,
                  recipiePreview3,
                  recipiePreview4,
                ],
              }}
              detail={{
                skills: ["React", "Vite", "Figma", "Framer Motion", "AI Integration", "AI Chatbot"],
                description: `I built a personal recipe assistant powered by AI.

The app allows users to upload recipes from photos and PDFs and ask cooking-related questions, with answers generated from their own saved recipe collection.`,
                points: [
                  "Built the interface using React and improved the UX with Framer Motion animations.",
                  "Integrated Firebase Authentication for a seamless sign-in experience.",
                  "Developed a multi-step review interface that allows users to edit and refine AI-extracted recipe data.",
                ],
                link: "https://recipie.dpdns.org",
              }}
              workType="Case Study"
            />,
            <Card
              title="My Home Korea"
              description="Platform for foreigners searching to rent and buy properties in South Korea."
              role="Frontend Developer"
              year={[2024]}
              img={{
                displaySrc: myHomeKoreaPreview1,
                displayAlt: "My Home Korea",
                additionals: [myHomeKoreaPreview1, myHomeKoreaPreview2],
              }}
              detail={{
                link: "http://myhomekorea.com/",
                skills: ["React", "Next.js", "REST API"],
                description: `From the client's existing UI design, I translated their UI into a real-estate platform listing hundreds of properties across South Korea.`,
                points: [
                  "Build a property listing and detail interfaces handling hundreds of listings with filtering and search.",
                  "Integrated Google Maps API to let users browse properties spatially.",
                  "Developed admin dashboard for listing management: create, update, and remove properties through a streamlined interface.",
                  "Add multi-currency support with dynamic conversion across listing prices.",
                  "Add internationalization support covering more than 10 languages.",
                ],
              }}
              workType="Contract"
            />,
          ].map((card, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              {card}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <p className="accent">WHAT I BRING</p>
        <h2>
          Technical Skills for polished, <br />
          production-ready web applications
        </h2>
        <p>
          I&apos;m comfortable taking a UI design from Figma, Sketch,
          screenshots, or slide decks <br />
          and turning it into an adaptive and purposeful interface.
        </p>
        <ul>
          <li>Frameworks — React, Next.js, Node.js, Vite</li>
          <li>
            Fundamentals — JavaScript (ES6+), TypeScript, HTML, CSS
          </li>
          <li>Styling — Tailwind CSS, Ant Design, SCSS</li>
          <li>AI Tools — Claude, Copilot, Gemini</li>
          <li>Design — Figma & Sketch</li>
          <li>Deployment & Version Control — Vercel, GitHub Pages, Git</li>
        </ul>
      </motion.section>
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <p className="accent">Let&apos;s work together</p>
        <h2>Have a successful digital project in mind?</h2>
        <div className="contacts">
          <a
            className="secondary"
            href="https://www.linkedin.com/in/alisha-yumna-bakri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="Linkedin" width={20} />{" "}
            <span>Check out my complete work history on LinkedIn</span>
            <span>
              <img src={arrowRightIcon} alt="Mail to" width={24} />
            </span>
          </a>
          <a
            className="secondary"
            role="button"
            onClick={() => {
              navigator.clipboard.writeText("alishayumnab@gmail.com");
              setCopyNotification(true);
            }}
          >
            <img src={mailIcon} alt="Email" width={20} />{" "}
            <span>Email me: alishayumnab@gmail.com</span>
            <span>
              <img src={arrowRightIcon} alt="Mail to" width={24} />
            </span>
          </a>
        </div>
      </motion.section>

      <Toast
        open={copyNotification}
        onClose={() => setCopyNotification(false)}
        content="Copied to clipboard"
      />

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <p>© 2026 Alisha Yumna</p>
      </motion.footer>
    </main>
  );
}

export default App;

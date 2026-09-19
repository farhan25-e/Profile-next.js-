"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Stitch House",
    description: "An e-commerce website for a made-to-measure tailoring service, featuring fabric selection, categories, and a custom order flow.",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farhan25-e/University-website",
    previewUrl: "https://stitch-house-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "University Website ",
    description:"A responsive university landing page built with HTML,CSS and javascript, showcasing courses, facilities, and campus life.",
    image: "/images/uni.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farhan25-e/Portfolio",
    previewUrl: "https://farhan25-e.github.io/University-website/",
  },
  {
    id: 3,
    title: "Recipe App",
    description: "A simple recipe-listing web page built with HTML to display cooking instructions and ingredients.",
    image: "/images/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farhan25-e/Recipe",
    previewUrl: "https://farhan25-e.github.io/Recipe/",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    description: "An interactive Tic-Tac-Toe game built with JavaScript, featuring turn-based logic and win detection.",
    image: "/images/Tick.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farhan25-e/Tic-Tac-Toe",
    previewUrl: "https://farhan25-e.github.io/Tic-Tac-Toe/",
  },
  {
    id: 5,
    title: "Rock Paper Scissors Game",
    description: "A fun Rock-Paper-Scissors game styled with CSS, letting users play against the computer.",
    image: "/images/rock.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farhan25-e/RPS-game",
    previewUrl: " https://farhan25-e.github.io/RPS-game//",
  },
  {
    id: 6,
    title: "Responsive Cards",
    description: "A collection of responsive card layouts built with HTML, demonstrating flexible and adaptive UI design.",
    image: "/images/card.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farhan25-e/responsive-cards",
    previewUrl: "https://farhan25-e.github.io/responsive-cards/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
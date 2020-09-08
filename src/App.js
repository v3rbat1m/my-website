
import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Home from "./components/Sections/home";
import AboutMe from "./components/Sections/about";
import Skills from "./components/Sections/skills";
import Experience from "./components/Sections/experience";
import Education from "./components/Sections/education";
import Contact from "./components/Sections/contact";

const items = [
  { name: "home", label: "Home", dark: false, content: Home },
  { name: "about", label: "About me", dark: true, content: AboutMe },
  { name: "skills", label: "Skills", dark: false, content: Skills },
  { name: "experience", label: "Experience", dark: true, content: Experience },
  { name: "education", label: "Education", dark: false, content: Education },
  { name: "contact", label: "Contact", dark: true, content: Contact },
];


const App = () => {
  return (
    <div className="App">
      <Navbar items={items} />
      <div className="Sections">
        {items.map((item) => (
          <Section
            title={item.label}
            dark={item.dark}
            key={item.name}
            id={item.name}
            content={<item.content />}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

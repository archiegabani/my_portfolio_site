import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Table from "./components/Table/Table";
import Card from "./components/Card/Card";
import RadioButton from "./components/RadioButton/RadioButton";
import Text from "./components/Text/Text";
import HeroImage from "./components/HeroImage/HeroImage";
import Img from "./components/Img/Img";
import Label from "./components/Label/Label";
import SampleImg from "./assets/Sample.jpg";
import Project1 from "./assets/project-1.png";
import Project2 from "./assets/project-2.png";
import NodeImg from "./assets/nodejs.png";
import ReactImg from "./assets/react.png";
import "./App.css";
import { Menu } from "antd";

function BasicInformation() {
  return (
    <section>
      <h2>Basic Information</h2>
      <Text content="Hello! I'm Archie, a Web Developer with experience in React, Java, and various backend technologies through my projects." />
    </section>
  );
}

function Work() {
  return (
    <section>
      <h2>Work</h2>
      <Table
        headers={[
          { display: "Title", key: "title" },
          { display: "Description", key: "description" },
          { display: "Link", key: "link" },
          { display: "Tech List", key: "tech" },
          { display: "Image", key: "image" },
        ]}
        data={[
          {
            title: "DogBreedsApp",
            description: "A CRM project developed by Ruby",
            link: "https://github.com/archiegabani/DogBreedsApp",
            tech: "Ruby",
            image: Project1,
          },
          {
            title: "Book-library",
            description:
              "This application is designed to help users find the books, organization create, post their new books",
            link: "https://github.com/archiegabani/Project",
            tech: "PHP, React",
            image: Project2,
          },
        ]}
      />
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        <Text content="I am skilled in modern web technologies, including React, Java, and Node.js." />
        <Label text="Languages/Frameworks" />
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
        <Label text="Tools" />
        <ul>
          <li>VS Code</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section>
      <h2>Resources</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        <Card
          title="React Documentation"
          content="Official React docs to get started."
        />
        <Card
          title="Node.js Docs"
          content="Official Node.js documentation for backend development."
        />
      </div>
      <Table
        headers={[
          { display: "Title", key: "title" },
          { display: "Image", key: "image" },
          { display: "Summary", key: "summary" },
          { display: "Link", key: "link" },
        ]}
        data={[
          {
            title: "React Docs",
            summary: "Learn React",
            link: "https://reactjs.org/",
            image: ReactImg,
          },
          {
            title: "Node.js Docs",
            summary: "Learn Node.js",
            link: "https://nodejs.org/en/docs/",
            image: NodeImg,
          },
        ]}
      />
    </section>
  );
}

function DeveloperSetup() {
  return (
    <section>
      <h2>Developer Setup</h2>
      <Text content="To get started, follow these setup steps:" />
      <Label text="VS Code Setup" />
      <Text content="Install VS Code from the official website and add essential extensions like ESLint, Prettier, and GitLens." />
      <Label text="Terminal Setup" />
      <Text content="Use the integrated terminal in VS Code with Bash or Zsh for an optimal workflow." />
    </section>
  );
}

function App() {
  const [current, setCurrent] = useState("info");

  const items = [
    { label: <Link to="/">Basic Information</Link>, key: "info" },
    { label: <Link to="/work">Work</Link>, key: "work" },
    { label: <Link to="/skills">Skills</Link>, key: "skills" },
    { label: <Link to="/resources">Resources</Link>, key: "resources" },
    {
      label: <Link to="/developer-setup">Developer Setup</Link>,
      key: "developerSetup",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Router>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Routes>
        <Route path="/" element={<BasicInformation />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/developer-setup" element={<DeveloperSetup />} />
      </Routes>
    </Router>
  );
}

export default App;

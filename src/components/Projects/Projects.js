import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import youtube from "../../Assets/Projects/youtube.png";
import portfolio from "../../Assets/Projects/Portfolio.jpg";
import movie from "../../Assets/Projects/movie.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Search Videos"
              description="It is a clone of very popular streaming platform Youtube. In this webapp a user can search whatever videos they want. I have used React Js for the Frontend and to get the videos I have used the youtube video api."
              link="https://my-fouth-app-jbppm2inp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Know Movies"
              description="This is a light clone of IMDB(online database of information related to films, television programs, home videos, video games, and streaming content online) built using react-redux using external API of 'https://developers.themoviedb.org/4/getting-started/authorization'."
              link="https://know-movies-fvjhr6uln-amit-sahani.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This is my profolio website which you are seeing right now. Here you can find about my personal and professional informmation and my educational background as well. This project is designed using Reactjs, HTML, CSS, Javascript. I have also used some javascript libraries such as particle.js to enhance the look of the page."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p> */}
        {/* <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;

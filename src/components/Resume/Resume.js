import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

 function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SYSTEM ENGINEER [ TATA CONSULTANCY SERVICES ]"
              date="January 2019 - Present"
              content={[
                " Currenty working as an Automation tester.",
                " My day to day work is to test the already written test scripts and modify it if any defect found.",
                " Tech Stack: Java, Selenium."
              ]}
            />
            <Resumecontent
              title="SOFTWARE ENGINEER [ EASTERN SOFTWARE SYSTEMS PVT. LTD. ]"
              date="March 2018 - July 2018"
              content={[
                " Project: Ebizframe, it is an ERP portal.",
                " Worked as a Java developer for the sales module of the above project.",
                " Tech Stack: Java, Oracle ADF"
              ]}
            />

            <h3 className="resume-title">Internship and Certifications</h3>
            <Resumecontent
              title="Newton school coding bootcamp"
              content={[
                " Full Stack Web Development along with Problem Solving.",
                " Technical Stack learned: React JS, HTML, CSS, JavaScript, and Bootstrap.",
                " Created various projects like youtube clone, basic minesweeper, etc",
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BACHELOR OF TECHNOLOGY IN ELECTRONICS AND COMMUNICATION [KIET, GHAZIABAD] "
              date="2013 - 2017"
              content={['Precentage: 60.4%']}
            />
            <Resumecontent
              title="12TH BOARD [ FATIMA SENIOR SECONDARY SCHOOL, GONDA(U.P.) ]"
              date="2011 - 2012"
              content={["Precentage: 72.4%"]}
            />
            <Resumecontent
              title="10TH BOARD [ RAGHUKUL VIDYA PEETH, GONDA ] "
              date="2009 - 2010"
              content={["CGPA: 7.6"]}
            />
            <h3 className="resume-title">Co-curricular Activities</h3>
            <Resumecontent
              content={[
                " Participated in ABU ROBOCON 2015.",
                " Student Co-ordinator in INNOTECK 2K15 at KIET Ghaziabad organized on 5th - 6th November 2015.",
                " Participated in SOLO SINGING ANNUAL CULTURAL FEST at KIET Ghaziabad, 2015"
              ]}
            />
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Resume;

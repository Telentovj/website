import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const Skills = () => {
  return (
    <Container>
      <Title title="Skills" />
      <Col>
        <Fade left duration={1000} delay={600} distance="30px">
          <div className="project-wrapper__image">
            <AboutImg alt="profile picture" filename="skills.png" />
          </div>
        </Fade>
      </Col>
      <Title title="" />
    </Container>
  );
};

export default Skills;

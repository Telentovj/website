import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Fade from 'react-reveal/Fade';
import { Container, Col } from 'react-bootstrap';
import { BsBriefcase } from 'react-icons/bs';
import Title from '../Title/Title';
import './line.css';
import AboutImg from '../Image/AboutImg';

const buffer = 'rgb(211, 223, 242)';

const Work = () => {
  return (
    <Container>
      <Title title="Work Experience" />
      <Col>
        <Fade bottom duration={1000} delay={600} distance="30px">
          <VerticalTimeline className="vertical-timeline-custom-line">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: buffer, color: '#000000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(211, 223, 242)' }}
              date="Dec 2020 - present"
              iconStyle={{ background: buffer, color: '#000000' }}
              icon={<BsBriefcase />}
            >
              <AboutImg alt="profile picture" filename="avatar.png" />
              <h3 className="vertical-timeline-element-title">
                Machine Learning and Data Analyst Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
              <p>
                <h6>
                  Analytics done using ElasticSearch, Akamai, DataMeer and Kibena. Did front-end Web
                  Development for website using Gatsby and GraphQL. 
                </h6>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Fade>
      </Col>
      <Title title="" />
    </Container>
  );
};

export default Work;

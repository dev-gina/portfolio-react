import React from 'react';
import S from './style';  // default import 방식
import Footer from '../layout/Footer';

const Projects = () => {
  return (
    <div>
      <S.ProjectsContainer>
        {/* 첫 번째 프로젝트 */}
        <S.ProjectItem>
        <S.RightSection>
            <S.Main src="/assets/bookstore.png" alt="Online Bookstore" />
          </S.RightSection>
          <S.LeftSection>
            <S.ProjectContent>Online Bookstore</S.ProjectContent>

            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <p>Planning, Design, Development, Deployment</p>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> Next.js, TypeScript, React Hooks</li>
                <li><strong>Backend:</strong> Node.js, Express, MySQL</li>
                <li><strong>Tools:</strong> Swagger, Postman</li>
                {/* <li><strong>Deployment:</strong> Netlify, Heroku</li> */}
              </ul>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul><li>Personal project, completed in 1 week</li></ul>
            </S.ProjectDetails>

          </S.LeftSection>
        </S.ProjectItem>

        {/* 두 번째 프로젝트 */}
        <S.ProjectItem>
        <S.RightSection>
            <S.Main src="/assets/calendar.png" alt="Calendar App" />
          </S.RightSection>
          <S.LeftSection>
            <S.ProjectContent>Calendar App</S.ProjectContent>

            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <p>Planning, Design, Development</p>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, Ant Design, Context API</li>
                <li><strong>Backend:</strong> Spring Boot, MySQL, Security</li>
                <li><strong>Tools:</strong> Swagger, Postman</li>
              </ul>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul><li>Personal project, completed in 2 week</li></ul>
            </S.ProjectDetails>

          </S.LeftSection>
        </S.ProjectItem>

        {/* 세 번째 프로젝트 */}
        <S.ProjectItem>
        <S.RightSection>
            <S.Main src="/assets/powpow.png" alt="Pet Tech Service" />
          </S.RightSection>
          <S.LeftSection>
            <S.ProjectContent>POWPOW</S.ProjectContent>

            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <p>Planning, Design, Development, Deployment</p>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tech Stack</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, Context API</li>
                <li><strong>Backend:</strong> Spring Boot, JWT, MySQL</li>
                <li><strong>Tools:</strong> Swagger, Postman</li>
              </ul>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <ul><li>Team of 7 members, 3 months duration</li></ul>
            </S.ProjectDetails>

          </S.LeftSection>
        </S.ProjectItem>
      </S.ProjectsContainer>
      <Footer />
    </div>
  );
};

export default Projects;

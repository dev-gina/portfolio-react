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
            <S.Main src="your-image-url-1.jpg" alt="Online Bookstore" />
          </S.RightSection>
          <S.LeftSection>
            <S.ProjectContent>Online Bookstore</S.ProjectContent>

            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <p>Planning, Design, Development, Deployment</p>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tools</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> Next.js, TypeScript, React Hooks</li>
                <li><strong>Backend:</strong> Node.js, Express</li>
                <li><strong>Tools:</strong> Swagger, Postman, MySQL</li>
                <li><strong>Deployment:</strong> Netlify, Heroku</li>
              </ul>
            </S.ProjectDetails>
          </S.LeftSection>
        </S.ProjectItem>

        {/* 두 번째 프로젝트 */}
        <S.ProjectItem>
        <S.RightSection>
            <S.Main src="your-image-url-2.jpg" alt="Calendar App" />
          </S.RightSection>
          <S.LeftSection>
            <S.ProjectContent>Calendar App</S.ProjectContent>

            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <p>Planning, Design, Development</p>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tools</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, Ant Design, Context API</li>
                <li><strong>Backend:</strong> Spring Boot, JPA, Security</li>
                <li><strong>Tools:</strong> Swagger, Postman, MySQL</li>
              </ul>
            </S.ProjectDetails>
          </S.LeftSection>
        </S.ProjectItem>

        {/* 세 번째 프로젝트 */}
        <S.ProjectItem>
        <S.RightSection>
            <S.Main src="your-image-url-3.jpg" alt="Pet Tech Service" />
          </S.RightSection>
          <S.LeftSection>
            <S.ProjectContent>POWPOW</S.ProjectContent>

            <S.ProjectDetails>
              <S.SectionTitle>Role</S.SectionTitle>
              <p>Planning, Design, Development, Deployment</p>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Tools</S.SectionTitle>
              <ul>
                <li><strong>Frontend:</strong> React, Context API</li>
                <li><strong>Backend:</strong> Spring Boot, JWT, Spring Security</li>
                <li><strong>Tools:</strong> Swagger, Postman, MySQL</li>
              </ul>
            </S.ProjectDetails>

            <S.ProjectDetails>
              <S.SectionTitle>Duration</S.SectionTitle>
              <p>Team of 7 members, 3 months duration</p>
            </S.ProjectDetails>

          </S.LeftSection>
        </S.ProjectItem>
      </S.ProjectsContainer>
      <Footer />
    </div>
  );
};

export default Projects;

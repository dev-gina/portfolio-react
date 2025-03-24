import React from 'react'
import S from './style';
import Footer from '../layout/Footer';

const Projects = () => {
  return (
    <div>
        <S.Projects>
            <S.Project>
               <S.Main src="/assets/main.jpg" alt="main" />
            </S.Project>
        </S.Projects>
        <Footer />
    </div>
  )
}

export default Projects;

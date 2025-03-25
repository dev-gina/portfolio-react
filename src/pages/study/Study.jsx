import React, { useState } from 'react';
import Footer from '../layout/Footer';
import S from './style';

const studyItems = [
  {
    title: 'MySQL 성능 최적화',
    description: '쿼리 성능을 향상시키는 간단한 MySQL 인덱스 최적화 기법을 소개합니다.',
    link: 'https://github.com/dev-gina',
    type: 'blog'
  },
  {
    title: '백준 알고리즘 풀이',
    description: '알고리즘 문제 해결을 위한 최적화 전략을 설명합니다.',
    link: 'https://github.com/dev-gina',
    type: 'algorithm'
  },
  {
    title: 'JWT 인증 시스템 구축',
    description: 'JWT 인증 시스템을 구현하여 보안을 강화하는 방법을 공유합니다.',
    link: 'https://github.com/dev-gina',
    type: 'project'
  }
];

const Study = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredItems = filter === 'all' ? studyItems : studyItems.filter(item => item.type === filter);

  return (
    <S.Container>
      <S.Header>
        <S.FilterContainer>
          <S.FilterButton onClick={() => setFilter('all')} active={filter === 'all'}>All</S.FilterButton>
          <S.FilterButton onClick={() => setFilter('blog')} active={filter === 'blog'}>Blog</S.FilterButton>
          <S.FilterButton onClick={() => setFilter('algorithm')} active={filter === 'algorithm'}>Algorithm</S.FilterButton>
          <S.FilterButton onClick={() => setFilter('project')} active={filter === 'project'}>Project</S.FilterButton>
        </S.FilterContainer>
      </S.Header>
      <S.StudyGrid>
        {filteredItems.map((item, index) => (
          <S.StudyCard key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Read More →</a>
          </S.StudyCard>
        ))}
      </S.StudyGrid>
      <Footer />
    </S.Container>
  );
};

export default Study;
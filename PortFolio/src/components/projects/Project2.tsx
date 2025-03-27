import React from 'react';

const Project2: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">
      <div className='w-full p-4'>
        <p className='text-3xl mb-4'>GrabPic</p>
        <p className='font-pre-B mb-1'>역할 : 팀장 / Front-End Dev</p>
        <p className='font-pre-M'>Image Captioning 기반 개체 판별 + 위치 기반 지도 연동 서비스</p>
        <p className='font-pre-M'>실시간 수집 정보 시각화 및 도감화 기능 구현</p>
      </div>
      <div className="w-full p-4 py-2">
        <p className='mb-2'>프론트엔드 주요 구현 내용</p>
        <ul className='list-disc list-inside'>
          <li>카카오맵 API 연동 및 사용자 위치 기반 지도 커스터마이징 (마커, 클러스터링)</li>
          <li>좌표 기반 수집 정보 시각화를 위한 컴포넌트 분리 및 상태 관리 구조 설계</li>
          <li>지도와 연동된 리스트/도감 화면 구현 및 라우팅 최적화 (React Router)</li>
          <li>AI 판별 결과에 따른 UI 상태 변화 처리 및 사용자 피드백 인터랙션 구현</li>
          <li>반응형 웹 디자인 및 모바일 최적화 적용 (TailwindCSS)</li>
          <li>컴포넌트 재사용성을 고려한 모듈화 개발 및 성능 개선</li>
        </ul>
      </div>
    </div>
  );
};

export default Project2;
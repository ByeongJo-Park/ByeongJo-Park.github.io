import React from 'react';
import logo from '../../assets/GrabPic/GrabPicLogo.png';

const Project2: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">
      <img src={logo} alt="pjtLogo" className='p-4'/>
      <div className='w-full p-4'>
        <p className='text-3xl mb-4'>GrabPic</p>
        <p className='font-pre-B mb-1'>역할 : 팀장 / Front-End Dev</p>
        <p className='font-pre-M'>Image Captioning을 활용한 실시간 개체 분류</p>
        <p className='font-pre-M'>지도를 통한 주변 수집 정보 확인과 공유가 가능한 서비스</p>
      </div>
      <div className="w-full p-4 py-2">
        <p className='mb-2'>주요 개발사항</p>
        <ul className='list-disc list-inside'>
          <li>카카오맵 API 연동 및 커스터마이징</li>
          <li>좌표 기준 수집 위치 표시 컴포넌트 개발</li>
          <li>좌표 기준 리스트 컴포넌트 개발</li>
          <li>좌표 기준 리스트 내부 개체 선택시 상세확인 컴포넌트 개발 및 도감이동 로직 개발</li>
          <li>개체 판별 AI 데이터 셋 수집</li>
        </ul>
      </div>
    </div>
  );
};

export default Project2;
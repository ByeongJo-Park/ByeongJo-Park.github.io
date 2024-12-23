import React from 'react';
import logo from '../../assets/MEFI/MEFILogo.png';

const Project1: React.FC = () => {
  return (
    <div className="w-full h-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">
      <img src={logo} alt="pjtLogo" className='w-full h-[250px] p-4'/>
      <div className='w-full p-4'>
        <p className='text-3xl mb-4'>MEFI</p>
        <p className='font-pre-B mb-1'>역할 : PM / Front-End Dev</p>
        <p className='font-pre-M'>Web-RTC를 활용한 팀단위 화상회의</p>
        <p className='font-pre-M'>실시간 문서 동시편집 및 일정공유 서비스</p>
      </div>
      <div className="w-full p-4 py-2">
        <p className='mb-2'>주요 개발사항</p>
        <ul className='list-disc list-inside'>
          <li>달력 컴포넌트 개발 및 팀 일정 호출 API 연동</li>
          <li>팀 일정 생성/수정 컴포넌트 개발 및 팀 일정 생성/수정 API 연동</li>
          <li>일별 스케줄 컴포넌트 개발 및 일정 호출 API 연동</li>
          <li>개인 일정 생성/수정 컴포넌트 개발 및 개인 일정 생성/수정 API 연동</li>
          <li>팀 생성 컴포넌트 개발</li>
          <li>팀 수정/삭제 컴포넌트 개발</li>
        </ul>
      </div>
    </div>
  );
};

export default Project1;
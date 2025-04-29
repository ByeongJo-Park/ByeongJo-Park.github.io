import React from 'react';
import Divider from '../commons/Divider';

const Project1: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">

      {/* 상단 프로젝트 정보 섹션 */}
      <section className='h-svh'>
        <p className='text-3xl mb-4'>MEFI</p>
        <p className='font-pre-B mb-1'>역할 : PM / Front-End Dev</p>
        <p className='font-pre-M'>Web-RTC를 활용한 팀단위 화상회의</p>
        <p className='font-pre-M'>실시간 문서 동시편집 및 일정공유 서비스</p>
        <p className='mb-4 text-xl font-semibold'>프론트엔드 주요 구현 내용</p>
        <ul className='list-disc list-inside space-y-1'>
          <li>달력 UI 구현현 및 팀 일정 연동 로직 구현 (Vue + JS)</li>
          <li>팀 일정 등록/수정 폼 컴포넌트 분리 및 모달 기반 UX 구현</li>
          <li>비동기 API 통신 구조 설계 및 Axios Interceptor를 통한 에러 핸들링</li>
          <li>팀 생성/수정/삭제 컴포넌트 구현</li>
        </ul>
      </section>
      <Divider/>
      {/* 프론트엔드 구현 섹션 (최소 높이 설정) */}
      <section className="h-svh">

      </section>

    </div>
  );
};

export default Project1;

import React from 'react';

const Project1: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">
      <div className='w-full p-4'>
        <p className='text-3xl mb-4'>MEFI</p>
        <p className='font-pre-B mb-1'>역할 : PM / Front-End Dev</p>
        <p className='font-pre-M'>Web-RTC를 활용한 팀단위 화상회의</p>
        <p className='font-pre-M'>실시간 문서 동시편집 및 일정공유 서비스</p>
      </div>
      <div className="w-full p-4 py-2">
        <p className='mb-2'>프론트엔드 주요 구현 내용</p>
        <ul className='list-disc list-inside'>
          <li>Recoil 기반 상태 관리 도입 및 일정 데이터의 전역 상태 연동</li>
          <li>달력 UI 커스텀 및 팀 일정 연동 로직 구현 (React + TypeScript)</li>
          <li>팀 일정 등록/수정 폼 컴포넌트 분리 및 모달 기반 UX 구현</li>
          <li>비동기 API 통신 구조 설계 및 Axios Interceptor를 통한 에러 핸들링</li>
          <li>팀 생성/수정/삭제 기능을 위한 동적 라우팅 및 Form Validation 적용</li>
          <li>반응형 UI 구현 및 사용자 경험(UX) 개선을 위한 애니메이션 도입</li>
        </ul>
      </div>
    </div>
  );
};

export default Project1;
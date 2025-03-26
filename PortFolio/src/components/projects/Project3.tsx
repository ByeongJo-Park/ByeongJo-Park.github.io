import React from 'react';
import logo from '../../assets/Ukkikki/Ukkikki.png';

const Project3: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">
      <img src={logo} alt="pjtLogo" className='p-4'/>
      <div className='w-full p-4'>
        <p className='text-3xl mb-4'>Ukkikki</p>
        <p className='font-pre-B mb-1'>역할 : 팀장 / Front-End Dev</p>
        <p className='font-pre-M'>AWS S3 암호화 기반 보안 앨범 서비스</p>
        <p className='font-pre-M'>사진 촬영부터 업로드, 공유까지 지원하는 실시간 앨범 기능 구현</p>
      </div>
      <div className="w-full p-4 py-2">
        <p className='mb-2'>프론트엔드 주요 구현 내용</p>
        <ul className='list-disc list-inside'>
          <li>소셜 로그인(Google, Kakao) OAuth 연동 및 사용자 인증 흐름 구현</li>
          <li>2차 비밀번호 입력 UI/UX 설계 및 사용자 보안 로직 처리</li>
          <li>파티(앨범 그룹) 생성/관리 컴포넌트 분리 및 상태 동기화 로직 설계</li>
          <li>사진 업로드용 카메라 컴포넌트 구현 (MediaDevices API 활용)</li>
          <li>실시간 이미지 미리보기 및 업로드 후 리스트 반영 구조 설계</li>
          <li>이미지 그룹화 UI 및 Lazy Loading 적용을 통한 성능 최적화</li>
          <li>게시판(피드) 페이지 구조화 및 게시글 CRUD 기능 컴포넌트화</li>
          <li>반응형 UI 구현 및 사용자 접근성을 고려한 인터랙션 디자인</li>
        </ul>
      </div>
    </div>
  );
};

export default Project3;
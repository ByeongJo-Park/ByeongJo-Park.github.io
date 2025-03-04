import React from 'react';
import logo from '../../assets/Ukkikki/Ukkikki.png';

const Project3: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">
      <img src={logo} alt="pjtLogo" className='p-4'/>
      <div className='w-full p-4'>
        <p className='text-3xl mb-4'>Ukkikki</p>
        <p className='font-pre-B mb-1'>역할 : 팀장 / Front-End Dev</p>
        <p className='font-pre-M'>S3 서버 암호화 + 간편 비밀번호를 통한 다중 보안</p>
        <p className='font-pre-M'>촬영한 사진을 즉시 업로드 및 공유 앨범 서비스</p>
      </div>
      <div className="w-full p-4 py-2">
        <p className='mb-2'>주요 개발사항</p>
        <ul className='list-disc list-inside'>
          <li>소셜로그인 컴포넌트 개발 및 API, 백엔드 연동</li>
          <li>2차비밀번호 컴포넌트 개발 및 API 연동</li>
          <li>파티 생성 컴포넌트 개발 및 API 연동</li>
          <li>파티 관리 컴포넌트 개발 및 API 연동</li>
          <li>게시판 페이지 개발 및 게시글 조회 API 연동</li>
          <li>게시글 생성/수정 컴포넌트 개발 및 API 연동</li>
          <li>카메라 컴포넌트 개발</li>
          <li>사진 확인 페이지 개발 및 사진 등록 API 연동</li>
          <li>이미지 그룹화 리스트 컴포넌트 개발 및 조회 API 연동</li>
        </ul>
      </div>
    </div>
  );
};

export default Project3;
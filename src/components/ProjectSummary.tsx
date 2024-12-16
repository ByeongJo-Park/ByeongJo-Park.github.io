import React from 'react';

interface ProjectSummaryProps {
  goToSlide: (index: number) => void;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-sky-blue font-gtr-B">
      <div className='w-[90%] h-[85%] bg-blue-200 rounded-3xl grid grid-flow-row-dense grid-cols-3 gap-8 shadow-md p-8 pt-16 relative'>
        <p className='text-2xl absolute top-4 left-8'>Project Summary</p>
        <div
          className='bg-white w-full h-full rounded-2xl shadow-lg flex flex-col cursor-pointer p-5 gap-4'
          // onClick={() => goToSlide(3)}
        >
          <div>
            <p className='text-3xl mb-4'>MEFI</p>
            <p className='font-pre-B mb-1'>역할 : PM / Front-End Dev</p>
            <p className='font-pre-M'>Web-RTC를 활용한 팀단위 화상회의</p>
            <p className='font-pre-M'>실시간 문서 동시편집 및 일정공유 서비스</p>
          </div>
          <p>주요 개발사항</p>
          <ul className='list-disc list-inside'>
            <li>달력 컴포넌트 구현</li>
            <li>일별 스케줄표 구현</li>
            <li>팀 관련 기능 UI/UX 구현</li>
            <li>개인 일정 관련 기능 UI/UX 구현</li>
          </ul>
          <a href="https://github.com/Team-mefi/MEFI" className="mt-auto">자세히 보러가기</a>
        </div>
        <div
          className='bg-white w-full h-full rounded-2xl shadow-lg flex flex-col cursor-pointer p-5 gap-4'
          // onClick={() => goToSlide(4)}
        >
          <div>
            <p className='text-3xl mb-4'>GrabPic</p>
            <p className='font-pre-B mb-1'>역할 : 팀장 / Front-End Dev</p>
            <p className='font-pre-M'>Image Captioning을 활용한 실시간 개체 분류</p>
            <p className='font-pre-M'>지도를 통한 주변 수집 정보 확인과 공유가 가능한 서비스</p>
          </div>
          <p>주요 개발사항</p>
          <ul className='list-disc list-inside'>
            <li>지도 관련 기능 UI/UX 구현</li>
          </ul>
          <a href="https://github.com/SSAFY-2ndPJT-GrabPic/GrabPic" className="mt-auto">자세히 보러가기</a>
        </div>
        <div
          className='bg-white w-full h-full rounded-2xl shadow-lg flex flex-col cursor-pointer p-5 gap-4'
          // onClick={() => goToSlide(5)}
        >
          <div >
            <p className='text-3xl mb-4'>Ukkikki</p>
            <p className='font-pre-B mb-1'>역할 : 팀장 / Front-End Dev</p>
            <p className='font-pre-M'>S3 서버 암호화 + 간편 비밀번호를 통한 다중 보안</p>
            <p className='font-pre-M'>촬영한 사진을 즉시 업로드 및 공유 앨범 서비스</p>
          </div>
          <p>주요 개발사항</p>
          <ul className='list-disc list-inside'>
            <li>소셜로그인 UI 구현</li>
            <li>파티 관련 UI/UX 구현</li>
            <li>게시판 관련 UI/UX 구현</li>
            <li>간편 비밀번호 UI/UX 구현</li>
            <li>카메라 UI/UX 구현</li>
            <li>이미지 그룹화 UI/UX 구현</li>
          </ul>
          <a href="https://github.com/Ukkikki/Ukkikki" className="mt-auto">자세히 보러가기</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
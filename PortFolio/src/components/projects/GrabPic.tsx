import React from 'react';
import Divider from '../commons/Divider';
import mapUserLoc from '../../assets/GrabPic/mapUserLoc.gif';
import mapCollectLoc from '../../assets/GrabPic/mapCollectLoc.gif';

const Project2: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
      {/* ✅ 소개 + 주요 기능 섹션 */}
      <section className="h-[calc(100svh-180px)] flex flex-col px-4 py-6">
        <div>
          <h1 className='text-5xl font-bold tracking-wide mb-6 font-frs-bl text-transparent'>GrabPic</h1>
          <p className="text-gray mb-8">
            AI와 지도를 활용해, 일상을 수집하는 생태 도감 플랫폼
          </p>
          <p className='font-pre-B text-lg text-point-blue mb-4'>역할 : 팀장 / Front-End Developer</p>
          <div className='space-y-1 text-gray-300 text-sm leading-relaxed'>
            <p>Image Captioning 기반 개체 판별 + 위치 기반 지도 연동 서비스</p>
            <p>실시간 수집 정보 시각화 및 도감화 기능을 제공</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-300">
          <span className="bg-point-gray px-2 py-1 rounded-md">React</span>
          <span className="bg-point-gray px-2 py-1 rounded-md">TypeScript</span>
          <span className="bg-point-gray px-2 py-1 rounded-md">TailwindCSS</span>
          <span className="bg-point-gray px-2 py-1 rounded-md">KakaoMap API</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold my-6">📌 주요 기능</h2>
          <ul className="list-disc list-inside text-gray text-md space-y-2">
            <li>📷 <b>실시간 인식 및 정보 제공</b>: 동식물 실시간 인식 및 시각화</li>
            <li>📚 <b>도감 시스템</b>: 메모, 날짜, 위치 기반 생물 정보 저장</li>
            <li>📊 <b>차트 시각화</b>: 수집 데이터 차트 기반 분류 및 탐색</li>
            <li>🖼️ <b>그리드 갤러리</b>: 반응형 갤러리로 이미지 감상</li>
            <li>🎞️ <b>보간 영상 생성</b>: 촬영 이미지 기반 AI 영상 생성</li>
            <li>🗺️ <b>지도 연동</b>: 수집 위치 마커 및 정렬 리스트 제공</li>
            <li>👤 <b>커뮤니티</b>: 유저 간 구독, 방명록, 공유 피드</li>
          </ul>
        </div>
      </section>

      <Divider />

      {/* ✅ 프론트엔드 구현 섹션 */}
      <section className="h-svh flex flex-col justify-center px-4 py-12">
        <h2 className='text-xl font-semibold mb-6'>💻 프론트엔드 주요 구현 내용</h2>
        <ul className='list-disc list-inside text-sm space-y-1 text-gray-300 mb-8'>
          <li>카카오맵 API 연동 및 사용자 위치 기반 지도 커스터마이징 (마커, 클러스터링)</li>
          <li>좌표 기반 수집 정보 시각화를 위한 컴포넌트 분리 및 상태 관리 구조 설계</li>
          <li>지도와 연동된 리스트/도감 화면 구현 및 라우팅 최적화 (React Router)</li>
          <li>AI 판별 결과에 따른 UI 상태 변화 처리 및 사용자 피드백 인터랙션 구현</li>
          <li>반응형 웹 디자인 및 모바일 최적화 적용 (TailwindCSS)</li>
          <li>컴포넌트 재사용성을 고려한 모듈화 개발 및 성능 개선</li>
        </ul>

        {/* 🔍 작업 결과 시연 GIF */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={mapUserLoc} alt="사용자 위치 기반 지도" className="max-w-72 rounded-xl shadow-md" />
            <span className="text-sm text-gray mt-2">사용자 위치 기반 지도 추적 기능</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={mapCollectLoc} alt="수집 위치 마커 표시" className="max-w-72 rounded-xl shadow-md" />
            <span className="text-sm text-gray mt-2">생물 수집 위치 마커 시각화</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project2;
import React from 'react';
import Divider from '../commons/Divider';
import loginMain from '../../assets/Ukkikki/로그인및메인화면진입.gif';
import groupCreate from '../../assets/Ukkikki/그룹생성.gif';
import groupEdit from '../../assets/Ukkikki/그룹정보수정.gif';
import profileEdit from '../../assets/Ukkikki/개인프로필변경.gif';
import authorityEdit from '../../assets/Ukkikki/유저권한변경에디터.gif';
import loginType from '../../assets/Ukkikki/loginType.png';
import groupAlbum from '../../assets/Ukkikki/그룹앨범.gif';
import inviteLink from '../../assets/Ukkikki/초대링크생성.gif';
import uploadGroupSelect from '../../assets/Ukkikki/업로딩그룹변경.gif';
import postWrite from '../../assets/Ukkikki/게시글작성.gif';
import photoAlbum from '../../assets/Ukkikki/앨범사진보기.gif';
import blockMember from '../../assets/Ukkikki/멤버차단.gif';
import banMember from '../../assets/Ukkikki/멤버추방.gif';
import homeSetting from '../../assets/Ukkikki/홈화면설정.gif';
import cameraShot from '../../assets/Ukkikki/사진촬영.gif'

const Project3: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
      
      {/* ✅ 소개 + 주요 기능 섹션 */}
      <section className="h-[calc(100svh-180px)] flex flex-col px-4 py-6">
        <div>
          <h1 className='text-5xl font-bold tracking-wide mb-6 font-frs-bl text-transparent'>Ukkikki</h1>
          <p className="text-gray mb-8">
            일상 속 추억을 안전하게 기록하고, 실시간으로 공유하는 보안형 앨범 플랫폼
          </p>
          <p className='font-pre-B text-lg text-point-blue mb-4'>역할 : 팀장 / Front-End Developer</p>
          <div className='space-y-1 text-gray-300 text-sm leading-relaxed'>
            <p>AWS S3 암호화 기반 보안 앨범 서비스</p>
            <p>사진 촬영부터 업로드, 공유까지 지원하는 실시간 앨범 기능 구현</p>
          </div>
        </div>

        {/* 기술 태그 */}
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-300">
          <span className="bg-point-gray px-2 py-1 rounded-md">React</span>
          <span className="bg-point-gray px-2 py-1 rounded-md">TypeScript</span>
          <span className="bg-point-gray px-2 py-1 rounded-md">TailwindCSS</span>
        </div>

        {/* 주요 기능 */}
        <div>
          <h2 className="text-xl font-semibold my-6">💎 주요 기능</h2>
          <ul className="list-disc list-inside text-gray text-md space-y-2">
            <li><b>📸 사진 업로드 및 AI 분류</b>: S3 SSE-C 객체 암호화, GPT 기반 사물 분류, Flask 기반 인물 인식</li>
            <li><b>📂 디렉토리 관리</b>: 폴더 생성/이동, 사진 복사/삭제/복구 (BFS 기반 경로 복원 포함)</li>
            <li><b>📥 자동 업로드</b>: 카메라 UX + 지정 파티에 자동 업로드 기능</li>
            <li><b>📝 메모 및 좋아요</b>: 사진에 메모 추가/수정/삭제 및 좋아요 기능</li>
            <li><b>👥 그룹/파티 기능</b>: 링크 가입, 자동 업로드 그룹 지정, 호스트 권한 설정, 암호/추방 기능</li>
            <li><b>👤 소셜 로그인 및 게스트 모드</b>: 카카오 로그인, 게스트 다운로드, 간편 비밀번호로 그룹 키 관리</li>
            <li><b>💬 실시간 채팅 및 알림</b>: WebSocket 기반 채팅, 클릭 시 콘텐츠 이동</li>
            <li><b>🗨️ 게시판 기능</b>: 댓글/대댓글 및 태그 호출 기능</li>
            <li><b>🔐 보안 구조</b>: JWT 인증, 그룹 키 기반 암호화된 이미지 접근 제어</li>
          </ul>
        </div>
      </section>

      <Divider />

      {/* ✅ 프론트엔드 구현 섹션 */}
      <section className="h-svh flex flex-col px-4 py-4">
        <h2 className='text-xl font-semibold mb-6'>💻 프론트엔드 주요 구현 내용</h2>
        <ul className='list-disc list-inside text-sm space-y-1 text-gray-300'>
          <li>소셜 로그인(Google, Kakao) OAuth 연동 및 사용자 인증 흐름 구현</li>
          <li>2차 비밀번호 입력 UI/UX 설계 및 사용자 보안 로직 처리</li>
          <li>파티(앨범 그룹) 생성/관리 컴포넌트 분리 및 상태 동기화 로직 설계</li>
          <li>사진 업로드용 카메라 컴포넌트 구현 (MediaDevices API 활용)</li>
          <li>실시간 이미지 미리보기 및 업로드 후 리스트 반영 구조 설계</li>
          <li>이미지 그룹화 UI 및 Lazy Loading 적용을 통한 성능 최적화</li>
          <li>게시판(피드) 페이지 구조화 및 게시글 CRUD 기능 컴포넌트화</li>
          <li>반응형 UI 구현 및 사용자 접근성을 고려한 인터랙션 디자인</li>
        </ul>
        <h2 className="text-xl font-semibold my-6">📸 주요 업무별 결과 이미지</h2>
        {/* 로그인 및 사용자 정보 관련 */}
        <div className="mb-12">
          <h3 className="text-md font-semibold mb-2 text-white">✔ 로그인 / 사용자 정보 관리</h3>
          <p className="text-sm text-gray mb-3">소셜 로그인, 프로필 변경, 로그인 흐름 UI 구성</p>
          <div className="flex flex-wrap gap-4 justify-start">
            <img src={loginMain} alt="메인 로그인" className="rounded-xl shadow max-h-[360px]" />
            <img src={loginType} alt="로그인 방식" className="rounded-xl shadow max-h-[360px]" />
            <img src={profileEdit} alt="프로필 변경" className="rounded-xl shadow max-h-[360px]" />
          </div>
        </div>
      </section>

      <Divider />

      <section className="h-svh flex flex-col px-4 py-12">
        {/* 파티 관련 UI */}
        <div className="mb-10">
          <p className="text-md font-semibold mb-2 text-white">✔ 파티(그룹) 관련 UI/UX</p>
          <p className="text-sm text-gray mb-2">파티 생성, 초대, 자동 업로드 지정, 권한 설정 등 모든 흐름 UI 구현</p>
          <div className="flex gap-4">
            <img src={groupCreate} alt="그룹 생성" className="rounded-xl shadow max-h-[360px]" />
            <img src={groupEdit} alt="그룹 정보 수정" className="rounded-xl shadow max-h-[360px]" />
            <img src={groupAlbum} alt="그룹 앨범" className="rounded-xl shadow max-h-[360px]" />
            <img src={inviteLink} alt="초대 링크" className="rounded-xl shadow max-h-[360px]" />
            <img src={uploadGroupSelect} alt="업로드 그룹 변경" className="rounded-xl shadow max-h-[360px]" />
            <img src={authorityEdit} alt="유저 권한 변경" className="rounded-xl shadow max-h-[360px]" />
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            {/* 게시판 */}
            <h3 className="text-md font-semibold mb-2 text-white">✔ 게시판 및 피드 기능</h3>
            <p className="text-sm text-gray mb-3">게시글 작성 및 댓글 기반 피드 구현</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img src={postWrite} alt="게시글 작성" className="rounded-xl shadow max-h-[360px]" />
            </div>
          </div>
          <div>
            {/* 앨범 */}
            <h3 className="text-md font-semibold mb-2 text-white">✔ 이미지 그룹 앨범 기능</h3>
            <p className="text-sm text-gray mb-3">사진 이동, 삭제, 복구, 복사 등 폴더형 앨범 기능 구현</p>
            <div className="flex flex-wrap gap-4 justify-start">
              <img src={photoAlbum} alt="앨범 사진 보기" className="rounded-xl shadow max-h-[360px]" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ✔ 기타 사용자 인터랙션 */}
      <section className="h-svh flex flex-col px-4 py-12">
        <h3 className="text-md font-semibold mb-2 text-white">✔ 그 외 사용자 인터랙션</h3>
        <p className="text-sm text-gray mb-3">카메라 기능, 홈 설정, 파티원 관리 등</p>
        <div className="flex flex-wrap gap-4 justify-start">
          <img src={cameraShot} alt="카메라 촬영" className="rounded-xl shadow max-h-[360px]"/>
          <img src={blockMember} alt="멤버 차단" className="rounded-xl shadow max-h-[360px]"/>
          <img src={banMember} alt="멤버 추방" className="rounded-xl shadow max-h-[360px]"/>
          <img src={homeSetting} alt="홈 화면 설정" className="rounded-xl shadow max-h-[360px]"/>
        </div>
      </section>

    </div>
  );
};

export default Project3;

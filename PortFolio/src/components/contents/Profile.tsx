import React from 'react';
import profilePhoto from '../../assets/IDPhoto.jpg';
import Divider from '../commons/Divider';

const Profile: React.FC = () => {


  return (
    <div className="w-full max-w-7xl mx-auto bg-light-black border border-gray-700 rounded-3xl text-white shadow-lg">

      {/* ✅ 1. 기본 정보 + 스킬 + 학력 + 자격증 */}
      <section className="h-svh flex flex-col px-8 py-12 space-y-12">
        {/* 프로필 */}
        <article className="flex items-center gap-6">
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover object-top" 
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">박 병 조</h1>

            <ul className="space-y-1">
              <li>
                <a 
                  href="https://github.com/ByeongJo-Park" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl text-gray hover:text-point-gray transition"
                >
                  👉 GitHub: ByeongJo-Park
                </a>
              </li>
              <li className="text-xl text-gray">
                📧 k97115284@gmail.com
              </li>
              <li className="text-xl text-gray">
                📞 010-9711-5284
              </li>
              <li className="text-xl text-gray">
                🎂 <span>1995.11.10</span>
              </li>
            </ul>
          </div>
        </article>


        {/* 자기 소개*/}
        <article >
          <h2 className="text-xl font-semibold mb-1">👋 About Me</h2>
          <p className="leading-relaxed text-sm text-gray">
            - 개발 역량과 협업 능력을 겸비하기 위해 노력하는 프론트엔드 개발자입니다.
            <br/>
            - 총 4개의 팀 프로젝트에 참여하였고, 그 중 3개의 7주간 장기 프로젝트에서는 2회 팀장으로 활동하며 원활한 소통과 목표 달성을 이끌었습니다.
            <br/>
            - 나머지 프로젝트에서도 팀원으로 적극 협업하며, 다양한 의견을 조율하고 문제를 함께 해결하는 경험을 쌓았습니다.
            <br/>
            - 모든 프로젝트에서 프론트엔드 개발을 전담하였으며, 특히 React를 중심으로 실무에 가까운 웹 서비스 구현 경험을 쌓았습니다.
            <br/>
            - 사용자 중심의 UI/UX 설계, 성능 최적화, 컴포넌트 구조화 등 깊이 있는 기술 역량을 키워가며 꾸준한 성장을 추구하고 있습니다.
          </p>
        </article>

        <article>
          <h2 className='text-3xl font-semibold mb-2'>💡 Skill</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* 언어 / 프레임워크 */}
            <div className=' bg-point-gray p-3 rounded-xl shadow-sm px-4'>
              <h3 className='text-xl font-semibold mb-2 text-teal-400'>🧠 Language & Framework</h3>
              <div className='flex flex-wrap gap-2'>
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" alt="React" />
                <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />``
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white" alt="Python" />
              </div>
            </div>
            {/* 스타일링 */}``
            <div className=' bg-point-gray p-3 rounded-xl shadow-sm px-4'>
              <h3 className='text-xl font-semibold mb-2 text-blue-400'>🎨 Style / UI</h3>
              <div className='flex flex-wrap gap-2'>
                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white" alt="TailwindCSS" />
                <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
              </div>
            </div>
            {/* 툴 / 협업 */}
            <div className=' bg-point-gray p-3 rounded-xl shadow-sm px-4'>
              <h3 className='text-xl font-semibold mb-2 text-yellow'>⚙️ Tool & Collaboration</h3>
              <div className='flex flex-wrap gap-2'>
                <img src="https://img.shields.io/badge/jirasoftware-0052CC?style=for-the-badge&logo=jirasoftware&logoColor=white" alt="Jira" />
                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white" alt="VSCode" />
              </div>
            </div>
            {/* 경험한 기술 */}
            <div className=' bg-point-gray p-3 rounded-xl shadow-sm px-4'>
              <h3 className='text-xl font-semibold mb-2 text-gray'>📘 기타 경험 기술</h3>
              <div className='flex flex-wrap gap-2'>
                <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white" alt="jQuery" />
                {/* 필요 시 다른 경험 기술도 추가 가능 */}
              </div>
            </div>
          </div>
        </article>

        {/* 자격증 */}
        <article>
          <h2 className='text-3xl font-semibold mb-6'>📜 Certificate</h2>
          <ul className='space-y-2'>
            <li className='flex justify-between items-center bg-point-gray p-4 rounded-xl shadow-sm'>
              <div>
                <p className='text-lg font-semibold'>정보처리기사</p>
                <p className='text-sm text-gray'>한국산업인력공단</p>
              </div>
              <span className='text-sm text-gray'>2024.09.09 취득</span>
            </li>
          </ul>
        </article>
      </section>

      <Divider />

      {/* ✅ 2. 커리어 단독 섹션 */}
      <section className="h-svh flex flex-col px-8 py-12 space-y-12">
        <article>
          <h2 className='text-3xl font-semibold mb-4'>
            📂 Career <span className='text-base text-gray-400'>(총 1년 3개월)</span>
          </h2>

          <div className="space-y-6 pl-2">
            {/* 회사명 */}
            <div>
              <p className="text-xl font-semibold text-white">
                티앤테크 (솔루션 개발 2팀 / 1년 3개월)
              </p>
              {/* 프로젝트 1 */}
              <div className="mt-6">
                <p className="text-lg font-semibold text-white">🖥️ L사 PC관리시스템</p>
                <ul className="list-disc list-inside text-gray-300 mt-1 text-sm space-y-1">
                  <li>공장 내 PC 등록을 위한 기준정보 입력 UI 설계 및 데이터 연동</li>
                  <li>PC 등록·수정·삭제 기능을 포함한 CRUD 인터페이스 구현</li>
                  <li>Chart.js를 활용하여 PC 수집 정보(메모리 사용률, 네트워크 구성, 디스크 사용률 등) 시각화</li>
                  <li>API 연동을 통해 백엔드와 실시간 데이터 흐름 처리 경험</li>
                </ul>
              </div>

              {/* 프로젝트 2 */}
              <div className="mt-6">
                <p className="text-lg font-semibold text-white">📊 S사 경영관리시스템</p>
                <ul className="list-disc list-inside text-gray-300 mt-1 text-sm space-y-1">
                  <li>계열사 기준정보 등록 화면의 UI 컴포넌트 구성 및 데이터 바인딩 처리</li>
                  <li>임직원 회원가입 프로세스를 위한 입력 폼 UI 구현 및 API 연결</li>
                  <li>경영 기준정보 입력 화면 구성 및 상태 관리 기반 데이터 연동 처리</li>
                  <li>공통 모듈 및 불필요한 코드 정리를 통한 코드 품질 개선</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        {/* 학력 */}
        <article>
          <h2 className='text-3xl font-semibold mb-6'>🎓 Education & Experience</h2>
          <ul className='space-y-2'>
            <li className='flex justify-between items-center bg-point-gray p-4 rounded-xl shadow-sm'>
              <div>
                <p className='text-lg font-semibold'>영남대학교 전기공학과 졸업</p>
                <p className='text-sm text-gray'>학사 학위</p>
              </div>
              <span className='text-sm text-gray'>2014.03 ~ 2022.02</span>
            </li>
            <li className='flex justify-between items-center bg-point-gray p-4 rounded-xl shadow-sm'>
              <div>
                <p className='text-lg font-semibold'>Samsung SSAFY 10기 수료</p>
                <p className='text-sm text-gray'>삼성청년SW아카데미</p>
              </div>
              <span className='text-sm text-gray'>2023.07 ~ 2024.06</span>
            </li>
            <li className='flex justify-between items-center bg-point-gray p-4 rounded-xl shadow-sm'>
              <div>
                <p className='text-lg font-semibold'>블레이버스 MVP 해커톤</p>
                <p className='text-sm text-gray'>블레이버스</p>
              </div>
              <span className='text-sm text-gray'>2025.02</span>
            </li>
          </ul>
        </article>
      </section>


    </div>
  );
};

export default Profile;

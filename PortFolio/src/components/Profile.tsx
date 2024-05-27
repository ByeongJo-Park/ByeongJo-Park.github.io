import React from 'react';
import profile_photo from '../assets/profile_photo.jpg';

const Profile: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-sky-blue font-gtr-B">
      <div className='w-[90%] h-[85%] bg-blue-200 rounded-3xl grid grid-flow-row-dense grid-cols-3 grid-rows-1 shadow-md'>
        <div className='flex flex-col justify-center items-center p-10 gap-10'>
          <img src={profile_photo} className='rounded-full w-80 h-80'/>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className='text-2xl'>일정에 맞추기 위해선</p>
            <p className='text-2xl'>무엇이든 할 <span className='text-3xl text-black'>개발자.</span></p>
          </div>
        </div>

        <div className='col-span-2 bg-white m-10 ms-0 rounded-2xl p-10 shadow-md flex flex-col gap-4'>
          <div>
            <p className='text-2xl'>Info</p>
            <div className='w-full p-2 flex flex-col gap-1'>
              <div className="flex w-80">
                <span>이름</span>
                <span className='ps-5 pe-2'>:</span>
                <span>박병조</span>
              </div>
              <div className="flex w-80">
                <span>TEL</span>
                <span className='ps-4 pe-2'>:</span>
                <span>010-9711-5284</span>
              </div>
              <div className="flex w-80">
                <span>Email</span>
                <span className='ps-1 pe-2'>:</span>
                <span>k97115284@gmail.com</span>
              </div>
              <div className="flex w-80">
                <a href="https://github.com/ByeongJo-Park" className='text-point-gray'>깃허브 바로가기</a>
              </div>
            </div>
          </div>

          <div>
            <p className='text-2xl'>Intro</p>
            <div className='p-2'>
              <p className='text-lg text-black'>프로젝트의 팀장 경험이 팀원을 도울 수 있는 방법을 생각하는 개발자로!</p>
              <div className='text-balance p-1 font-pre-M'>
                <p>  
                  3번의 6인 프로젝트를 진행하며 1번의 PM과 2번의 팀장을 맡은 경험이 있습니다.
                </p>
                <p>
                  3개의 프로젝트들을 진행하며 기획 단계에서 꼼꼼하게 생각했다고 판단하고 수립한 일정들이 여러 이유들로 차질을 빚게되었습니다.
                </p>
                <p className='text-wrap'>
                  그러한 애로사항들을 팀원들간의 노력으로 바로 잡아가고 일정대로 프로젝트를 마무리하는 경험을 통해서 내가 누군가와 일을 하게 되더라도 팀원이 힘들다면 도움을 주고 반대의 상황에선 먼저 요청할 수도 있는 그런 소통이 원활하고
                </p>
                <p className='text-wrap'>
                  개발을 잘하는 개발자이면서도 팀에 도움이 되는 개발자가 되기 위해 노력하고 있습니다.
                </p>
              </div>
            </div>
            
          </div>

          <div>
            <p className='text-2xl'>Experience</p>
            <ul className='list-disc p-4 font-pre-B'>
              <li>2014.03 ~ 2022.02 영남대학교 전기공학과</li>
              <li>2022.02 ~ 2023.05 티엔테크 솔루션 개발2팀 근무</li>
              <li>2023.07 ~ 2024.06 삼성 청년 SW 아카데미 10기 교육과정 수료</li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
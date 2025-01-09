import React from 'react';
import profilePhoto from '../../assets/IDPhoto.jpg';

const Profile: React.FC = () => {
    return (
        <div className="w-full bg-light-black border-point-gray m-2 rounded-3xl p-16 text-white">
            <div className='w-full flex flex-col gap-4'>
                <div className='w-full flex'>
                    <img src={profilePhoto} alt='Profile' className='w-40 h-40 rounded-full object-cover object-top'/>
                    <div className='flex flex-col p-8 h-44 justify-center'>
                        <span className='font-frs-l text-5xl pb-4'>박 병 조</span>
                        <span className='font-frs-l text-lg'>1995.11.10</span>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <span className='font-frs-eb text-3xl'>Skill</span>
                    <div className='flex flex-col px-4'>
                        <li className='p-1 font-frs-b'>활용해서 작업이 즉시 가능해요.</li>
                        <div className='flex gap-1 m-3 my-1'>
                            <img alt="Static Badge" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                        </div>
                    </div>
                    <div className='flex flex-col px-4'>
                        <li className='p-1 font-frs-b'>다뤄본 경험이 있어요.</li>
                        <div className='flex gap-1 m-3 my-1'>
                            <img alt="Static Badge" src="https://img.shields.io/badge/jirasoftware-0052CC?style=for-the-badge&logo=jirasoftware&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white"/>
                            <img alt="Static Badge" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col'>                
                    <span className='font-frs-eb text-3xl'>Career ( 총 1년 3개월 )</span>
                    <div className='flex flex-col px-4'>
                        <li className='p-1 font-frs-b text-xl'>티앤테크 ( 솔루션 개발 2팀 / 1년 3개월 근무 )</li>
                        <li>1. L사 PC관리시스템</li>
                        <li>2. S사 경영관리시스템</li>
                        <li>3. </li>
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <span className='font-frs-eb text-3xl'>Education</span>
                    <div className='flex flex-col px-4'>
                        <li className='p-1 font-frs-b text-xl'>영남대학교 전기공학과 졸업 ( 2014.03 ~ 2022.02 )</li>
                        <li className='p-1 font-frs-b text-xl'>Samsung Software Academy For Youth 10기 수료 ( 2023.07 ~ 2024.06 )</li>
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <span className='font-frs-eb text-3xl'>Certificate</span>
                    <div className='flex flex-col px-4'>
                        <li className='p-1 font-frs-b text-xl'>정보처리기사 ( 2024.09 취득 )</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
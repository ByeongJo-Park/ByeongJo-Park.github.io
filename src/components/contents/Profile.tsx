import React from 'react';
import profilePhoto from '../../assets/IDPhoto.jpg';

const Profile: React.FC = () => {
    return (
        <div className="w-full bg-light-black border-point-gray m-2 rounded-3xl p-16 text-white">
            <div className='w-full'>
                <div className='w-full flex'>
                    <img src={profilePhoto} alt='Profile' className='w-40 h-40 rounded-full object-cover object-top'/>
                    <div className='flex flex-col p-8 h-44 justify-center'>
                        <span className='font-frs-l text-5xl pb-4'>박 병 조</span>
                        <span className='font-frs-l text-lg'>1995.11.10</span>
                    </div>
                </div>
                <div>
                    <span className='font-frs-eb text-3xl'>Skill</span>
                    {/* <img alt="Static Badge" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=000000"/>
                    <img alt="Static Badge" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000"/> */}
                </div>
                <div>                    
                    <span className='font-frs-eb text-3xl'>Career</span>
                </div>
                <div>
                    <span className='font-frs-eb text-3xl'>Education</span>
                </div>
                <div>
                    <span className='font-frs-eb text-3xl'>Certificate</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
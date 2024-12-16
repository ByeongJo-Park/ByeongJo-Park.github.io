import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-sky-blue font-gtr-B">
      <div className='w-[90%] h-[85%] bg-white rounded-3xl shadow-md p-10'>
        <p className='text-2xl'>Skills</p>
        <div className='p-5 font-pre-B'>
          <ul className='list-disc'>
            <li>
              <p className='text-lg'>Dev</p>
              <ul className='list-disc m-3 ml-4'>
                <li className='my-1'>HTML</li>
                <li className='my-1'>CSS</li>
                <li className='my-1'>JS</li>
                <li className='my-1'>React</li>
                <li className='my-1'>TS</li>
              </ul>
            </li>
            <li>
              <p className='text-lg'>Cooperation</p>
              <ul className='list-disc m-3 ml-4'>
                <li className='my-1'>Jira</li>
                <li className='my-1'>Git</li>
              </ul>
            </li>
            <li>
              <p className='text-lg'>Design</p>
              <ul className='list-disc m-3 ml-4'>
                <li className='my-1'>Figma</li>
              </ul>
            </li>
          </ul>
        </div>  
      </div>
    </div>


  );
};

export default Skills;
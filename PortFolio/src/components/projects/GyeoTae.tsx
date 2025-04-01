import React from 'react';

const Project3: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
      <section className="h-[calc(100svh-180px)] flex flex-col px-4 py-6">
        <div>
          <h1 className='text-5xl font-bold tracking-wide mb-6 font-frs-bl text-transparent'>곁에</h1>
          <p className='font-frs-bl text-lg text-point-blue mb-4'>역할 : Front-End Developer</p>
          <p className='font-frs-b text-lg text-point-blue'>7인 프로젝트 ( Front : 3 / Back : 4 )</p>
          <p className='font-frs-b text-gray mb-1'> 개발 기간 : 10일 ( 2025.02.09 ~ 2025.02.19 )</p>
          <div className='space-y-1 text-gray-300 text-sm leading-relaxed'>
            <p>요양보호사와 노인의 최적 매칭을 통해</p>
            <p>재가노인복지센터의 구인난을 해결하고, 맞춤형 돌봄 서비스를 제공하는 매칭 플랫폼</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-300">
          <span className="bg-point-gray px-2 py-1 rounded-md">React</span>
          <span className="bg-point-gray px-2 py-1 rounded-md">TypeScript</span>
          <span className="bg-point-gray px-2 py-1 rounded-md">TailwindCSS</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold my-6">📌 주요 기능</h2>
          <ul className="list-disc list-inside text-gray text-md space-y-2">

          </ul>
        </div>
      </section>
    </div>
  );
};

export default Project3;
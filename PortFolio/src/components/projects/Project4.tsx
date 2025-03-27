import React from 'react';

const Project3: React.FC = () => {
  return (
    <div className="w-full border border-point-gray rounded-xl bg-light-black font-frs-b p-4 text-white">
      <div className='w-full p-4'>
        <p className='text-3xl mb-4'>곁에</p>
        <p className='font-pre-B mb-1'>역할 : Front-End Dev</p>
        <p className='font-pre-M'>요양보호사와 노인의 최적 매칭을 통해</p>
        <p className='font-pre-M'>재가노인복지센터의 구인난을 해결하고, 맞춤형 돌봄 서비스를 제공하는 매칭 플랫폼</p>
      </div>
      <div className="w-full p-4 py-2">
        <p className='mb-2'>주요 개발사항</p>
        <ul className='list-disc list-inside'>
        </ul>
      </div>
    </div>
  );
};

export default Project3;
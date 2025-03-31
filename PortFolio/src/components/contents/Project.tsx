import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProject } from '../../action/projectAction';
import { RootState } from '../../reducer';
import EtcPage from '../projects/EtcPage';
import GrabPic from '../projects/GrabPic';
import Ukkikki from '../projects/Ukkikki';
import GyeoTae from '../projects/GyeoTae';

const Project: React.FC = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state: RootState) => state.project.project);

  const changeProject = (project: string) => {
    dispatch(setProject(project));
  };

  const renderContent = () => {
    switch (currentView) {
      case 'GRABPIC':
        return <GrabPic />;
      case 'UKKIKKI':
        return <Ukkikki />;
      case '곁에':
        return <GyeoTae />;
      case '.etc':
        return <EtcPage />;
      default:
        return <div className="text-center text-gray-400 text-lg py-12">404: Page Not Found</div>;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-light-black border border-gray-700 rounded-3xl text-white shadow-lg p-6">
      {/* 프로젝트 선택 네비게이션 */}
      <nav className="flex items-center gap-6 bg-point-gray/10 border border-point-gray rounded-xl px-6 py-3 mb-6">
        <span className='text-xl text-gray-400 font-frs-m'>Projects</span>
        <button
          onClick={() => changeProject('UKKIKKI')}
          className={`text-2xl font-semibold hover:text-point-blue transition-colors ${currentView === 'UKKIKKI' ? 'text-white underline underline-offset-4' : 'text-gray'}`}
        >
          Ukkikki
        </button>
        <button
          onClick={() => changeProject('GRABPIC')}
          className={`text-2xl font-semibold hover:text-point-blue transition-colors ${currentView === 'GRABPIC' ? 'text-white underline underline-offset-4' : 'text-gray'}`}
        >
          Grabpic
        </button>
        <button
          onClick={() => changeProject('곁에')}
          className={`text-2xl font-semibold hover:text-point-blue transition-colors ${currentView === '곁에' ? 'text-white underline underline-offset-4' : 'text-gray'}`}
        >
          곁에
        </button>
        <button
          onClick={() => changeProject('.etc')}
          className={`text-2xl font-semibold hover:text-point-blue transition-colors ${currentView === '.etc' ? 'text-white underline underline-offset-4' : 'text-gray'}`}
        >
          .etc
        </button>
      </nav>

      {/* 프로젝트 상세 렌더링 */}
      <div className="bg-[#1e1e1e] rounded-2xl shadow-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default Project;

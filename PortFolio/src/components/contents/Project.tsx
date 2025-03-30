import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProject } from '../../action/projectAction';
import { RootState } from '../../reducer';
import Project1 from '../projects/Project1';
import Project2 from '../projects/Project2';
import Project3 from '../projects/Project3';
import Project4 from '../projects/Project4';

const Project: React.FC = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state: RootState) => state.project.project);

  const changeProject = (project: string) => {
    dispatch(setProject(project));
  };

  const renderContent = () => {
    switch (currentView) {
      case 'GRABPIC':
        return <Project2 />;
      case 'UKKIKKI':
        return <Project3 />;
      case '곁에':
        return <Project4 />;
      case '.etc':
        return <Project1 />;
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
          MEFI
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

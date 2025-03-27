import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from '../../action/viewAction';
import { RootState } from '../../reducer';

const Navi: React.FC = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state: RootState) => state.view.view);

  const changeView = (view: string) => {
    dispatch(setView(view));
  };
  const menuItems = [
    { label: 'Home', view: 'Home' },
    { label: 'Project', view: 'Project' },
    { label: 'Contact', view: 'Contact' },
  ];
  return (
    <nav className="w-40 h-28 p-2 mx-4 sticky top-0 z-10 flex flex-col border border-point-gray rounded-xl bg-light-black text-point-gray font-frs-b box-border">
      {menuItems.map((item) => (
        <button
          key={item.view}
          onClick={() => changeView(item.view)}
          className={`text-left px-2 py-1 rounded transition-colors ${
            currentView === item.view
              ? 'text-white bg-point-gray/30'
              : 'hover:text-white hover:bg-point-gray/20'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navi;
import {
  IconCalendarMonth,
  IconFileCode,
  IconListDetails,
} from '@tabler/icons-react';

function AppHeader({ toggleTab, setToggleTab }) {
  const handleToggleTab = () => {
    setToggleTab(!toggleTab);
  };

  return (
    <header className="app-header">
      <div>
        <h1>
          <IconFileCode size={'4rem'} /> LiteList
        </h1>
        <p>Clear. Simple. Done.</p>
      </div>
      <div className="app-header-button-wrapper">
        <button
          className={toggleTab ? 'tab-button-active' : null}
          onClick={() => {
            if (toggleTab) {
              return;
            }
            handleToggleTab();
          }}
        >
          <IconListDetails size={'2rem'} />
        </button>
        <button
          className={toggleTab ? null : 'tab-button-active'}
          onClick={() => {
            if (toggleTab) {
              handleToggleTab();
            }
          }}
        >
          <IconCalendarMonth size={'2rem'} />
        </button>
      </div>
    </header>
  );
}

export default AppHeader;

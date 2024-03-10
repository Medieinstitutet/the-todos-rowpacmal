import {
  IconCalendarMonth,
  IconFileCode,
  IconListDetails,
} from '@tabler/icons-react';

function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <h1>
          <IconFileCode size={'4rem'} /> LiteList
        </h1>
        <p>Clear. Simple. Done.</p>
      </div>
      <div className="app-header-button-wrapper">
        <button className="tab-button-active">
          <IconListDetails size={'2rem'} />
        </button>
        <button>
          <IconCalendarMonth size={'2rem'} />
        </button>
      </div>
    </header>
  );
}

export default AppHeader;

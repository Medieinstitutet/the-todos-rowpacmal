import { IconCircleArrowUpFilled } from '@tabler/icons-react';

const ScrollToTop = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="back-to-top-wrapper">
      <button
        onClick={backToTop}
        className="back-to-top-button"
      >
        <IconCircleArrowUpFilled size={'3rem'} />
      </button>
    </footer>
  );
};

export default ScrollToTop;

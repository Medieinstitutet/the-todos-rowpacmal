import { IconCircleArrowUpFilled } from '@tabler/icons-react';

const ScrollToTop = ({ todos }) => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    todos.length > 5 && (
      <footer className="back-to-top-wrapper">
        <button
          onClick={backToTop}
          className="back-to-top-button"
        >
          <IconCircleArrowUpFilled size={'3rem'} />
        </button>
      </footer>
    )
  );
};

export default ScrollToTop;

export const Button = ({ children, className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

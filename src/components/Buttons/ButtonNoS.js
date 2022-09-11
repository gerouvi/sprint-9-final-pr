const ButtonNoS = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default ButtonNoS;

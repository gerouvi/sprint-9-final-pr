const ButtonSwitchMobileDevice = ({
  className,
  isMobileSize,
  setIsMobileSize,
}) => {
  return (
    <button
      className={className}
      onClick={() => setIsMobileSize((prev) => !prev)}
    >
      {!isMobileSize && (
        <div>
          <div />
        </div>
      )}
    </button>
  );
};

export default ButtonSwitchMobileDevice;

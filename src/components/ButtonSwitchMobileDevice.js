const ButtonSwitchMobileDevice = ({
  className,
  showMobileDevice,
  setShowMobileDevice,
}) => {
  return (
    <button
      className={className}
      onClick={() => setShowMobileDevice((prev) => !prev)}
    >
      {showMobileDevice && (
        <div>
          <div />
        </div>
      )}
    </button>
  );
};

export default ButtonSwitchMobileDevice;

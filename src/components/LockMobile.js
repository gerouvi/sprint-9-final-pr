const LockMobile = ({ className, isLocked, showMobileDevice, children }) => {
  if (isLocked && showMobileDevice)
    return (
      <>
        <div className={className}>
          <div></div>
        </div>
      </>
    );
  return children;
};

export default LockMobile;

const areCapsLockActived = (e) => {
  if (e.getModifierState('CapsLock')) return true;
  return false;
};

export default areCapsLockActived;

const handleAreCapsLock = (e, option, setCapsLock) => {
  if (e.getModifierState('CapsLock') && option === 'email')
    setCapsLock((prev) => ({ ...prev, email: true }));
  if (e.getModifierState('CapsLock') && option === 'password')
    setCapsLock((prev) => ({ ...prev, password: true }));
  if (!e.getModifierState('CapsLock') && option === 'email')
    setCapsLock((prev) => ({ ...prev, email: false }));
  if (!e.getModifierState('CapsLock') && option === 'password')
    setCapsLock((prev) => ({ ...prev, password: false }));
};

export default handleAreCapsLock;

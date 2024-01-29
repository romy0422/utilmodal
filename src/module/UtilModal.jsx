const UtilModal = ({theme, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const themeClass = `modal-${theme}`;
  const themeButton = `button-${theme}`;
  const themeContain = `contain-${theme}`;

  return (
      <div className={`modal ${themeClass}`}>
          <div className={`modal-content ${themeContain}`}>
              {children}
              <button onClick={onClose} className={
                  `close-button ${themeButton} ${themeClass}`}>X</button>
          </div>
      </div>
  );
};

export default UtilModal;
  
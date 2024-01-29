const UtilModal = ({theme, children, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    const themeClass = `modal-${theme}`; 
  
    return (
      <div className={`modal ${themeClass}`}>
        <div className={`modal-content ${themeClass}`}>
            {children}
            <button onClick= {onClose} className={`close-button ${themeClass}`}>X</button>
            </div>
      </div>
    );
  };
  
  export default UtilModal;
  
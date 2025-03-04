const SortButtons = ({ onGetSelectePriority }) => {
  const handleClick = (priority) => {
    onGetSelectePriority(priority);
  };

  return (
    <div>
      <p>Organiser la Priorité par :</p>
      <button className="toggle" onClick={() => handleClick("TOUT")}>
        TOUT
      </button>
      <button className="toggle" onClick={() => handleClick("BASSE")}>
        BASSE
      </button>
      <button className="toggle" onClick={() => handleClick("MOYENNE")}>
        MOYENNE
      </button>
      <button className="toggle" onClick={() => handleClick("HAUTE")}>
        HAUTE
      </button>
    </div>
  );
};

export default SortButtons;

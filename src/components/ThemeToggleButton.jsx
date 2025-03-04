import "./ThemeToggleButton.css";

export const ThemeToggleButton = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <button
        id="checkbox"
        className="toggle"
        onClick={handleChange}
        checked={isChecked}
      >
        {isChecked ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
};

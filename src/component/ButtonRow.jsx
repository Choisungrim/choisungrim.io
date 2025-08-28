// ButtonRow.jsx (OK)
function ButtonRow({ actions, onNavigate = () => {} }) {
  return (
    <div className="button-container_resume">
      {actions.map(({ label, to }) => (
        <button
          key={to}
          className="chatbot-button_resume"
          onClick={() => onNavigate(to)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
export default ButtonRow;

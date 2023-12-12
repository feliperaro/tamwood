/* eslint-disable react/prop-types */
import "./styles.css";

export default function Box({ label, onClick }) {
  return (
    <button
      className="box"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {label}
    </button>
  );
}

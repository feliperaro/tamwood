/* eslint-disable react/prop-types */
export default function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}

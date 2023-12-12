/* eslint-disable react/prop-types */
export default function Hello({ msg = "React" }) {
  return <h1 className="highlighted">Hello {msg}</h1>;
}

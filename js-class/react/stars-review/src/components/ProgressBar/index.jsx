/* eslint-disable react/prop-types */
export default function ProgressBar(props) {
  return (
    <>
      <div>
        {props.number} stars {props.value}%
      </div>
      <progress max={props.max} value={props.value}></progress>
      <br />
    </>
  );
}

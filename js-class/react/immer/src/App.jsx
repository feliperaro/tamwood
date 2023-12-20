import { produce } from "immer";
import "./App.css";

function App() {
  const baseState = [
    {
      title: "Learn TypeScript",
      done: true,
    },
    {
      title: "Try Immer",
      done: false,
    },
  ];

  const nextState = produce(baseState, (draft) => {
    draft[1].done = true;
    draft.push({ title: "Tweet about it" });
    draft.push({ title: "Talk about it" });
  });
  console.log("nextState", nextState);

  const students = [
    { name: "Ying", color: "black" },
    { name: "Yang", color: "white" },
  ];

  const nextStudents = produce(students, (draft) => {
    draft.push({ name: "Poo", color: "blue" });
    draft[1].color = "pink";
  });

  console.log("students", students);
  console.log("nextStudents", nextStudents);

  return (
    <>
      <h1>IMMER</h1>
    </>
  );
}

export default App;

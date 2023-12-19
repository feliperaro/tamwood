import { useState } from "react";
import "./App.css";

import { CATEGORIES, INITIAL_GRADES } from "./utils/calculator";

function App() {
  const [grade, setGrade] = useState(0);
  const [grades, setGrades] = useState(INITIAL_GRADES);

  const getFinalGrade = () => {
    let finalGrade = 0;
    grades.forEach((grade) => (finalGrade += grade.value * grade.weight));
    return finalGrade;
  };

  const getSelectedCategory = () => {
    const categorySelected = document.querySelector("#categories").value;
    return CATEGORIES[categorySelected].name;
  };

  const finalGrade = getFinalGrade();

  return (
    <>
      <h1>Grade Calculator</h1>
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <div>
          <label htmlFor="categories">Category: </label>
          <select id="categories" name="categories">
            {CATEGORIES.map((category, index) => (
              <>
                <option key={index} value={index}>
                  {category.name}
                </option>
              </>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="grade">Grade: </label>
          <input
            type="number"
            name="grade"
            max={100}
            min={0}
            value={grade}
            onChange={(e) => {
              const gradeValue = e.target.value;
              if (gradeValue[0] === "0") {
                e.target.value = gradeValue.split("").slice(1).join("");
              }
              const numberValue = Number(gradeValue);
              if (numberValue < 0 || numberValue > 100) return;
              setGrade(numberValue);
            }}
          />
          <input
            type="button"
            value="Add grade"
            onClick={() => {
              if (grade < 0 || grade > 100) return;
              const selectedCategory = getSelectedCategory();
              setGrades(
                grades.map((g) => {
                  if (g.name === selectedCategory) {
                    return { ...g, value: grade };
                  }
                  return g;
                })
              );
            }}
          />
        </div>
      </div>
      <br />
      <div className="grades">
        <ul
          style={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
          }}
        >
          Grades
          {grades.map((grade, index) => (
            <li key={index}>
              {grade.name}: {grade.value}
            </li>
          ))}
        </ul>
      </div>
      <span>Final Grade: {finalGrade}</span>
    </>
  );
}

export default App;

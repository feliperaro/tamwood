import { useState } from "react";
import "./App.css";

import { CATEGORIES, INITIAL_GRADES } from "./utils/calculator";

function App() {
  const [grade, setGrade] = useState(0);
  const [grades, setGrades] = useState(INITIAL_GRADES);

  const getFinalGrade = () => {
    let finalGrade = 0;
    grades.forEach((grade) => {
      if (grade.name !== "Coursework")
        return (finalGrade += grade.value * grade.weight);

      const gradeValues = grade.value;
      const sumGrades = gradeValues.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      if (sumGrades === 0) return (finalGrade += sumGrades);

      const avaregeGrade = sumGrades / gradeValues.length;
      return (finalGrade += avaregeGrade * grade.weight);
    });

    return Math.round(finalGrade);
  };

  const getSelectedCategory = () => {
    const categorySelected = document.querySelector("#categories").value;
    return CATEGORIES[categorySelected].name;
  };

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
              const gradeNumber = Number(gradeValue);
              if (gradeNumber < 0 || gradeNumber > 100) return;
              setGrade(gradeNumber);
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
                  if (g.name !== selectedCategory) return g;
                  if (selectedCategory !== "Coursework")
                    return { ...g, value: grade };

                  const grades = g.value;
                  grades.push(grade);
                  return { ...g, value: grades };
                })
              );
            }}
          />
        </div>
      </div>
      <br />
      <div className="grades">
        <h2>Grades</h2>
        <ul
          style={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
          }}
        >
          {grades.map((grade, index) => {
            const value =
              grade.name === "Coursework"
                ? grade.value.join(", ")
                : grade.value;

            return (
              <li key={index}>
                {grade.name}: {value}
              </li>
            );
          })}
        </ul>
      </div>
      <span>Final Grade: {getFinalGrade()}</span>
    </>
  );
}

export default App;

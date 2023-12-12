/* eslint-disable react/prop-types */
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hello from "./components/Hello";

const Profile = ({ children, firstName, lastName, profession }) => {
  return (
    <>
      {children}
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Profession: {profession}</li>
      </ul>
    </>
  );
};

function Description({ heading, body }) {
  return (
    <>
      <header>{heading}</header>
      <span>{body}</span>
    </>
  );
}

function Movie({ name, hasWatched }) {
  return (
    <>
      <span>Movie: {name}</span>
      <br />
      <span>Have you watched? {hasWatched ? "Yes" : "No"}</span>
      <br />
    </>
  );
}

function WeekDay({ day, weekday }) {
  return (
    <div style={{ width: "200px" }}>
      {weekday} {day}
    </div>
  );
}

function App() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const daysToShow = [];
  const howManyDays = 12;

  for (let index = 0; index < howManyDays; index++) {
    const day = days[index % days.length];
    daysToShow.push({ day: index + 1, weekday: day });
  }

  return (
    <>
      <Header />
      <Hello />
      <div className="card">
        {daysToShow.map((element, key) => (
          <WeekDay day={element.day} weekday={element.weekday} key={key} />
        ))}

        <Profile
          firstName="Felipe"
          lastName="Roque"
          profession="Full Stack Web Developer"
        >
          <h2>ME</h2>
        </Profile>
        <Description heading={"About me"} body={"I like food"} />
        <br />
        <Movie name={"Harry Potter"} hasWatched={true} />

        <Profile
          firstName="Nicolas"
          lastName="Roque"
          profession="Student & Soccer Player"
        >
          <h2>My Best Friend</h2>
        </Profile>
        <Description heading={"About him"} body={"He likes video games"} />
        <br />
        <Movie name={"Grinch"} hasWatched={false} />

        <Profile firstName="Lionel" lastName="Messi" profession="Soccer Player">
          <h2>GOAT</h2>
        </Profile>
      </div>
      <Footer />
    </>
  );
}

export default App;

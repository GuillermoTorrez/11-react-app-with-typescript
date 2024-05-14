import { useEffect, useState } from "react";
import "./App.css";

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

const INITIAL_STATE = [
  {
    nick: "guillermo",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=guillermo",
    description: "Guillermo will be a moderator",
  },
  {
    nick: "Roberto",
    subMonths: 4,
    avatar: "https://i.pravatar.cc/150?u=roberto",
    description: "Roberto will be a moderator",
  },
]

interface AppState {
  subs: Array<Sub>
  newsubsNumber: number
}


function App() {
  const [subs, setSubs] = useState<AppState['subs']>([]);

  const [newSubsNumber, setnewSubsNumber] = useState<AppState['newsubsNumber']>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, []);

  return (
    <div className="App">
      <h1> Mi App SubScriptions</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
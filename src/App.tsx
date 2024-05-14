import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types"

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

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1> My App SubScriptions</h1>
     <List subs={subs} />
     <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
import { useEffect } from "react";
import { auth, db } from "./services/firebase.ts";

function App() {
  useEffect(() => {
    console.log("Firebase подключен:", auth, db);
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;

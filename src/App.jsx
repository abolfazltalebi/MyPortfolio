import "./App.css";
import "./index.css";
import LandingScreen from "./components/LandingScreen";
import { useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>{!isLoading && <LandingScreen onComplete={() => setIsLoading(true)} />}</>
  );
}

export default App;

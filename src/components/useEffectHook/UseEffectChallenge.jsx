import { useEffect } from "react";
import CounterEffect from "./CounterEffect"; // This file must exist

const UseEffectChallenge = () => {
  useEffect(() => {
    console.log("UseEffect component mounted");
  }, []);

  return (
    <div>
      <CounterEffect />
    </div>
  );
};

export default UseEffectChallenge;

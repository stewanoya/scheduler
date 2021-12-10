import { useState } from "react";

const useVisiaulMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prev) => {
      if (replace) {
        prev.pop();
        return [...prev, newMode];
      } else {
        return [...history, newMode];
      }
    });
  };

  const back = () => {
    setHistory((history) => {
      const newHistory =
        history.length > 1 ? [...history].slice(0, -1) : [...history];

      setMode(newHistory[newHistory.length - 1]);

      return newHistory;
    });
  };
  return { mode, transition, back };
};

export default useVisiaulMode;

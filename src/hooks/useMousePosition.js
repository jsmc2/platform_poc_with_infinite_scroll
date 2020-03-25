import { useState, useEffect } from "react";
import { debounce } from "lodash";

function hook(debouncInMS = 2) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = debounce(event => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  }, debouncInMS);

  useEffect(() => {
    // componentDidMount
    window.addEventListener("mousemove", handleMouseMove);

    // componentWillUnmount (in return)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

export default hook;

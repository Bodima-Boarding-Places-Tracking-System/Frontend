import * as React from "react";

const SIZE = 400;

export function CheckSize() {
  const [isSmaller, setIsSmaller] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${SIZE - 1}px)`);
    const onChange = () => {
      setIsSmaller(window.innerWidth < SIZE);
    };
    mql.addEventListener("change", onChange);
    setIsSmaller(window.innerWidth < SIZE);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isSmaller;
}

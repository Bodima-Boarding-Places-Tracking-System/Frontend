import * as React from "react";

const TABSIZE_BREAKPOINT = 1024;

export function useIsTabSize() {
  const [isTabSize, setIsTabSize] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${TABSIZE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsTabSize(window.innerWidth < TABSIZE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsTabSize(window.innerWidth < TABSIZE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isTabSize;
}

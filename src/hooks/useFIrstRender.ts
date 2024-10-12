import { useEffect, useRef } from "react";

function useFirstRender() {
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    isFirstRender.current = false;
    return () => {
      isFirstRender.current = true;
    };
  }, []);
  return isFirstRender.current;
}


export {useFirstRender};

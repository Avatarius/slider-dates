import { RefObject, useEffect, useLayoutEffect, useState } from "react";

interface IUseCircleSizeProps {
  ref: RefObject<HTMLDivElement>;
}

function useCircleSize(ref: RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current?.offsetWidth !== size) {
        setSize(ref.current?.offsetWidth || 0);
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref.current]);

  return size;
}

export { useCircleSize };

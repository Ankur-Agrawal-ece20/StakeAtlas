import { useCallback, useEffect } from "react";

function useKeyDown(keyNameOrCode, fn) {
  const handler = useCallback(
    (e) => {
      if (e.type === "keydown") {
        if (e.key === keyNameOrCode || e.keyCode === keyNameOrCode) {
          return fn(e);
        }
      }
    },
    [fn]
  );

  useEffect(() => {
    document.addEventListener("keydown", handler, false);

    return () => {
      document.removeEventListener("keydown", handler, false);
    };
  }, [handler]);
}

export default useKeyDown;

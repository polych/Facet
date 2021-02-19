import React, { useEffect, useRef } from "react";
import ballsPool from "../../helpers/ballsPool";
const Scene = () => {
  const scene = useRef(null);
  useEffect(() => {
    ballsPool(scene);
  }, [scene]);
  return <div ref={scene} className="canv" />;
};

export default Scene;

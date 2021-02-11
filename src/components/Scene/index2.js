import React, { useEffect, useRef } from "react";
import ballsPool from "../../helpers/ballsPool";
const Scene2 = () => {
  const scene = useRef(null);
  useEffect(() => {
    ballsPool(scene);
  }, [scene]);
  return <div ref={scene} className="canv" />;
};

export default Scene2;

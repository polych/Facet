/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import ballsPool from "../../helpers/ballsPool";
import { useHistory } from "react-router";

const Scene = React.memo(({ projects }) => {
  const history = useHistory();
  const scene = useRef(null);

  useEffect(() => {
    if (projects && Object.keys(projects).length > 0) {
      ballsPool(scene, history, projects);
    }
  }, [projects]);
  return <div ref={scene} className="canv" />;
});

export default Scene;

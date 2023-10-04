import React from "react";
import { runForceGraph } from "./forceGraphGenerator";
import styles from "./forceGraph.module.css";

export function ForceGraph({ edgesData, nodesData, nodeHoverTooltip }) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let destroyFn;

    if (containerRef.current) {
      const { destroy } = runForceGraph(containerRef.current, edgesData, nodesData, nodeHoverTooltip);
      destroyFn = destroy;
    }

    return destroyFn;
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
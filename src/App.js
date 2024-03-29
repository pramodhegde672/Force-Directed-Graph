import React from 'react';
import data from './data/data.json';
import { ForceGraph } from "./components/forceGraph";
import './App.css';

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Force Graph Example
      </header>
      <section className="Main">
        <ForceGraph linksData={data.edges} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
      </section>
    </div>
  );
}

export default App;

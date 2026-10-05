import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import roadmapData from "./roadmapData";
import RoadmapNode from "./components/RoadmapNode";

import "./App.css";

const nodeTypes = {
  title: RoadmapNode,
  topic: RoadmapNode,
  subtopic: RoadmapNode,
  section: RoadmapNode,
  button: RoadmapNode,
};

function App() {
  const nodes = roadmapData.nodes.map((node) => ({
    ...node,

    position: node.positionAbsolute ?? node.position,

    data: {
      ...node.data,
      label: node.data?.label ?? "",
    },
  }));

  return (
    <div className="roadmap-container">
      <ReactFlow
        nodes={nodes}
        edges={roadmapData.edges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={2}
        nodesConnectable={false}
      >
        <Background gap={20} size={1} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default App;

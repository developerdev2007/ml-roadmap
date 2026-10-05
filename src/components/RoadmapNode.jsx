import { Handle, Position } from "@xyflow/react";

function RoadmapNode({ data, type }) {
  const label = data?.label ?? "";

  if (type === "title") {
    return (
      <div className="roadmap-node roadmap-title">
        <div>{label}</div>
      </div>
    );
  }

  return (
    <div className={`roadmap-node roadmap-${type}`}>
      <Handle id="w1" type="target" position={Position.Left} />

      <Handle id="w2" type="target" position={Position.Left} />

      <Handle id="y1" type="target" position={Position.Left} />

      <Handle id="y2" type="target" position={Position.Left} />

      <Handle id="z1" type="source" position={Position.Right} />

      <Handle id="z2" type="source" position={Position.Right} />

      <Handle id="x2" type="source" position={Position.Right} />

      <div>{label}</div>
    </div>
  );
}

export default RoadmapNode;

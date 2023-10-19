import { useCallback, useRef } from 'react';
import ReactFlow, {
  addEdge,
  Edge,
  useNodesState,
  useEdgesState,
  updateEdge,
  Controls,
  Background,
  Connection,
} from 'reactflow';

import 'reactflow/dist/style.css';
import {
  initialNodes,
  initialEdges,
  fitViewOptions,
  defaultEdgeOptions,
  nodeTypes,
  rfStyle,
} from './FlowOptions';

export default function FlowToo() {
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    []
  );

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      edgeUpdateSuccessful.current = true;
      setEdges((els) => updateEdge(oldEdge, newConnection, els));
    },
    []
  );

  const onEdgeUpdateEnd = useCallback((_: any, edge: Edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      snapToGrid
      onEdgeUpdate={onEdgeUpdate}
      onEdgeUpdateStart={onEdgeUpdateStart}
      onEdgeUpdateEnd={onEdgeUpdateEnd}
      onConnect={onConnect}
      fitView
      fitViewOptions={fitViewOptions}
      defaultEdgeOptions={defaultEdgeOptions}
      nodeTypes={nodeTypes}
      // connectionLineComponent={CustomConnectionLine}
      style={rfStyle}
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}

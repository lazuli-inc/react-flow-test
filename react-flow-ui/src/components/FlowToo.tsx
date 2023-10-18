import { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  useNodesState,
  useEdgesState,
  updateEdge,
  OnConnect,
  DefaultEdgeOptions,
  NodeTypes,
  MiniMap,
  Controls,
  Background,
  Connection,
} from 'reactflow';

import 'reactflow/dist/style.css';

import CustomNode from './CustomNode';
// import CustomConnectionLine from './CustomConnectionLine';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    data: { label: 'API トリガー', image: 'flow-chart-icons/API.svg' },
    position: { x: 5, y: 5 },
  },
  {
    id: '2',
    type: 'custom',
    data: { label: 'テーブル分岐', image: 'flow-chart-icons/2.svg' },
    position: { x: 5, y: 100 },
  },
  {
    id: '3',
    type: 'custom',
    data: { label: 'KUKURU', image: 'flow-chart-icons/1.svg' },
    position: { x: 5, y: 200 },
  },
  {
    id: '4',
    type: 'custom',
    data: { label: 'データ拡張', image: 'flow-chart-icons/3.svg' },
    position: { x: 5, y: 300 },
  },
];

const initialEdges = [{ id: 'e1-2', source: '1-a', target: '2-b', label: 'updatable edge' }];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const nodeTypes: NodeTypes = {
  custom: (props) => <CustomNode {...props} />,
};

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

  const rfStyle = {
    backgroundColor: '#f2f4fc',
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onEdgeUpdate={onEdgeUpdate}
      onEdgeUpdateStart={onEdgeUpdateStart}
      onEdgeUpdateEnd={onEdgeUpdateEnd}
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

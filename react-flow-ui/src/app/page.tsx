'use client';

import FlowToo from 'components/FlowToo';
import React, { useCallback } from 'react';
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
// } from 'reactflow';

import 'reactflow/dist/style.css';

// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Home() {
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const onConnect = useCallback((params:any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    // <main className={styles.main}>
    <div style={{ width: '100vw', height: '100vh' }}>
      <FlowToo />
    </div>
    // </main>
  );
}

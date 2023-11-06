import { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Edge,
  useNodesState,
  useEdgesState,
  updateEdge,
  Controls,
  Background,
  Connection,
  ReactFlowInstance,
} from 'reactflow';
import { Box } from '@mui/material';

import 'reactflow/dist/style.css';
import {
  initialNodes,
  initialEdges,
  defaultEdgeOptions,
  nodeTypes,
  rfStyle,
  edgeTypes,
  getId,
  nodeMap,
} from './FlowOptions';
import CustomConnectionLine from './CustomConnectionLine';

export default function FlowToo() {
  const [reactFlowInstance, setReactFlowInstance] =
    useState<null | ReactFlowInstance>(null);
  const reactFlowWrapper = useRef<null | Element>(null);
  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    []
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper!.current!.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance!.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type: 'custom',
        position,
        data: { label: nodeMap[type].label, image: nodeMap[type].image },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
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
    <ReactFlowProvider>
      <Box style={{ width: '100vw', height: '90vh' }} ref={reactFlowWrapper}>
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
          defaultEdgeOptions={defaultEdgeOptions}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          style={rfStyle}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          connectionLineComponent={CustomConnectionLine}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </Box>
    </ReactFlowProvider>
  );
}

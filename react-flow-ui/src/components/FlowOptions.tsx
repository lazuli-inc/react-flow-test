import CustomNode from './CustomNode';
import DeleteButtonEdge from './DeleteButtonEdge';
import {
  FitViewOptions,
  Node,
  Edge,
  DefaultEdgeOptions,
  NodeTypes,
  EdgeTypes,
} from 'reactflow';


export const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

export const edgeTypes: EdgeTypes = {
  buttonedge: DeleteButtonEdge,
};

export const initialNodes: Node[] = [
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

export const initialEdges: Edge[] = [];

export const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

export const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

export const rfStyle = {
  backgroundColor: '#f2f4fc',
};

export let id = 0;
export const getId = () => `dndnode_${id++}`;
export type NodeData = { label: string; image: string };
export const nodeMap: Record<string, NodeData> = {
  API: { label: 'API トリガー', image: 'flow-chart-icons/API.svg' },
  table: { label: 'テーブル分岐', image: 'flow-chart-icons/2.svg' },
  kukuru: { label: 'KUKURU', image: 'flow-chart-icons/1.svg' },
  data: { label: 'データ拡張', image: 'flow-chart-icons/3.svg' },
};

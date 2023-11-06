import React from 'react';
import { ConnectionLineType, Position } from 'reactflow';

type Props = {
  fromX: number;
  fromY: number;
  fromPosition: Position;
  toX: number;
  toY: number;
  toPosition: Position;
  connectionLineType: ConnectionLineType;
};

export default function CustomConnectionLine(props: Props) {
  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={1.5}
        d={`M${props.fromX},${props.fromY} C ${props.fromX} ${props.toY} ${props.fromX} ${props.toY} ${props.toX},${props.toY}`}
      />
      <circle
        cx={props.toX}
        cy={props.toY}
        fill="#fff"
        r={3}
        stroke="#222"
        strokeWidth={1.5}
      />
    </g>
  );
}

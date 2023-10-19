import React from 'react';
import { Box } from '@mui/material';

export function SideBar() {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box sx={{ width: '100%', height: '30%' }}>
      <aside>
        <div className="description">
          You can drag these nodes to the bottom
        </div>
        <div
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, 'API')}
          draggable
        >
          API トリガー
        </div>
        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, 'table')}
          draggable
        >
          テーブル分岐
        </div>
        <div
          className="dndnode output"
          onDragStart={(event) => onDragStart(event, 'kukuru')}
          draggable
        >
          KUKURU
        </div>
        <div
          className="dndnode output"
          onDragStart={(event) => onDragStart(event, 'data')}
          draggable
        >
          データ拡張
        </div>
      </aside>
    </Box>
  );
}

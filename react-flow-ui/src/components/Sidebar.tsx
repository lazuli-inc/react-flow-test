import React, { useState } from 'react';
import DialogComponent from 'components/DialogComponent';
import { Box } from '@mui/material';

export function SideBar() {
  const [dialogOpen, setDialogOpen] = useState(true);

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
      <button onClick={() => setDialogOpen(true)}>Open Dialog</button>
      {dialogOpen && (
        <DialogComponent
          title="Resizable Dialog"
          onClose={() => setDialogOpen(false)}
        >
          {/* Your dialog content goes here */}
          <p>This is the content of the dialog.</p>
        </DialogComponent>
      )}
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

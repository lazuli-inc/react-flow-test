import React from 'react';
import { Box } from '@mui/material';

export function SideBar () {
  const onDragStart = (event:any, nodeType:any, data?:any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box sx={{width:'100%', height:'30%'}}>
    <aside>
      <div className="description">You can drag these nodes to the bottom</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
    </Box>
  );
}

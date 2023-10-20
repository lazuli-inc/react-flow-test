import React from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';

export function FlowMenu() {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', height: '30%' }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div
          className="dndnode"
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
      </Menu>
    </Box>
  );
}

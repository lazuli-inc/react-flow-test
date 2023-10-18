import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps, NodeResizer } from 'reactflow';
import styles from './CustomNode.module.css';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';


const CustomNode: FC<NodeProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          height: '60px',
          width: '60px',
          border: 1,
          borderColor: '#E0E0E0',
          borderRadius: '3px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="flow-chart-icons/API.svg"
          alt="API"
          width={50}
          height={50}
        />
        <Handle
          type="source"
          position={Position.Left}
          id="a"
          style={{ background: '#8A91AE' }}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="b"
          style={{ background: '#8A91AE' }}
        />
      </Box>
      <Typography sx={{ fontSize: '12px', color: '#525F90' }}>
        API トリガー
      </Typography>
    </Box>
  );
};

export default memo(CustomNode);

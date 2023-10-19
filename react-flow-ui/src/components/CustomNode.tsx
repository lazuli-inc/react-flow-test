import { memo, FC } from 'react';
import { Handle, Position, NodeProps, Node } from 'reactflow';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

type NodeData = {
  label: string;
  title: string;
  image: string;
};

const CustomNode: FC<NodeProps> = ({ data, isConnectable }: NodeProps<NodeData>) => {
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
          backgroundColor: '#FFFFFF',
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
        <Image src={data.image} alt={data.image} width={50} height={50} />
        <Handle
          type="source"
          position={Position.Left}
          id="a"
          style={{ background: '#8A91AE' }}
          isConnectable={isConnectable}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="b"
          style={{ background: '#8A91AE' }}
          isConnectable={isConnectable}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      </Box>
      <Typography sx={{ fontSize: '12px', color: '#525F90' }}>
        {data.label}
      </Typography>
    </Box>
  );
};

export default memo(CustomNode);

import { memo, FC, useCallback } from 'react';
import { Handle, Position, NodeProps, useReactFlow } from 'reactflow';
import { Box, Typography, IconButton } from '@mui/material';
import { Clear } from '@mui/icons-material/';
import Image from 'next/image';
import { Card } from 'src/components/ui/card';

type NodeData = {
  label: string;
  title: string;
  image: string;
};

const CustomNode: FC<NodeProps> = ({
  id,
  data,
  isConnectable,
}: NodeProps<NodeData>) => {
  const { deleteElements } = useReactFlow();

  const onClick = useCallback(() => {
    deleteElements({ nodes: [{ id }] });
  }, [id, deleteElements]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton onClick={onClick} sx={{ right: '-50px', bottom: '-25px' }}>
        <Clear />
      </IconButton>

      <Card
      className='z-10'
        // sx={{
        //   backgroundColor: '#FFFFFF',
        //   height: '60px',
        //   width: '60px',
        //   border: 1,
        //   borderColor: '#E0E0E0',
        //   borderRadius: '3px',
        //   padding: '10px',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        // }}
      >
        <Image src={data.image} alt={data.image} width={50} height={50} />
        <Handle
          type="source"
          position={Position.Left}
          id="a"
          style={{ background: '#8A91AE' }}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Right}
          id="b"
          style={{ background: '#8A91AE' }}
          isConnectable={isConnectable}
        />
      </Card>
      <Typography sx={{ fontSize: '12px', color: '#525F90' }}>
        {data.label}
      </Typography>
    </Box>
  );
};

export default memo(CustomNode);

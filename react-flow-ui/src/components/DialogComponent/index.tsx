import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import styles from './DialogComponent.module.css';

interface DialogProps {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const DialogComponent: React.FC<DialogProps> = ({
  title,
  onClose,
  children,
}) => {
  const [width, setWidth] = useState<number>(400);
  const [height, setHeight] = useState<number>(300);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleResize = (
    event: React.SyntheticEvent,
    { size }: { size: { width: number; height: number } }
  ) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  const handleDrag = (e: any, ui: { deltaX: number; deltaY: number }) => {
    setPosition({
      x: position.x + ui.deltaX,
      y: position.y + ui.deltaY,
    });
  };

  return (
    <Draggable handle=".dialog-title" position={position} onDrag={handleDrag}>
      <ResizableBox
        width={width}
        height={height}
        minConstraints={[300, 200]}
        // maxConstraints={[300, 300]}
        onResize={handleResize}
        className={styles.resizableBox}
      >
        <div className={styles.dialog}>
          <div className={styles.dialogTitle}>
            <span className="dialog-title">{title}</span>
            <button onClick={onClose} className={styles.closeButton}>
              Close
            </button>
          </div>
          <div className={styles.dialogContent}>{children}</div>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default DialogComponent;

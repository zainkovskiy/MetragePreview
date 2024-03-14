import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface IDialogWindow {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DialogWindowStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000c7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogWindow: React.FC<IDialogWindow> = ({ open, onClose, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <DialogWindowStyle
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          initial={{
            opacity: 0,
          }}
          onClick={onClose}
        >
          <motion.div
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
            initial={{
              scale: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {children}
          </motion.div>
        </DialogWindowStyle>
      )}
    </AnimatePresence>
  );
};

export default DialogWindow;

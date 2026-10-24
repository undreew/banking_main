import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import BnkButton from "@/components/Button/BnkButton";

const BnkModal = (props) => {
  const { children, isOpen, onToggle, title, description, okProps, cancelProps, modalFooter = null } = props;
  const { cancelAction, cancelLabel } = cancelProps || {};
  const { okAction, okLabel, okIcon } = okProps || {};

  const handleOkAction = () => {
    okAction();
    onToggle();
  };

  const handleCancelAction = () => {
    cancelAction ? cancelAction() : onToggle();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="section">{title}</DialogTitle>
          <DialogDescription className="mt-3 body">
            {description}
          </DialogDescription>
        </DialogHeader>

        {children}

        <DialogFooter className="flex">
          {modalFooter ? modalFooter : (
            <>
              <BnkButton
                variant="bnkOutline"
                onClick={handleCancelAction}
                className="flex-1 py-5 px-3"
              >
                {cancelLabel}
              </BnkButton>
              <BnkButton
                LeftIcon={okIcon}
                onClick={handleOkAction}
                className="flex-1 py-5 px-3"
              >
                {okLabel}
              </BnkButton>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BnkModal;
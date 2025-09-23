import { Modal } from '~/components/ui';
import { useState } from 'react';
import { AmountDrawer } from './1 - Amount';

export function DepositDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);

  if (!open && step !== 1) {
    setStep(1);
  }

  return (
    <Modal visible={open} onClose={() => setOpen(false)}>
      {step === 1 ? <AmountDrawer setStep={setStep} /> : <></>}
    </Modal>
  );
}

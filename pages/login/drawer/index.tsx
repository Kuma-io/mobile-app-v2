import { Modal } from '~/components/ui';
import { useState } from 'react';
import { MailDrawer } from './1 - Mail';
import { OtpDrawer } from './2 - Otp';

export function Drawer({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  if (!open && step !== 1) {
    setStep(1);
  }

  return (
    <Modal visible={open} onClose={() => setOpen(false)}>
      {step === 1 ? (
        <MailDrawer email={email} setEmail={setEmail} setStep={setStep} />
      ) : (
        <OtpDrawer email={email} setStep={setStep} />
      )}
    </Modal>
  );
}

import { useState } from 'react';

/**
 * Hook que maneja el formulario de captura de email.
 * Dispara eventos globales para Toast y SuccessModal.
 */
export function useEmailCapture() {
  const [name,  setName]  = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí iría la llamada real al backend/Formspree/etc.
    console.log('Email capture:', { name, phone, email });

    // Notificamos al Toast
    window.dispatchEvent(new CustomEvent('firmix:toast', {
      detail: { message: '¡Gracias! Te contactaremos pronto.' },
    }));

    // Abrimos el SuccessModal
    window.dispatchEvent(new CustomEvent('firmix:open-success-modal'));

    // Resetear campos
    setName('');
    setPhone('');
    setEmail('');
  };

  return { name, phone, email, setName, setPhone, setEmail, handleSubmit };
}

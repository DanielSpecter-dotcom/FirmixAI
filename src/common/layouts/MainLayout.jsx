import { Outlet } from 'react-router-dom';
import { Toast }        from '../components/Toast';
import { SuccessModal } from '../components/SuccessModal';
import { ABSwitcher }   from '../components/ABSwitcher';
import { ChatWidget }   from '../components/ChatWidget';

/**
 * MainLayout — shell de toda la app.
 * Renderiza el contenido de la ruta hija mediante <Outlet />
 * y mantiene los componentes globales (Toast, Modal, ABSwitcher, ChatWidget) siempre montados.
 */
export function MainLayout() {
  return (
    <>
      <Outlet />
      <Toast />
      <SuccessModal />
      <ChatWidget />
      <ABSwitcher />
    </>
  );
}


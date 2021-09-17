import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./style/global";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    function handleOpenTransactionModal() {
        setIsNewTransactionModalOpen (true);
    }

    function handleCloseTransactionModal() {
        setIsNewTransactionModalOpen (false);

    }

  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      
      <GlobalStyle/>
    </>
  );
}


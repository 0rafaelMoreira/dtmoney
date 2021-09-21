import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext, TransactionsProvider } from './TransactonsContext';
import { GlobalStyle } from "./style/global";
import { TransactionsTable } from './components/TransactionsTable';



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
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenTransactionModal} />
      

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      
      <GlobalStyle/>
    </TransactionsProvider>
  );
  
}


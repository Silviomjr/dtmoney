import { GlobalStyle } from "./styles/global";
import { Header } from './components/header/index';
import { Dashboard } from "./components/dashboard";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);
    
  function handleOpenNewTransactionModal() {
      setIsNewTransactionOpen(true);
  };
  
  function handleCloseNewTransactionModal() {
      setIsNewTransactionOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

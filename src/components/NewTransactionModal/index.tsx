    import { useState } from 'react';
    import Modal from 'react-modal';
    import closeImg from '../../assets/close.svg'
    import incomeImg from '../../assets/income.svg'
    import outcomeImg from '../../assets/outcome.svg'
    
    
    import { Container, RadioBox, TransactionTypeContainer } from './style';



    interface NewTransactionModalProps {
        isOpen: boolean;
        onRequestClose: () => void;

    }



    export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) {
        const [type, setType] = useState('deposit');
       


        return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <RadioBox type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
                isActive={type==='deposit'}
                
                
                >
                    <img src={closeImg} alt="Fechar Modal"/>

                </RadioBox>
                <Container>
                    <h2>Cadastrar Transação</h2>


                    <input
                    placeholder="Título"
                    /> 
                    
                    <input
                    type="Number"
                    placeholder="Valor"
                    />

                    <TransactionTypeContainer>
                        <RadioBox type="button"
                            onClick= {() =>{setType('Deposit');}}
                            isActive={type==='deposit'}
                            activeColor="green"
                       
                        >
                            <img src={incomeImg} alt="Entrada"/> 
                            <span>Entrada</span>
                        </RadioBox>
                        
                        <RadioBox type="button"
                            onClick= {() =>{setType('withdraw');}}
                            isActive={type==='withdraw'}
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="Saída"/> 
                            <span>Entrada</span>
                        </RadioBox>


                    </TransactionTypeContainer>
                    
                    <input
                    placeholder="Categoria"
                    />

                    <button type="submit">
                        Cadastrar
                    </button>
                </Container>
                
            


            </Modal>
        )
    }
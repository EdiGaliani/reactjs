import closeImg from '../../assets/close.svg';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.png'
import outcomeImg from '../../assets/outcome.png'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('desposit');

    return ( 
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-contant"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" className="smallImg" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título" />
                <input placeholder="Valor" />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={ type === 'deposit'}
                    >
                       <img src={incomeImg} alt="Entrada" />
                       <span>Entrada</span> 
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={ type === 'withdraw'}
                    >
                       <img src={outcomeImg} alt="Saída" />
                       <span>Saída</span> 
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
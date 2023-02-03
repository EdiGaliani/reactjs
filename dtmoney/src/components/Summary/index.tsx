import incomeImg from '../../assets/income.png';
import outcomeImg from '../../assets/outcome.png';
import totalImg from '../../assets/cifrao.png';
import { Container } from "./Styles";
import { TransactionsContext } from '../../TransactionsContext';
import { useContext } from 'react';

export function Summary() {
    const data = useContext(TransactionsContext);
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img className='in' src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img className='out' src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className='hightlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}
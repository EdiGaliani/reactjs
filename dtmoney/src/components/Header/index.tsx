import logoImg from '../../assets/logo.png';
import { Container, Content } from './Styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Edi Money" />
                <button type='button'>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}
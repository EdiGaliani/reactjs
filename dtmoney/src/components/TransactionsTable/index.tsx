import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./Styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[]);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="withdraw">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="deposit">-R$2.000</td>
                        <td>Casa</td>
                        <td>03/02/2023</td>
                    </tr>
                    <tr>
                        <td>Mercado</td>
                        <td className="withdraw">R$12.000</td>
                        <td>Vendas</td>
                        <td>31/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
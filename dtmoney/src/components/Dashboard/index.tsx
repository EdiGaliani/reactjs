import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./Styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}
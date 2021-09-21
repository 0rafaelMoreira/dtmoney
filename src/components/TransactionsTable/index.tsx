import { useContext,} from "react";
import {TransactionsContext} from "../../TransactonsContext"
import { Container } from "./styles";





export function TransactionsTable() {
    const { transactions} = useContext(TransactionsContext);
    console.log("ver data ", transactions)

    


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
                    {transactions.map(transaction => (
                        
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(transaction.amount)}
                        </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createAt}</td>
                        </tr>
                        
                    ))}
                </tbody>
                    <tr>
                     <td>Desenvolvimento de website</td>
                     <td className="deposit">R$1200.00</td>
                     <td>Desenvolvimento</td>
                     <td>03/09/2020</td>
                    
                    
                    </tr> 

                    <tr>
                     <td>Aluguel</td>
                     <td className="withdraw">-R$1100.00</td>
                     <td>Casa</td>
                     <td>05/09/2020</td>
                    
                    </tr>                               
            </table>
        </Container>
    );
}

function TransactionContext(TransactionContext: any) {
    throw new Error("Function not implemented.");
}

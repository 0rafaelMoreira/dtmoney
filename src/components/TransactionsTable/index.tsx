import { useEffect } from "react";
import { api } from "../../services/Api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(Data => console.log(Data))
    },[])


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
                        <td>Deposito Salario</td>
                        <td className="deposit">R$1.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/09/21</td>
                    </tr>

                    <tr>
                        <td>Dentista</td>
                        <td className="withdraw">R$ -R$500</td>
                        <td>Desenvolvimento</td>
                        <td>15/09/21</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
import { Header } from "../../components/Header";
import { HistoryContainer, HistoryList } from "./styles";

export function History(){
    return (
        <HistoryContainer>
    
            <h1>History</h1>
            <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>

                    </tr>
                </thead>
            </table>

            </HistoryList>
            
        </HistoryContainer>
    )   
}   
import { Play } from "phosphor-react"
import { Header } from "../../components/Header"
import { Botao, CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./styles"

export function Home(){
    return (
        <HomeContainer>
      
           <form action="">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em:</label>
                    <TaskInput id="task" placeholder="Dê um nome para seu projeto" list='task-suggestions'/>
                    <datalist id='task-suggestions'>
                        <option value='Projeto 1'/>
                        <option value='Projeto 2'/>
                        <option value='Projeto 3'/>
                    </datalist>

                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput type='number' id="minutesAmount"/>
                    <span>minutos</span>
                </FormContainer>

            <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>

           </CountdownContainer>
           <Botao type="submit">
            <Play size={24} />
            Começar</Botao>


           </form>
          
        </HomeContainer>
    )
}
import styled from 'styled-components'

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form { 
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme['gray-100']};
    

`

export const CountdownContainer = styled.div`
    display: flex;
    gap: 1rem;

    font-size: 10rem;

    span{
        background: ${props => props.theme['gray-700']};
        padding: 2rem 1rem;
    }
`

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const Botao = styled.button`
    width: 100%;
    background-color: ${props => props.theme['green-500']};
    cursor: pointer;
    gap:.5rem;

    display: flex;
    height: 64px;

    justify-content: center;
    align-items: center;


    outline:none;
    border: none;

    color: ${props => props.theme['gray-100']};
`

const BaseInput = styled.input`
background: transparent;
color: white;
border: 0;
outline: none;
border-bottom: 2px solid ${props => props.theme['gray-500']};
padding: 0 0.5rem;
&:focus {
    box-shadow:none; 
    ${props => props.theme['green-500']} 
}


`

export const MinutesAmountInput = styled(BaseInput)`
    width:4rem;
`
export const TaskInput = styled(BaseInput)`
flex:1;
&::-webkit-calendar-picker-indicator {display: none !important};
`
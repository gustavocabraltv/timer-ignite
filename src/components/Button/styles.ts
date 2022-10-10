import styled, {css} from 'styled-components'



export type ButtonVariant = 'primary' | 'secondary';

interface ButtonContainerProps {
    variant: ButtonVariant}


const buttonVariants = {
    primary: 'purple',
    secondary: 'orange'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 60px;

/* ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
}} */

background-color: ${props => props.theme.primary}

`
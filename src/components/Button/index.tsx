import { ReactNode, ButtonHTMLAttributes } from "react";
import {Container} from './styles';

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;


const Button = (props:ButtonProps) => {
    return <Container type="button" {...props} />
}

export default Button;
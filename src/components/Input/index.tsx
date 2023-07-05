import {Container} from './styles';
import {InputHTMLAttributes, ReactNode} from "react";

type InputProps = {
    children: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {
    return <Container {...props} />
}

export default Input;
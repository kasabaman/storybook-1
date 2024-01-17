import { ReactNode } from 'react';
import '../App.css'

interface ButtonProps {
    variant: "primary" | "default",
    children: ReactNode
};

const Button = ({ variant, children } : ButtonProps) => {
    return <button type="button" className={`btn btn-${variant}`}>
        {children}
    </button>;
};

export default Button;
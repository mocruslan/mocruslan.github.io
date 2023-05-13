import React from 'react';

interface ButtonProps {
    title: string;
    onClickAction?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClickAction }) => {
    return <button onClick={onClickAction ? onClickAction : () => {}}>{title}</button>;
}

export default Button;

import React from 'react'

interface ButtonProps {
    text: string;
    variant: string;
}

const Button = ({ text, variant }: ButtonProps) => {
    return (
        <button type="button" className={ variant  }>{ text }</button>
  )
}

export default Button
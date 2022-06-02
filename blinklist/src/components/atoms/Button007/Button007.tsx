import React, { HTMLAttributes, ReactNode } from "react";
import "./Button007.css";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: string;
}
export const Button007=({ children, variant, ...props }: Props) =>{
  // const {variant='primary',children,...rest}=props
  return (
    <button
      className={`button ${variant}`} {...props}
    >
      {children}
    </button>
  )
}



import React, { ReactNode } from 'react'

type ButtonTypes = {
    variant: 'primary' | 'secondary' | 'tertiary';
    type: 'button' | 'submit' | 'reset';
    icon?: ReactNode;
    value: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
export default function Button({
    variant, type, icon, value, onClick, disabled, className
}: ButtonTypes) {

    const getVariant = (variant: string) => {
        let defaultBtn = "w-[200px] flex gap-2 justify-center px-4 py-2 rounded-full font-bold transition duration-300 ease-in-out"
        let selectedVariant: string = ""
        if (variant === 'primary') {
            selectedVariant = `${defaultBtn} bg-black hover:bg-slate-700 text-white hover:text-slate-100 active:bg-slate-200`
        } else if (variant === 'secondary') {
            selectedVariant = `${defaultBtn} bg-gray-200 hover:bg-gray-300 text-gray-800`
        } else {
            selectedVariant = `${defaultBtn} bg-gray-500 hover:bg-gray-600 text-white`
        }
        return selectedVariant
    }

    return (
        <button
            className={getVariant(variant) + ` ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {value}{icon && icon}
        </button>
    )
}

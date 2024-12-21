export interface ButtonProps {
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large'
    /** Button contents */
    label: string
    /** Optional click handler */
    onClick?: () => void
}

/** Primary UI component for user interaction */
export const AnimateButton = ({ size = 'medium', label, ...props }: ButtonProps) => {
    return (
        <button
            type="button"
            className={`${size === 'large' ? 'px-6 py-4' : size === 'medium' ? 'px-4 py-2 text-sm' : 'px-2 py-1 text-xs'} rounded-md bg-green-500 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            {...props}
        >
            {label}
        </button>
    )
}

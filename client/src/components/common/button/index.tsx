
import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    variant: 'black' | 'white',
    sizeBtn: 'small' | 'medium' | 'large'
}

function Root({ children, variant, sizeBtn, ...props }: ButtonProps) {
    return <button {...props} className={`btn btn-${variant} btn-${sizeBtn} ${props.className}`}>{children}</button>
}

interface IconLeftProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
}

function IconLeft({ children, ...props }: IconLeftProps) {
    return <span {...props}>{children}</span>
}

interface IconRightProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
}

function IconRight({ children, ...props }: IconRightProps) {
    return <span {...props}>{children}</span>
}

export {
    Root,
    IconLeft,
    IconRight
}
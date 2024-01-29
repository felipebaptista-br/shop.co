import './style.css'

interface RootProps extends React.InputHTMLAttributes<HTMLInputElement> {
    sizeInput: 'small' | 'medium' | 'large'
}

function Root({ sizeInput, ...props }: RootProps) {
    return <input {...props} className={`input-text input-text-${sizeInput}`} type={'text'} />
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
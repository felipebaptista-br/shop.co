import './style.css'

interface UlProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode
}

function Ul({ children, ...props }: UlProps) {
    return <ul {...props} className={`ul ${props.className}`}>{children}</ul>
}

interface LiProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode
}

function Li({ children, ...props }: LiProps) {
    return <li {...props} className={`li ${props.className}`} >{children}</li>
}

export {
    Ul,
    Li
}
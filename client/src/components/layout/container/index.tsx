import './style.css'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
}

function Root({ children, ...props }: RootProps) {
    return <div {...props} className={`container ${props.className}`}>{children}</div>
}

export {
    Root
}
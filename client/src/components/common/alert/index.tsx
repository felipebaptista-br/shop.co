
import './style.css'

interface RootProps {
    type: 'success' | 'error',
    children: React.ReactNode
}

function Root({ type, children }: RootProps) {
    return <div className={`alert alert-${type}`}>{children}</div>
}

export {
    Root
}
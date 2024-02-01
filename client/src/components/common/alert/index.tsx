
import './style.css'

interface RootProps {
    type: 'success' | 'error',
    children: React.ReactNode
}

function Root({ type, children }: RootProps) {
    return <div className={`alert alert-${type}`}>{children}</div>
}

interface DescriptionProps {
    description: string
}

function Description({ description }: DescriptionProps) {
    return <p className='alert-description'>{description}</p>
}

interface IconProps {
    children: React.ReactNode
}

function Icon({ children }: IconProps) {
    return <span className='alert-icon'>{children}</span>
}

export {
    Root,
    Description,
    Icon,
}
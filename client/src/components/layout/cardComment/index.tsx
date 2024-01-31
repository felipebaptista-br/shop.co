import CommentProps from '@/interfaces/comment';
import Image from 'next/image';
import IconStar from '@/assets/icons/star.svg';

import './style.css'

interface RootProps {
    children: React.ReactNode
}

function Root({ children }: RootProps) {
    return <div className='card-comment'>{children}</div>
}

interface ClassificationProps {
    classification: CommentProps['classification']
}

function Classification({ classification }: ClassificationProps) {
    return (
        <div>
            {Array.from({ length: classification }, (_, index) => (
                <Image src={IconStar} alt='Icon Star' width={20} height={20} key={index} />
            ))}
        </div>
    )
}

interface DescriptionProps {
    comment: CommentProps['comment']
}

function Description({ comment }: DescriptionProps) {
    return <p className='card-comment-description'>{comment}</p>
}

export {
    Root,
    Classification,
    Description
}
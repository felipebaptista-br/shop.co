'use client'

import { useEffect, useState } from 'react'
import { getAllComments } from '@/api/comments-endpoints';
import { limitStringByQuantity } from '@/utils/helpers/stringLimit';
import { generateArrayByQuantity } from '@/utils/helpers/orderArray';
import { CardComment, Container } from '@/components';
import CommentProps from '@/interfaces/comment';

import './style.css'

function Root() {
    const [comments, setComments] = useState<CommentProps[]>([])

    useEffect(() => {
        const getComments = async () => {
            const response = await getAllComments();
            const commentsArray = generateArrayByQuantity<CommentProps>(response, 4);
            setComments(commentsArray);
        }


        getComments();
    }, []);

    return (
        <div className='customers'>
            <Container.Root className='customers-container'>
                <h1 className='customers-title'>OUR HAPPY CUSTOMERS</h1>
                <GridItems comments={comments} />
            </Container.Root>
        </div>
    )
}

function GridItems({ comments }: { comments: CommentProps[] }) {
    if (comments.length === 0) {
        return <h3 className='comment-empty'>AINDA NÃO ENCONTRAMOS NENHUM COMENTÁRIO :(</h3>
    }

    return (
        <div className='customers-grid'>
            {comments.map((commentItem: CommentProps) => (
                <CardComment.Root key={commentItem.id_comment}>
                    <CardComment.Classification classification={commentItem.classification} />
                    <CardComment.Description comment={limitStringByQuantity(commentItem.comment, 200)} />
                </CardComment.Root>
            ))}
        </div>
    )
}

export {
    Root
}
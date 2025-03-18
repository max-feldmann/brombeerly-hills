import React from 'react'
import Headline from '../Headline/Headline'

interface PostHeaderProps {
    postTitle: string
}

const PostHeader = ({ postTitle } : PostHeaderProps) => {
    return (
        <div className='mb-8'>
            <Headline as='h1'>{postTitle}</Headline>
        </div>
    )
}

export default PostHeader
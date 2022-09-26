import React from 'react'
import { IArticle } from '../types'
import Link from "next/link"

interface IPropType {
    article: IArticle;
}

function BlogCard({ article }: IPropType) {
    return (
        <div>
            <Link href={`/article/${article.attributes.Slug}`}>
                <h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>
                    {article.attributes.Title}
                </h1>
            </Link>
        </div>
    )
}

export default BlogCard
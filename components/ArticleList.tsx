import React from 'react'
import { IArticle } from '../types'
import BlogCard from './BlogCard';

interface IPropTYpe {
    articles: IArticle[];
}

function ArticleList({ articles }: IPropTYpe) {
    return (
        <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
            {
                articles.map((article, idx) => {
                    return (
                        <div key={article.id}>
                            <BlogCard article={article} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ArticleList
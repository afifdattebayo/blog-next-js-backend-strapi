import React from 'react'
import { IArticle } from '../types'
import Link from "next/link"
import Image from 'next/image';

interface PropType {
  article: IArticle;
}
function BlogImage({ article }: PropType) {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64">
      <Link href="#">
        <span className="text-2xl w-2/3 text-white p-5 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-sm after:mt-2 cursor-pointer">
          {article.attributes.Title}
        </span>
      </Link>
      <Image src={'/gitbook.svg'} width={140} height={140}/>
    </div>
  )
}

export default BlogImage
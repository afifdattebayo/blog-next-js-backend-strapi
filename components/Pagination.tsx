import { useRouter } from 'next/router';
import qs from 'qs';
import React from 'react'
import { TDirection } from '../types';

interface PropType {
    page: number;
    pageCount: number;
    redirectUrl?: string;
}

function Pagination({ page, pageCount, redirectUrl = "/" }: PropType) {

    const router = useRouter()

    const isNextDisabled = () => {
        return page >= pageCount;
    }
    const isPrevDisabled = () => {
        return page <= 1;
    }
    const handlePaginate = async (direction: TDirection) => {
        if (direction === 1 && isNextDisabled()) {
            return;
        }
        if (direction === -1 && isPrevDisabled()) {
            return;
        }

        const quesyString = qs.stringify({
            ...router.query,
            page: page + direction
        })

        // router.push(`${redirectUrl}?${quesyString}`)
        router.push(`${redirectUrl}?${quesyString}`)
    }
    return (
        <div className='flex justify-center mt-24'>
            <button onClick={() => handlePaginate(-1)} className={`bg-primary py-2 px-4 w-24 text-white rounded ${isPrevDisabled() && 'disabled'}`}>
                Previous
            </button>
            <button onClick={() => handlePaginate(1)} className={`bg-primary py-2 px-4 w-24 text-white rounded  ml-4 ${isNextDisabled() && 'disabled'}`}>
                Next
            </button>
        </div>
    )
}

export default Pagination
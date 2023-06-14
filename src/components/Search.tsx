'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

interface Props { }

function Search({ }: Props)
{
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`);
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    className='rounded px-4 py-2 text-black'
                    type='text'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder='Input your Search'
                />
                <button
                    type='submit'
                    className='rounded bg-primary1 px-4 py-2 text-white'
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default Search;

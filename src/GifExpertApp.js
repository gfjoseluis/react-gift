import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <h2>gif expert</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category, i) =>
                    (<GifGrid
                        key={category}
                        category={category}
                    />)
                    )
                }
            </ol>
        </>
    )
}

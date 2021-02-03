import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const setCategory = (category) => {
        if (categories.includes(category)) return;
        if (category.length <= 0) return;
        setCategories(list => [category, ...list])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategory={setCategory} />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid category={category} key={category} />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp

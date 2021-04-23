import React from 'react'

export type CategoriesListProps = {
    categories: string[]
}

const CategoriesList : React.FC < CategoriesListProps > = ({categories}) => {
    return (
        <div>
            <h2>Here are the categories to choose from:</h2>
            {categories.map((cat, index) => (
                <p key={index}>{index}: {cat}</p>
            ))
}
        </div>
    )
}

export default CategoriesList
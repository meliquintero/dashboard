import React from 'react';
import { useSelector } from 'react-redux';

export const ProductDetails = () => {
    const imageUrl = useSelector((state) => state.dashboard.product.image);
    const subtitle = useSelector((state) => state.dashboard.product.subtitle);
    const tags = useSelector((state) => state.dashboard.product.tags);
    const title = useSelector((state) => state.dashboard.product.title);

    return (
        <div className="grid-rows-subgrid col-span-1 bg-white p-2">
            <img src={imageUrl} />
            <p>{title}</p>
            <p>{subtitle}</p>
            {tags.map((tag: string) => {
                return <li>{tag}</li>;
            })}
        </div>
    );
};

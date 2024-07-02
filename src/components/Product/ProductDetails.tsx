import React from 'react';
import { useAppSelector } from '../../hooks';

export const ProductDetails = () => {
    const imageUrl = useAppSelector((state) => state.dashboard.product.image);
    const subtitle = useAppSelector((state) => state.dashboard.product.subtitle);
    const tags = useAppSelector((state) => state.dashboard.product.tags);
    const title = useAppSelector((state) => state.dashboard.product.title);

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

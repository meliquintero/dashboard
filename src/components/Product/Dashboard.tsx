import React from 'react';
import { ProductDetails } from './ProductDetails';
import { SalesTable } from './SalesTable';
import { SalesGraph } from './SalesGraph';

export const Dashboard = () => {
    return (
        <div className="mx-auto p-10 grid grid-cols-5 gap-8 bg-slate-200">
            <ProductDetails />
            <SalesGraph />
            <SalesTable />
        </div>
    );
};

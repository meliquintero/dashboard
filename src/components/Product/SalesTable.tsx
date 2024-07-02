import React from 'react';
import { useAppSelector } from '../../hooks';
import { SaleType } from '@typing/sale';

export const SalesTable = () => {
    const sales = useAppSelector((state) => state.dashboard.product.sales);

    return (
        <div className="grid-rows-subgrid bg-white col-start-2 col-end-6 ...">
            <table className="text-xs text-left rtl:text-right">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            WEEK ENDING
                        </th>
                        <th scope="col" className="px-6 py-3">
                            RETAIL SALES
                        </th>
                        <th scope="col" className="px-6 py-3">
                            WHOLESALE SALES
                        </th>
                        <th scope="col" className="px-6 py-3">
                            UNITS SOLD
                        </th>
                        <th scope="col" className="px-6 py-3">
                            RETAILER MARGIN
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale: SaleType) => {
                        return (
                            <tr>
                                <td
                                    scope="col"
                                    className="px-6 py-3 border border-slate-200 ..."
                                >
                                    {sale.weekEnding}
                                </td>
                                <td
                                    scope="col"
                                    className="px-6 py-3 border border-slate-200 ..."
                                >
                                    ${sale.retailSales.toLocaleString()}
                                </td>
                                <td
                                    scope="col"
                                    className="px-6 py-3 border border-slate-200 ..."
                                >
                                    ${sale.wholesaleSales.toLocaleString()}
                                </td>
                                <td
                                    scope="col"
                                    className="px-6 py-3 border border-slate-200 ..."
                                >
                                    {sale.unitsSold}
                                </td>
                                <td
                                    scope="col"
                                    className="px-6 py-3 border border-slate-200 ..."
                                >
                                    ${sale.retailerMargin.toLocaleString()}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

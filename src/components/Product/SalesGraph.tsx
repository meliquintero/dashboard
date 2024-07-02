import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { useAppSelector } from '../../hooks';

export const SalesGraph = () => {
    const sales = useAppSelector((state) => state.dashboard.product.sales);

    const data = sales.map((s) => {
        const date = new Date(s.weekEnding);
        const month = new Intl.DateTimeFormat('en-US', {
            month: 'short',
        }).format(date);
        return {
            name: s.weekEnding,
            uv: s.retailSales,
            pv: s.wholesaleSales,
            month,
        };
    });

    return (
        <div className="grid-rows-subgrid bg-white col-start-2 col-end-6 ...">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={data}>
                    <XAxis dataKey="month" />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#89CFF0"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#808080"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

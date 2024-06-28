const stacklineData = require('./stackline_data.json');

const getPreloadedState = (): any => {
    return {
        dashboard: {
            product: {
                ...stacklineData[0],
            },
        },
    };
};

export default getPreloadedState;

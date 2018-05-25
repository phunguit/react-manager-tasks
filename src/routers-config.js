import React from 'react';

import SigninPage from './pages/SigninPage';

const routers = [
    {
        path: '/signin',
        exact: true,
        main: () => <SigninPage />
    }
]

export default routers;
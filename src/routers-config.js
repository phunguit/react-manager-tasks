import React from 'react';

import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TasksPage from './pages/TasksPage';

const routers = [
    {
        path: '/signin',
        exact: true,
        main: () => <SigninPage />
    },
    {
        path: '/signup',
        exact: true,
        main: () => <SignupPage />
    },
    {
        path: '/tasks',
        exact: true,
        main: () => <TasksPage />
    }
]

export default routers;
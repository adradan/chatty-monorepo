import { useRoutes } from 'react-router-dom';
import { publicRoutes } from '@/routes/public.tsx';
import { Landing } from '@/features/dashboard';
import { privateRoutes } from '@/routes/protected.tsx';
import { useContext } from 'react';
import { KeyPairContext } from '@/context/keyPair.ts';

export const AppRoutes = () => {
    const { keyPair } = useContext(KeyPairContext);
    const routes = [...publicRoutes];
    if (keyPair) {
        routes.push(...privateRoutes);
    }

    const element = useRoutes([
        ...routes,
        {
            path: '/',
            element: <Landing />,
        },
    ]);

    return <>{element}</>;
};

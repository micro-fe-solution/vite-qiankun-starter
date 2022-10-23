import { Lazy } from '@pansy/micro-shared'
import { Navigate } from 'react-router-dom'

export const useRoutesConfig = () => {
  const routesConfig: any[] = [
    {
      path: 'home',
      element: <Lazy entry={() => import('@/pages/home')} />,
    },
    {
      path: '*',
      element: <Navigate to="/home" replace={true} />
    },
  ];

  return routesConfig;
}

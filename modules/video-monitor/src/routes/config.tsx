import { Navigate } from 'react-router-dom'
import { Lazy } from '@pansy/micro-shared'

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

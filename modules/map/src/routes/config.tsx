import { Lazy } from '@pansy/micro-shared'

export const useRoutesConfig = () => {
  const routesConfig: any[] = [
    {
      path: 'home',
      element: <Lazy entry={() => import('@/pages/home')} />,
    },
  ];

  return routesConfig;
}

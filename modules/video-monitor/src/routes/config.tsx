import { Lazy } from '@pansy/micro-shared'

export const useRoutesConfig = () => {
  const routesConfig: any[] = [
    {
      path: '',
      element: <Lazy entry={() => import('@/pages')} />,
    },
    {
      path: 'home',
      element: <Lazy entry={() => import('@/pages/home')} />,
    },
  ];

  return routesConfig;
}

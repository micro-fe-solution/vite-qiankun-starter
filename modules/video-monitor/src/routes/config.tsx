import { Lazy } from '@/components/Lazy'

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

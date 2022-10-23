import { Lazy, MicroApp } from '@pansy/micro-shared'

export const useRoutesConfig = () => {
  const routesConfig: any[] = [
    {
      path: 'login',
      element: <Lazy entry={() => import('@/pages/login')} />,
    },
    {
      path: '',
      element: <Lazy entry={() => import('@/pages/home')} />,
    },
    {
      title: '实时视频',
      path: 'video-monitor',
      element: (
        <MicroApp
          name="video-monitor"
          sandbox={{
            experimentalStyleIsolation: true,
          }}
          props={{}}
        />
      ),
    },
  ];

  return routesConfig;
}

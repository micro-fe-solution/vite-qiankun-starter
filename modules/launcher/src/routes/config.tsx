import { Lazy, MicroApp } from '@pansy/micro-shared'
import { Navigate } from 'react-router-dom'
import BasicLayout from '@/layouts/BasicLayout'

export const useRoutesConfig = () => {
  const routesConfig: any[] = [
    {
      element: <BasicLayout />,
      children: [
        {
          children: [
            {
              path: 'home',
              title: '首页',
              element: <Lazy entry={() => import('@/pages/home')} />,
            },
          ]
        },
        {
          path: 'micro',
          children: [
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
            {
              title: '地图模块',
              path: 'map',
              element: (
                <MicroApp
                  name="map"
                  sandbox={{
                    experimentalStyleIsolation: true,
                  }}
                  props={{}}
                />
              ),
            },
          ]
        },
      ]
    },
    {
      path: 'login',
      element: <Lazy entry={() => import('@/pages/login')} />,
    },
    {
      path: '*',
      element: <Navigate to="/home" replace={true} />
    },
  ];

  return routesConfig;
}

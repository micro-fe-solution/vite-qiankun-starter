import { CrownFilled, DashboardFilled, TabletFilled,  } from '@ant-design/icons';

export const navigation = {
  path: '/',
  routes: [
    {
      path: '/home',
      name: '首页',
      icon: <DashboardFilled />,
    },
    {
      path: '/micro/map',
      name: '地图示例',
      icon: <CrownFilled />,
      access: 'canAdmin',
      routes: [
        {
          path: '/micro/map#/home',
          name: '设备聚合',
          icon: <CrownFilled />,
        },
      ],
    },
    {
      name: '列表页',
      icon: <TabletFilled />,
      path: '/list',
      routes: [
        {
          path: '/list/sub-page',
          name: '列表页面',
          icon: <CrownFilled />,
          routes: [
            {
              path: 'sub-sub-page1',
              name: '一一级列表页面',
              icon: <CrownFilled />,
            },
            {
              path: 'sub-sub-page2',
              name: '一二级列表页面',
              icon: <CrownFilled />,
            },
            {
              path: 'sub-sub-page3',
              name: '一三级列表页面',
              icon: <CrownFilled />,
            },
          ],
        },
        {
          path: '/list/sub-page2',
          name: '二级列表页面',
          icon: <CrownFilled />,
        },
        {
          path: '/list/sub-page3',
          name: '三级列表页面',
          icon: <CrownFilled />,
        },
      ],
    },
  ],
}

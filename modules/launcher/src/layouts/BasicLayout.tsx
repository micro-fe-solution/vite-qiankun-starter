import { Outlet } from 'react-router-dom'
import { GithubFilled, } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-layout';

import logo from '@/assets/logo.svg';

import { navigation } from './navigation';

export default function Layout() {
  return (
    <ProLayout
      title="Vite Qiankun Starter"
      logo={logo}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: (
          <div
            style={{
              color: '#dfdfdf',
            }}
          >
            七妮妮
          </div>
        ),
      }}
      route={navigation}
      actionsRender={(props) => {
        if (props.isMobile) return [];

        return [
          <GithubFilled key="GithubFilled" onClick={() => { window.open('https://github.com/micro-fe-solution/vite-qiankun-starter') }} />,
        ]
      }}
    >
      <Outlet />
    </ProLayout>
  )
}

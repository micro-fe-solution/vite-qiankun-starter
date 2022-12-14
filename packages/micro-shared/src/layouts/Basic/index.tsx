import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

export function BasicLayout() {
  return (
    <Layout className="components-layout-demo">
      <Header>Header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

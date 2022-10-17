import { Layout } from 'antd';
import { useOutlet } from 'react-router-dom';

export const BasicLayout = (props: any) => {
  const outlet = useOutlet();

  return (
    <Layout>
      {outlet}
    </Layout>
  )
}
import { Map } from '@pansy/react-amap'
import { callbackify } from 'util'

export default function Home() {
  return (
    <div style={{ height: 'calc(100vh - 48px)' }}>
      <Map />
    </div>
  )
}

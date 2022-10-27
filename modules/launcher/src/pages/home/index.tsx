import { proxy, useSnapshot } from 'valtio';
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

const store = proxy({
  count: 0,
  actions: {
	  add() {
	    // 注意这里别用 this.count，基于 snap 调用时会报错
	    store.count += 1;
	  },
  }
});

export default function Home() {
  const navigaten = useNavigate();
  const snap = useSnapshot(store);

  const handleClock = () => {
    snap.actions.add();
    navigaten('/micro/video-monitor')
  }

  return (
    <div style={{ height: '100vh' }}>
      <Button onClick={handleClock}>点击{snap.count}</Button>
    </div>
  )
}

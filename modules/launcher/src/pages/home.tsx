import { proxy, useSnapshot } from 'valtio';
import { Button } from '@douyinfe/semi-ui';

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
  const snap = useSnapshot(store);

  return (
    <div style={{ height: '100vh' }}>
      <Button onClick={snap.actions.add}>点击{snap.count}</Button>
    </div>
  )
}

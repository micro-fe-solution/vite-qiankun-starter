import React, { Suspense, useMemo, lazy } from 'react'
import { useLocation } from 'react-router-dom'

export const Lazy = ({ entry }: any) => {
  const location = useLocation();
  const Comp = useMemo(() => lazy(entry), [location.pathname]);

  return (
    <Suspense fallback={null}>
      <Comp />
    </Suspense>
  )
}

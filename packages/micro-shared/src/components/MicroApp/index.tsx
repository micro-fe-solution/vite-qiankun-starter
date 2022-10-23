import { useLocation } from 'react-router-dom'
import { loadMicroApp, initGlobalState } from 'qiankun'
import React, { useState, useRef, useEffect, memo, lazy } from 'react'

import type { FrameworkConfiguration, MicroApp as QMicroApp } from 'qiankun'

interface MicroAppProps extends FrameworkConfiguration {
  /** 微应用的名称 */
  name: string
  /** 微应用的入口 */
  entry?: string
  /** 初始化时需要传递给微应用的数据 */
  props?: any
  [key: string]: any
}

const microAppEntryCache: any = {}
const actions = initGlobalState({ hash: '' })
const Lazy = lazy(() => new Promise(() => null))

let prevAppUnmountPromise: Promise<unknown> = Promise.resolve()

function run(fn: any, ...params: any[]) {
  if (typeof fn === 'function') {
    return fn(...params)
  }

  return undefined
}

const BaseMicroApp = memo(function MicroApp({
  name,
  entry,
  sandbox = true,
  props = {},
}: MicroAppProps) {
  const location = useLocation()
  const [ready, setReady] = useState(false)

  const microApp = useRef<QMicroApp>()
  const container = useRef<any>()

  useEffect(
    () => {
      async function mount() {
        await prevAppUnmountPromise

        window[name as any] = microAppEntryCache[name] ?? window[name as any]

        microApp.current = loadMicroApp(
          {
            name,
            entry: entry!,
            container: container.current,
            props,
          },
          {
            sandbox,
          }
        )

        microApp.current.mountPromise.then(() => {
          if (window[name as any]) {
            microAppEntryCache[name] = window[name as any]
          }

          setReady(true)
        })
      }

      mount()

      return () => {
        // debugger
        prevAppUnmountPromise = Promise.resolve(run(microApp.current?.unmount)).then(
          () => {
            // debugger
          }
        )
      }
    },
    []
  )

  useEffect(
    () => {
      if (!microApp.current) {
        return
      }
      run(microApp.current?.update, {
        container: container.current,
        props: {
          ...props,
          location,
        },
      })
    },
    [location, Object.values(props)]
  )

  useEffect(() => {
    actions.setGlobalState(location)
  }, [location])

  return (
    <>
      <div className="micro-wrapper" ref={container} />
      {!ready && <Lazy />}
    </>
  )
})

export function MicroApp(props: MicroAppProps) {
  return <BaseMicroApp key={props.name} entry={`/${props.name}/`} {...props} />
}

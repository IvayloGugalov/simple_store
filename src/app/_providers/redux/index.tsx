'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { storeInstance, AppStore } from './store'

export default function ReduxStoreProvider({children}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = storeInstance()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
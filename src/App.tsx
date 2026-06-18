import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToastProvider from './components/ToastProvider'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Bond = lazy(() => import('./pages/Bond'))
const TrustScore = lazy(() => import('./pages/TrustScore'))
const AmountInputTestPage = lazy(() => import('./pages/AmountInputTestPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="bond" element={<Bond />} />
              <Route path="trust" element={<TrustScore />} />
              <Route path="test-amount-input" element={<AmountInputTestPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App

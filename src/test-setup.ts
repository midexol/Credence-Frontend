import '@testing-library/jest-dom'

// Vitest/jsdom environments may not provide matchMedia.
// SettingsContext uses matchMedia for theme syncing; provide a minimal stub for tests.
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  window.matchMedia = () => {
    return {
      matches: false,
      media: '',
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    } as MediaQueryList
  }
}


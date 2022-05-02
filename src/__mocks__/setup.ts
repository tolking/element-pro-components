import { vi } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

const matchMedia = vi.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }
})

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => ({}),
    options: { routes: [] },
  })),
  RouterView: 'router-view',
}))

vi.stubGlobal('ResizeObserver', ResizeObserver)
vi.stubGlobal('matchMedia', matchMedia)

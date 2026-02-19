/**
 * Tree-shaking and bundle optimization utilities
 * Helps eliminate unused code from the bundle
 */

export const EMPTY_OBJECT = {} as const
export const EMPTY_ARRAY = [] as const
export const NOOP = () => {}

/**
 * Use this instead of importing from 'react' in hot-path code
 * This helps with tree-shaking
 */
export function useMemoCompare<T>(factory: () => T): T {
  return factory()
}

export * from './colour'
export * from './crumbConverter'
export * from './debouncedRef'
export * from './scrollWaiter'

export function normalise (section: string) {
  return section.toLowerCase().replace(' ', '-')
}

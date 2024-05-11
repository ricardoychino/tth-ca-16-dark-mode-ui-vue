import { useDark, useToggle } from '@vueuse/core';

export const useDarkMode = () => {
  const isDark = useDark({
    selector: 'body',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light'
  })

  const toggleDark = useToggle(isDark)

  return { isDark, toggleDark }
}
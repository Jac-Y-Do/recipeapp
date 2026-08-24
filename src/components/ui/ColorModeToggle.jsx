import { useEffect, useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { LuMoon, LuSun, LuCog } from 'react-icons/lu'

export function ColorModeToggle () {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // This code runs once, right after the component is shown in the browser
    setMounted(true) // Set the mounted useState value
  }, [])

  // Pick theme if available, otherwise use resolvedTheme
  const current = theme ?? resolvedTheme

  // Helper function, returns true if the button's mode matches current theme
  const isActive = mode => {
    return current === mode
  }

  // If the component is not yet mounted in the browser, don't show anything (return nothing instead of UI).
  if (!mounted) return null

  return (
    <ButtonGroup isAttached size='xs' aria-label='Theme toggle'>
      <Button
        onClick={() => setTheme('light')}
        color={isActive('light') ? undefined : 'white'}
        variant={
          isActive('light')
            ? 'solid' // if the light theme is active
            : 'ghost' // otherwise
        }
        _hover={
          isActive('light')
            ? undefined
            : {
                _light: { color: '#283618' }, // in light mode
                _dark: { color: '#C6CBAD' } // in dark mode
              }
        }
      >
        <LuSun />
      </Button>
      <Button
        onClick={() => setTheme('dark')}
        color={isActive('dark') ? undefined : 'white'}
        variant={
          isActive('dark')
            ? 'solid' // if the dark theme is active
            : 'ghost' // otherwise
        }
        _hover={
          isActive('dark')
            ? undefined
            : {
                _light: { color: '#283618' }, // in light mode
                _dark: { color: '#C6CBAD' } // in dark mode
              }
        }
      >
        <LuMoon />
      </Button>
      <Button
        onClick={() => setTheme('system')}
        color={
          isActive('system') ? undefined : 'white' // apply white styling when not selected
        }
        variant={
          isActive('system')
            ? 'solid' // if the system theme is active
            : 'ghost' // otherwise show the ghost (greyed out) button
        }
        _hover={
          isActive('dark')
            ? undefined
            : {
                _light: { color: '#283618' }, // in light mode
                _dark: { color: '#C6CBAD' } // in dark mode
              }
        }
      >
        <LuCog />
      </Button>
    </ButtonGroup>
  )
}

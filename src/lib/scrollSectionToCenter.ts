'use client'

export function scrollSectionToCenter(id: string, behavior: ScrollBehavior = 'smooth') {
  const section = document.getElementById(id)
  if (!section) return false

  section.scrollIntoView({
    behavior,
    block: 'center',
    inline: 'nearest',
  })

  return true
}

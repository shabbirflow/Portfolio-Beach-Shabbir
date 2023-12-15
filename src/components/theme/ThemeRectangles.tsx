import { FC } from 'react'

interface themeRectanglesProps {
  theme: any; themeName: string;
}

const ThemeRectangles: FC<themeRectanglesProps> = ({theme, themeName}) => {
    
    const primary = theme[themeName].primary;
    const secondary = theme[themeName].secondary;
    const accent = theme[themeName].accent;
    const base100 = theme[themeName]["base-100"];

return <span className='grid grid-cols-3 gap-none w-9 md:w-11'>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="12" height="20" x="6" y="2" rx="2" fill={base100} />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="12" height="20" x="6" y="2" rx="2" fill={primary} />
  </svg>
  </span>
}

export default ThemeRectangles
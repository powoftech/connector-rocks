import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

export default {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      fontSize: {
        'system-10-font-size': 'var(--system-10-font-size)',
        'system-11-font-size': 'var(--system-11-font-size)',
        'system-12-font-size': 'var(--system-12-font-size)',
        'system-13-font-size': 'var(--system-13-font-size)',
        'system-14-font-size': 'var(--system-14-font-size)',
        'system-15-font-size': 'var(--system-15-font-size)',
        'system-16-font-size': 'var(--system-16-font-size)',
        'system-18-font-size': 'var(--system-18-font-size)',
        'system-20-font-size': 'var(--system-20-font-size)',
        'system-22-font-size': 'var(--system-22-font-size)',
        'system-24-font-size': 'var(--system-24-font-size)',
        'system-26-font-size': 'var(--system-26-font-size)',
        'system-28-font-size': 'var(--system-28-font-size)',
        'system-30-font-size': 'var(--system-30-font-size)',
        'system-32-font-size': 'var(--system-32-font-size)',
        'system-40-font-size': 'var(--system-40-font-size)',
      },
      lineHeight: {
        'system-10-line-height': 'var(--system-10-line-height)',
        'system-11-line-height': 'var(--system-11-line-height)',
        'system-12-line-height': 'var(--system-12-line-height)',
        'system-14-line-height': 'var(--system-14-line-height)',
        'system-15-line-height': 'var(--system-15-line-height)',
        'system-16-line-height': 'var(--system-16-line-height)',
        'system-18-line-height': 'var(--system-18-line-height)',
        'system-20-line-height': 'var(--system-20-line-height)',
        'system-22-line-height': 'var(--system-22-line-height)',
        'system-24-line-height': 'var(--system-24-line-height)',
        'system-26-line-height': 'var(--system-26-line-height)',
        'system-28-line-height': 'var(--system-28-line-height)',
        'system-30-line-height': 'var(--system-30-line-height)',
        'system-32-line-height': 'var(--system-32-line-height)',
        'system-40-line-height': 'var(--system-40-line-height)',
      },
      colors: {
        'barcelona-secondary-background': 'var(--barcelona-secondary-background)',
        'barcelona-elevated-background': 'var(--barcelona-elevated-background)',
        'barcelona-tertiary-background': 'var(--barcelona-tertiary-background)',
        'barcelona-primary-button-background': 'var(--barcelona-primary-button-background)',
        'barcelona-primary-column-outline': 'var(--barcelona-primary-column-outline)',
        'barcelona-threadline': 'var(--barcelona-threadline)',
        'barcelona-side-navigation-background': 'var(--barcelona-side-navigation-background)',
        'barcelona-navigation-item-hover-background': 'var(--barcelona-navigation-item-hover-background)',
        'barcelona-primary-icon': 'var(--barcelona-primary-icon)',
        'barcelona-secondary-icon': 'var(--barcelona-secondary-icon)',
        'barcelona-navigation-icon': 'var(--barcelona-navigation-icon)',
        'barcelona-primary-text': 'var(--barcelona-primary-text)',
        'barcelona-primary-outline': 'var(--barcelona-primary-outline)',
        'barcelona-hovered-background': 'var(--barcelona-hovered-background)',
        'barcelona-error-text': 'var(--barcelona-error-text)',
        'barcelona-secondary-text': 'var(--barcelona-secondary-text)',
        'barcelona-box-shadow-04': 'var(--barcelona-box-shadow-04)',
        'barcelona-box-shadow-08': 'var(--barcelona-box-shadow-08)',
        'barcelona-box-shadow-10': 'var(--barcelona-box-shadow-10)',
        'barcelona-box-shadow-12': 'var(--barcelona-box-shadow-12)',
        'barcelona-box-shadow-15': 'var(--barcelona-box-shadow-15)',
      },
      transitionDuration: {
        'fds-duration-extra-extra-short-out': 'var(--fds-duration-extra-extra-short-out)',
      },
      transitionTimingFunction: {
        'fds-animation-fade-out': 'var(--fds-animation-fade-out)',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(20%)', opacity: '0' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-20%)', opacity: '0' },
        },
        'theme-fade': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 200ms ease-out',
        'slide-out-right': 'slide-out-right 200ms ease-out',
        'slide-in-left': 'slide-in-left 200ms ease-out',
        'slide-out-left': 'slide-out-left 200ms ease-out',
        'theme-fade': 'theme-fade 200ms ease-out',
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config

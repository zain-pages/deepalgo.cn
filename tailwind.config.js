/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 主色调：墨蓝色 Ink Blue
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581', // 主色
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#061726',
        },
        // 辅色：深蓝色 Deep Blue
        secondary: {
          50: '#edf2f7',
          100: '#e2e8f0',
          200: '#cbd5e0',
          300: '#a0aec0',
          400: '#718096',
          500: '#4a5568',
          600: '#2d3748',
          700: '#1a202c',
          800: '#171923',
          900: '#0d1117',
          950: '#000000',
        },
        // 中性色 Slate
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        // 墨蓝色彩色阴影系统
        'soft': '0 4px 20px -2px rgba(72, 101, 129, 0.1)',
        'soft-lg': '0 10px 25px -5px rgba(72, 101, 129, 0.15), 0 8px 10px -6px rgba(72, 101, 129, 0.1)',
        'glow': '0 0 20px rgba(72, 101, 129, 0.5)',
        'button': '0 4px 14px 0 rgba(72, 101, 129, 0.3)',
        'colored': '0 10px 40px -10px rgba(72, 101, 129, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #486581 0%, #2d3748 100%)',
        'gradient-hero': 'linear-gradient(135deg, #f0f4f8 0%, #edf2f7 100%)',
        'gradient-dark': 'linear-gradient(135deg, #102a43 0%, #0d1117 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '0.75rem', // 12px for cards
        '2xl': '1rem',   // 16px
        '3xl': '1.5rem', // 24px
      },
    },
  },
  plugins: [],
}

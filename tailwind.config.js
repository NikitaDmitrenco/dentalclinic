/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          'surface-alt': '#F1F5F9',
          border: '#E2E8F0',
          'border-hover': '#CBD5E1',
          text: '#0F172A',
          'text-muted': '#334155',
          'text-subtle': '#64748B',
          primary: '#0284C7', // Medical Sky Blue
          'primary-hover': '#0369A1',
          'primary-active': '#075985',
          'primary-light': '#F0F9FF',
          'primary-border': '#BAE6FD',
          accent: '#0E7490',
          success: '#059669',
          'success-bg': '#ECFDF5',
          error: '#DC2626',
          'error-bg': '#FEF2F2',
        }
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '6px',
        md: '6px',
        lg: '6px',
        xl: '6px',
        '2xl': '6px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'subtle-lg': '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      }
    },
  },
  plugins: [],
}

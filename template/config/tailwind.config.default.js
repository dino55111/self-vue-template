const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    spacing: () => {
      const multipleFour = {}
      for (let i = 2; i <= 120; i++) {
        multipleFour[i * 4] = i * 4 + 'px'
      }
      return Object.assign({}, {
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px'
      }, multipleFour)
    },
    space: (theme) => {
      return Object.assign({}, theme('spacing'))
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: {
        100: '#F3F3F3',
        200: '#EEEEEE',
        300: '#DDDDDD',
        400: '#A9A9A9',
        500: '#7E7E7E',
        600: '#292929'
      }
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900
    },
    borderRadius: {
      none: '0',
      default: '4px',
      full: '50%'
    },
    boxShadow: {
      '028': '0 2px 8px 0 rgba(41, 41, 41, .2)',
      '008': '0 0 8px 0 rgba(41, 41, 41, .2)',
      '024': '0 2px 4px 0 rgba(41, 41, 41, .2)'
    },
    extend: {
      minWidth: theme => {
        return theme('spacing')
      },
      maxWidth: theme => {
        const result = {}
        for (const key in theme('screens')) {
          result['screen-' + key] = theme('screens')[key].max
        }
        return {
          ...result,
          ...theme('spacing')
        }
      },
      minHeight: theme => {
        return theme('spacing')
      },
      maxHeight: theme => {
        return theme('spacing')
      },
      inset: {
        '1/2': '50%'
      },
      opacity: {
        16: '.16'
      }
    }
  },
  corePlugins: {},
  variants: {},
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, config }) {
      addBase({
        'html, body': {
          'min-width': '320px',
          color: config('theme.colors.gray.600'),
          'font-size': config('theme.fontSize.base')[0],
          'line-height': config('theme.fontSize.base')[1],
          'background-color': config('theme.colors.gray.100'),
          'font-family': 'Arial, "微軟正黑體", "Microsoft JhengHei", Roboto, "PingFangTC", sans-serif',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale'
        }
      })
    })
  ]
}
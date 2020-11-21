const value = [
  {
    // numeric
    pattern: /\$(\\?.)*?\$/m,
    alias: 'number',
    inside: {
      'punctuation': /\$/
    }
  },
  {
    // boolean
    pattern: /`(true|false)`$/m,
    alias: 'boolean',
    inside: {
      'punctuation': /`/
    }
  },
  {
    // string
    pattern: /(.+)$/m,
    alias: 'string'
  }
]

Prism.languages.ream = {
      'header': {
          // # Entry Level 1
          // ## Entry Level 2
          pattern: /(^\s*)#+.+$/m,
          lookbehind: true,
          inside: {
            'punctuation': /^#+|#+$/
          }
      },
      'keyValuePair': {
        pattern: /(^\s*)- .+:( .+|\s*)$/m,
        inside: {
          'key': {
            pattern: /(^- .+)(?=:)/m,
            inside: {
              'punctuation': /^-/
            }
          },
          'semiolon': {
            pattern: /: /m,
            alias: 'punctuation'
          },
          'value': value
        }
      },
      'comment': {
          pattern: /^\s*> .+$/m,
          inside: {
            'punctuation': /^\s*>/
          }
      },
      'listItem': {
        pattern: /^\s*\* .+$/m,
        inside: {
          'punctuation': /\*/,
          'value': value
        }
      }
}

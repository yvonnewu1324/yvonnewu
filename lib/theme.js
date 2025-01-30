// import {extendTheme} from "@chakra-ui/react";
// import {mode} from "@chakra-ui/theme-tools";

// const styles = {
//     global: props => ({
//         body: {
//             bg:mode("#f0e7db", "#202023")(props)
//         }
//     })
// }

// const components = {
//     Heading: {
//         variants: {
//             "section-title": {
//                 textDecoration: "underline",
//                 fontSize: 20,
//                 textUnderlineOffset: 6,
//                 textDecorationColor: "#525252",
//                 textDecorationThickness: 4,
//                 marginTop: 3,
//                 marginBottom: 4
//             }
//         }
//     },
//     Link: {
//         baseStyle: props => ({
//             color: mode("#23d7aed", "#ff63c3")(props),
//             textUnderlineOffset: 3
//         })
//     }
// }


// const fonts = {
// heading: "'M PLUS Rounded 1c'",
// body: "'M PLUS Rounded 1c'",
//     // heading: "'Sour Gummy', Monospace",
//     // body: "'Sour Gummy', Monospace"
// }

// const colors = {
//     glassTeal: "#88ccca"
// }

// const config = {
//     initalColorMode: "dark",
//     useSystemColorMode: true
// }

// const theme = extendTheme({
//     config,
//     styles,
//     components,
//     colors,
//     fonts
// })

// export default theme
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Varela Round'",
  body:   "'Varela Round'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
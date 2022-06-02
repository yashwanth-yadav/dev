import React from "react"
import {addDecorator} from '@storybook/react'

import { ThemeProvider,CSSReset,theme } from "@chakra-ui/react"

addDecorator(story=>(
<ThemeProvider theme={theme}>
  <CSSReset/>
  {story()}
</ThemeProvider>
  ))
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
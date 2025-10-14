import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import themeConfig from "@/themes/themeConfig.ts";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import RouteConfig from "@/routeConfig/RouteConfig.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <ThemeProvider theme={themeConfig}>
          <CssBaseline />
          <BrowserRouter>
              <Box sx={{
                  flex: 1,
                  display:'flex',
                  width: '100%',
                  overflow: 'auto'
              }}>
                  <RouteConfig />
              </Box>
          </BrowserRouter>
      </ThemeProvider>
  )
}

export default App

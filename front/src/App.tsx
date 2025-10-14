import './App.css'
import themeConfig from "@/themes/themeConfig.ts";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import RouteConfig from "@/routeConfig/RouteConfig.tsx";

function App() {

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

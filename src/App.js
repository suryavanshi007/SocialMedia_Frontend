import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
     <BrowserRouter>
     <ThemeProvider theme={theme}>
      <CssBaseline />
     <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile/:id" element={<ProfilePage/>}/>
     </Routes>
     </ThemeProvider>
     </BrowserRouter> 

    </div>
  );
}

export default App;

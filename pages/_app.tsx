import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import {AppProvider} from "../contexts/AppContext"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system" // default "light"
    >
      <AppProvider>
      <Component {...pageProps} />
     </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;

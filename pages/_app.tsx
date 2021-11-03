import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {AppProvider} from "../contexts/AppContext"
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps } :AppProps) {
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

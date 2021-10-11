import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system" // default "light"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

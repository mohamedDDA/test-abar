import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "../components/LoadingSpinner";
import "../styles/globals.css";
import "../styles/media.css";
import "../styles/all.min.css"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();
  const startTime = useRef(null);

  useEffect(() => {
    const handleStart = () => {
      startTime.current = Date.now();
      setFadeOut(false);
      setLoading(true);
    };

    const handleComplete = () => {
      const elapsed = Date.now() - startTime.current;
      const minDelay = 500;
      const remaining = minDelay - elapsed;

      const hide = () => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 500); // Matches CSS fade duration
      };

      if (remaining > 0) {
        setTimeout(hide, remaining);
      } else {
        hide();
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <LoadingSpinner fadeOut={fadeOut} />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

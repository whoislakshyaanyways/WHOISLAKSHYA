import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 1. Try the standard window scroll
    window.scrollTo(0, 0);

    // 2. Try the HTML element
    document.documentElement.scrollTo(0, 0);

    // 3. Try the Body element
    document.body.scrollTo(0, 0);

    // 4. THE KEY: Target the React Root (where your scroll likely lives)
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

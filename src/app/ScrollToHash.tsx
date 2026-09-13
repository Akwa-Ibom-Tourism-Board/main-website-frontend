import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// react-router's client-side navigation never triggers the browser's native
// "jump to #fragment" behavior, so hash links (Hero's /#hotels, Navbar's
// /#contact, Footer's #culture, ...) would otherwise do nothing when clicked.
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    const timeout = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);

    return () => clearTimeout(timeout);
  }, [hash]);

  return null;
};

export default ScrollToHash;

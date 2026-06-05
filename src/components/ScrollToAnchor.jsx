import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, pathname]);

  return null;
}

export default ScrollToAnchor;

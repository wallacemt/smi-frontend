import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function TopLoadingBar() {
  const location = useLocation();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    NProgress.start();
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [location.pathname]);

  return null;
}

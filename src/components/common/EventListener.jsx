import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMobile } from "../../reducers/common";

export default function EventListener() {
  const location = useLocation();
  const dispatch = useDispatch();

  function handleResize() {
    if (window.innerWidth >= 1200) dispatch(setMobile(false));
    else dispatch(setMobile(true));
  }

  useLayoutEffect(() => {


    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <></>;
}

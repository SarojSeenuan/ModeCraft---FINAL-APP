import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";

function ScrollToTop() {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();
    useEffect(() => {
        if (navigationType === "PUSH" || navigationType === "REPLACE") {
            window.scrollTo(0, 0);
        }
    }, [ pathname, navigationType ]);

    return null;
}

export default ScrollToTop;
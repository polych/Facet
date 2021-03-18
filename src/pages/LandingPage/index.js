import React, { useEffect, useRef } from "react";
import "./index.scss";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import PageWraper from "../../components/PageWraper";
import landingPages from "../../pages";
import { changeLpPage } from "../../store/actions/generalAction";
import { viewHeight } from "../../helpers/general";
const LandingPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.general.lpPage);
  const ref = useRef(null);
  const updateScroll = (event, eventName, position) => {
    let wrapper;
    wrapper = document.getElementsByClassName("overflow_wrap");
    viewHeight();
    wrapper = Object.values(wrapper);
    const element = wrapper.filter(
      (el) => el === event.target || el.contains(event.target)
    );
    let fullHeight;
    let height;
    let top;
    let scrollToEnd;
    if (element.length > 0) {
      fullHeight = element[0].scrollHeight;
      height = element[0].clientHeight;
      top = element[0].scrollTop;
      scrollToEnd = top + height;
    }

    if (eventName === "touchmove") {
      if (position === 1 && page !== 6) {
        if (element.length < 1 || scrollToEnd >= fullHeight) {
          dispatch(changeLpPage(page + 1));
        }
      }
      if (position === 0 && page !== 0) {
        if (element.length < 1 || top <= 0) {
          dispatch(changeLpPage(page - 1));
        }
      }
    } else {
      if (event.deltaY > 0 && page !== 6) {
        if (element.length < 1 || scrollToEnd >= fullHeight) {
          dispatch(changeLpPage(page + 1));
        }
      }
      if (event.deltaY < 0 && page !== 0) {
        if (element.length < 1 || top <= 0) {
          dispatch(changeLpPage(page - 1));
        }
      }
    }
  };
  const debounced = useDebouncedCallback(updateScroll, 80);

  useEffect(() => {
    const event = window.innerWidth >= 1200 ? "wheel" : "touchmove";
    const block = ref.current;
    if (ref) {
      if (event === "touchmove") {
        viewHeight();
        let start = null;
        block.addEventListener("touchstart", function (e) {
          start = e.changedTouches[0];
        });
        block.addEventListener("touchend", function (e) {
          let end = e.changedTouches[0];
          if (end.screenY - start.screenY < -20) {
            debounced.callback(e, "touchmove", 1);
          } else if (end.screenY - start.screenY > 20) {
            debounced.callback(e, "touchmove", 0);
          }
        });
      } else {
        block.addEventListener(event, debounced.callback);
      }
    }
    document.body.style.overflow = "hidden";

    return () => {
      block.removeEventListener(event, debounced.callback);
      document.body.style.overflow = "unset";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div ref={ref}>
      <PageWraper
        leftContent={landingPages[page].leftContent}
        pageTitle={landingPages[page].pageTitle}
        rightContent={landingPages[page].rightContent}
        pageClass={landingPages[page].pageClass}
      />
    </div>
  );
};

export default LandingPage;

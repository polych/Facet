import React, { useEffect, useRef } from "react";
import "./index.scss";
import { useDebouncedCallback, useThrottledCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import PageWraper from "../../components/PageWraper";
import landingPages from "../../pages";
import { changeLpPage } from "../../store/actions/generalAction";
const LandingPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.general.lpPage);
  const ref = useRef(null);

  const updateScroll = (event, eventName, position) => {
    let wrapper;
    // if (eventName === "touchmove") {
    //   wrapper = document.getElementsByClassName("wrap_mob");
    // } else {
    wrapper = document.getElementsByClassName("overflow_wrap");
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
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
    console.log(element);
    console.log(fullHeight, scrollToEnd);

    if (eventName === "touchmove") {
      if (position === 1 && page !== 6) {
        if (element.length < 1 || scrollToEnd === fullHeight) {
          dispatch(changeLpPage(page + 1));
        }
      }
      if (position === 0 && page !== 0) {
        if (element.length < 1 || top === 0) {
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
  const debounced = useThrottledCallback(updateScroll, 1000);

  useEffect(() => {
    const event = window.innerWidth >= 1200 ? "wheel" : "touchmove";
    const block = ref.current;
    if (ref) {
      if (event === "touchmove") {
        let start = null;
        block.addEventListener("touchstart", function (e) {
          start = e.changedTouches[0];
        });
        block.addEventListener("touchend", function (e) {
          let end = e.changedTouches[0];
          if (end.screenY - start.screenY < 0) {
            debounced.callback(e, "touchmove", 1);
          } else if (end.screenY - start.screenY > 0) {
            debounced.callback(e, "touchmove", 0);
          }
        });
      } else {
        block.addEventListener(event, debounced.callback);
      }
    }
    return () => block.removeEventListener(event, debounced.callback);
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

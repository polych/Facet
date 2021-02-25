import React, { useEffect, useRef } from "react";
import "./index.scss";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import PageWraper from "../../components/PageWraper";
import landingPages from "../../pages";
import { changeLpPage } from "../../store/actions/generalAction";

const LandingPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.general.lpPage);
  const ref = useRef(null);

  const updateScroll = (event) => {
    let wrapper = document.getElementsByClassName("overflow_wrap");
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
    if (event.deltaY > 0 && page !== 6) {
      if (element.length < 1 || scrollToEnd === fullHeight) {
        dispatch(changeLpPage(page + 1));
      }
    }
    if (event.deltaY < 0 && page !== 0) {
      if (element.length < 1 || top === 0) {
        dispatch(changeLpPage(page - 1));
      }
    }
  };
  const debounced = useDebouncedCallback(updateScroll, 50);

  useEffect(() => {
    const block = ref.current;
    if (ref) {
      block.addEventListener("wheel", debounced.callback);
    }
    return () => block.removeEventListener("wheel", debounced.callback);
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

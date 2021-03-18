import React, { useEffect } from "react";
import { v4 } from "uuid";
import TextBlock from "../../components/UiComponents/TextBlock";
import RoundBtn from "../../components/UiComponents/RoundBtn";
import "./index.scss";
import { Link } from "react-router-dom";
import ArrowLine from "../../components/icons/ArrowLine";
import FixedFooter from "../../components/FixedFooter";
import arrow from "../../static/images/arr.svg";
const text1 =
  "Have you ever wondered about how the emotions of the complex characters in The Wire related to each other ? Or the relationship between the oceanic challenges of Ulysses and the narrative arc of Walter White ? Between the wanderings of Virgil and the ghetto poetry of Atlanta ? The relationship is they are great stories, such as which can take place anywhere and anytime.And Inheritance is a bloody great story, right here, in Brussels !  A great, contemporary, true story ! Well, almost...";
const text2 =
  "This story, based on realevents, starts in Brussels.Inheritance is the story of a gangster father (re)discovered by his children over the course of the episodes, while on a dangerous treasure hunt in the most hostile urban jungle in the world : Brussels.";
const text3 =
  "The series is inspired by the personal stories of Brussels neighbourhoods from outside contributors. It is illustrated not just by ex-inmates, dealers and petty criminals, but also by good boys (and girls) who know how street life works and want to share their knowledge with the rest of the world. In addition to these contributions, we drew on the great literary works of past centuries - The Iliad, The Odyssey, The Divine Comedy – to extract the archetypes that make the Inheritance story as universal as possible. In concrete terms, these literary references are particularly used in the narrative arcs and the general dramatic situations, whereas urban documentation inspires the realistic characters and their authentic reaction to these extraordinary situations. Inheritance is 50% inspired by real neighbourhood life, and 50% by the heroic destinies involved in an adventure that goes beyond this neighbourhood life";
const img =
  "https://i.pinimg.com/originals/34/09/92/34099297fbb44a7f425edf33066d4183.jpg";
const textFlow2 = [
  {
    title: "Orality",
    text:
      "Have you ever wondered about how the emotions of the complex characters in The Wire related to each other ? Or the relationship between the oceanic challenges of Ulysses and the narrative arc of Walter White ? Between the wanderings of Virgil and the ghetto poetry of Atlanta ? The relationship is they are great stories, such as which can take place anywhere and anytime.And Inheritance is a bloody great story, right here, in Brussels !  A great, contemporary, true story ! Well, almost...",
  },
  {
    title: "Orality",
    text:
      "Have you ever wondered about how the emotions of the complex characters in The Wire related to each other ? Or the relationship between the oceanic challenges of Ulysses and the narrative arc of Walter White ? Between the wanderings of Virgil and the ghetto poetry of Atlanta ? The relationship is they are great stories, such as which can take place anywhere and anytime.And Inheritance is a bloody great story, right here, in Brussels !  A great, contemporary, true story ! Well, almost...",
  },
  {
    title: "Orality",
    text:
      "Have you ever wondered about how the emotions of the complex characters in The Wire related to each other ? Or the relationship between the oceanic challenges of Ulysses and the narrative arc of Walter White ? Between the wanderings of Virgil and the ghetto poetry of Atlanta ? The relationship is they are great stories, such as which can take place anywhere and anytime.And Inheritance is a bloody great story, right here, in Brussels !  A great, contemporary, true story ! Well, almost...",
  },
  {
    title: "Orality",
    text:
      "Have you ever wondered about how the emotions of the complex characters in The Wire related to each other ? Or the relationship between the oceanic challenges of Ulysses and the narrative arc of Walter White ? Between the wanderings of Virgil and the ghetto poetry of Atlanta ? The relationship is they are great stories, such as which can take place anywhere and anytime.And Inheritance is a bloody great story, right here, in Brussels !  A great, contemporary, true story ! Well, almost...",
  },
];
const Project = (props) => {
  useEffect(() => {
    document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);
  const handleClick = () => {
    return props.history.goBack();
  };
  return (
    <div className="project_open">
      <div className="project_open_header">
        <button type="button" onClick={handleClick}>
          <img src={arrow} alt="" />
          Back
        </button>
      </div>
      <FixedFooter invested={7} needToInvest={10} />
      <div className="container">
        <div className="project_title">
          <h1>INHERITANCE</h1>
        </div>
      </div>
      <div className="max_600 container">
        <TextBlock text={text1} />
      </div>
      <div className="container_2">
        <div className="image_left_capt">
          <h4>HERITAGE : LIKE OUR CHROMOSOMES, WE CAN NOT CHOOSE.</h4>
          <div className="image_left_capt_img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="circle_info">
          <h3>Fils de : n.m.</h3>
          <p>
            Slang. Pejorative undertone concerning the professional background
            of one’s mother. Abr. Said of a person who inherits a list of
            contacts or a network of relations from their parents.
          </p>
        </div>
        <div className="just_btwn block_2">
          <div className="max_500">
            <h5>
              CREATED BY: Camille Pistone, Salim Talbi, Antoine Negrevergne,
              Gaetan Delferrière, Simon Bertrand et Boris Tilquin.
            </h5>
          </div>
          <TextBlock
            text={text2}
            cols={6}
            title="This story, based on real
                    events, starts in Brussels."
          />
        </div>
      </div>
      <div className=" block_3">
        <div className="container">
          <div className="text_flow">
            <h4>Inheritance is a 8x52-minute mythological, urban saga.</h4>
            <div className="just_btwn">
              <TextBlock text={text1} cols={6} />
              <TextBlock text={text1} cols={6} />
            </div>
          </div>
          <div className="text_flow">
            <TextBlock
              text={text3}
              title="What does Inheritance look like exactly ?"
            />
          </div>
          <div className="text_flow">
            <TextBlock
              text={text3}
              title="What does Inheritance look like exactly ?"
            />
          </div>
          <div className="text_flow">
            <TextBlock
              text={text3}
              title="What does Inheritance look like exactly ?"
            />
          </div>
          <div className="text_flow">
            <TextBlock
              text={text1}
              title="What does Inheritance look like exactly ?"
            />
          </div>
        </div>
      </div>
      <div className="block_imgs">
        <div className="just_btwn">
          <div className="two_sm_img">
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="sm_img_cations">
            <div className="sm_img_right">
              <img src={img} alt="" />
            </div>
            <h3>THE FIVE SIGNATURES</h3>
          </div>
        </div>
        <div className="block_imgs_big">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="block_4">
        <div className="container">
          <div className="circle_bg"></div>
          <div className="lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="max_600">
            <TextBlock text={text1} title="Not evident at first glance " />
          </div>
        </div>
      </div>
      <div className="block_imgs_2">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="container">
        {textFlow2.length > 0 && (
          <div className="text_flow_2">
            {textFlow2.map((el) => (
              <TextBlock title={el.title} text={el.text} key={v4()} />
            ))}
            <div
              className={`text_flow_2_add_info ${
                textFlow2.length % 2 === 0 ? "text_flow_2_add_info_stat" : ""
              }`}
            >
              <p>
                These five Inheritance signatures give the viewers a fascinating
                impression of watching a great, mythical, yet contemporary story
                unfold before their eyes - an infinite universe - what we call :
                a street mythology.
              </p>
            </div>
          </div>
        )}
      </div>
      <footer>
        <div className="container_2">
          <div className="just_btwn">
            <div className="footer_text max_600">
              <h3>TITLE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="get_in_touch_wrap">
              <RoundBtn value="get in touch" className="big_btn get_touch" />
            </div>
          </div>
          <div className="footer_btns">
            <Link to="/" className="proj_link">
              <ArrowLine />
              <h3>PREVIOUS PROJECT</h3>
            </Link>
            <Link to="/" className="proj_link">
              <h3>NEXT PROJECT</h3>
              <ArrowLine next={true} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project;

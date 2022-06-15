import { useState } from "react";
import Card from "../card/Card.js";

import { data_bases_google } from "../bases/Data_bases_google.js";
import { data_bases_linkmaps } from "../bases/Data_bases_linkmaps.js";
import { data_bases_planetminecraft } from "../bases/Data_bases_planetminecraft.js";
import { data_bases_messeger } from "../bases/Data_bases_messeger.js";
import { data_bases_torrent } from "../bases/Data_bases_torrent.js";

import "./Tabs.scss";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Google
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Link maps
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Planet minecraft
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Messenger
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          torrent
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          ----
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {data_bases_google.map((el) => {
            return (
              <Card key={el.id} name={el.name} href={el.href} ico={el.ico} />
            );
          })}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {data_bases_linkmaps.map((el) => {
            return (
              <Card key={el.id} name={el.name} href={el.href} ico={el.ico} />
            );
          })}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          {data_bases_planetminecraft.map((el) => {
            return (
              <Card key={el.id} name={el.name} href={el.href} ico={el.ico} />
            );
          })}
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          {data_bases_messeger.map((el) => {
            return (
              <Card key={el.id} name={el.name} href={el.href} ico={el.ico} />
            );
          })}
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          {data_bases_torrent.map((el) => {
            return (
              <Card key={el.id} name={el.name} href={el.href} ico={el.ico} />
            );
          })}
        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        ></div>
      </div>
    </div>
  );
}

export default Tabs;

import React, { useEffect, useState } from "react";
import "./ProfileBody.css";

export const ProfileBody = ({ apiDevHistory: devHistory }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll = window.scrollY;
      setScrollPos(winScroll);
    });
    const entriesArr = document.getElementsByClassName("entry");
    setEntries(entriesArr);
  }, []);

  useEffect(() => {
    console.log("Scrolled", scrollPos);
    const revealedEntries = [...entries].filter(
      (entry) =>
        entry.getBoundingClientRect().top < (window.innerHeight * 4) / 5
    );
    const concealedEntries = [...entries].filter(
      (entry) =>
        entry.getBoundingClientRect().top >= (window.innerHeight * 4) / 5
    );
    revealedEntries.forEach((revealedEntry) =>
      revealedEntry.classList.add("revealed")
    );
    concealedEntries.forEach((concealedEntry) =>
      concealedEntry.classList.remove("revealed")
    );
  }, [scrollPos, entries]);

  return (
    <div className="ProfileBody">
      {devHistory.map((data) => (
        <div className="entry" key={data.entry}>
          <p className="entry-date">({data.date})</p>
          <p className="entry-story">{data.story}</p>
        </div>
      ))}
      <div className="meme-section">
        <img
          className="honestwork-meme"
          src={
            process.env.REACT_APP_PUBLIC_URL + "/pictures/honestworkmeme.jpg"
          }
          alt=""
        ></img>
      </div>
    </div>
  );
};

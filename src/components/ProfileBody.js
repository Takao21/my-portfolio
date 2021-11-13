import React, { useEffect, useState } from "react";
import "./ProfileBody.css";

export const ProfileBody = ({ apiDevHistory: devHistory }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // update scrollPos whenever window is scrolled
      const winScroll = window.scrollY;
      setScrollPos(winScroll);
    });
    const entriesArr = document.getElementsByClassName("entry"); // collect entries that are to be animated on scroll
    setEntries(entriesArr);
  }, []);

  useEffect(() => {
    //  this useEffect gets called whenever window is scrolled (whenever the dependency updates)
    const revealedEntries = [...entries].filter(
      // ^ spreaded HTML Collection Object into Array to apply filter
      (entry) =>
        entry.getBoundingClientRect().top < (window.innerHeight * 4) / 5 // reveal entry if it rises above 4/5 of the viewport height
    );
    const concealedEntries = [...entries].filter(
      (entry) =>
        entry.getBoundingClientRect().top >= (window.innerHeight * 4) / 5 // conceal entry if it falls below 4/5 of the viewport height
    );
    revealedEntries.forEach((revealedEntry) =>
      revealedEntry.classList.add("revealed")
    );
    concealedEntries.forEach((concealedEntry) =>
      concealedEntry.classList.remove("revealed")
    );
  }, [scrollPos, entries]); // dependency on every scrollPos update

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
          src="/pictures/honestworkmeme.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
};

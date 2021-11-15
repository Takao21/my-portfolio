//  some common API weak points are added here on purpose
//  handled them on the front end to show my API knowledge
export const resume = {
  name: "Aung Kaung Khant (Takao)",
  profileDescription:
    "Self-taught and well-trained passionate developer from Myanmar. My hobby of playing and creating video games in free time made me naturally tech-savvy. I have a solid educational background in Mathematics and exceptional problem-solving skills. I've always been fascinated by computer technologies and how they can make people's lives more convenient or fun. My experience of self-learning and teaching people has grown me into an adaptable learner. Currently interested to work fully remote as a front-end developer, a similar position or in a company revolving around that field.",
  workHistory: [
    {
      index: 3, //  larger index = more recent in chronological order
      position: "Founder/Co-Founder",
      company: "Myan Digital",
      location: "Yangon",
      fromDate: "August 2020",
      toDate: "", // empty data condition
      highlights: [
        "Founded through start-up acceleration by winning the Doh Phandee Back To Business challenge",
        "An organization with visions for fully digitized shops and businesses in Myanmar",
        "Played versatile roles in a team of 4 founders and surpassed the start-up sustainability milestones set by the accelerators",
      ],
    },
    {
      index: 2,
      position: "WordPress Web Editor",
      company: "AniDL",
      location: "Online with Indian Team",
      fromDate: "May 2017",
      toDate: "June 2018",
      highlights: [
        "Learnt Wordpress template editing for the video-downloading website",
        "Remote working experience with foreigners speaking English",
        "Gained knowledge on video encoding, URL shortening, domain, hosting and web ads",
      ],
    },
    {
      index: 1,
      position: "Asst. Tutor/Teacher",
      company: "Tr. Daw Nwe Ni Private Tuition",
      location: "Yangon",
      fromDate: "May 2017",
      toDate: "Sep 2017",
      highlights: [
        "Joined as a part-timer and alumni after the matriculation exam",
        "A good experience of teaching students of different learning capabilities and interests",
        "First self-earned income in life",
      ],
    },
  ],
  education: [
    {
      index: 3,
      fieldOfStudy: "B.E (C.E.I.T) Foundations",
      facility: "Yangon Technological University",
      location: "Yangon",
      fromDate: "Dec 2017",
      toDate: "May 2018",
      notes: [
        //  unusual extra data condition
        "Dropped out after the foundation year to pursue career and passion.",
      ],
    },
    {
      index: 4,
      fieldOfStudy: "JavaScript & ReactJS",
      facility: "Turing Programming Language Center",
      location: "Yangon",
      fromDate: "Feb 2020",
      toDate: "Feb 2021",
      notes: [],
    },
    {
      index: 2, //  unsorted data condition
      fieldOfStudy: "High School",
      facility: "B.E.H.S No.1 Dagon Township",
      location: "Yangon",
      fromDate: "June 2010",
      toDate: "March 2017",
      notes: [],
    },
    {
      index: 1,
      fieldOfStudy: "Primary School",
      facility: "B.E.P.S No.10 Dagon Township",
      location: "Yangon",
      fromDate: "June 2005",
      toDate: "Feb 2010",
      notes: [],
    },
  ],
};

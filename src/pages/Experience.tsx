import Timeline from "../components/Timeline";

const ExperiencePage = () => {
  return (
    <div className="py-[5%] md:py-[3%] space-y-14 w-full">
      <h1>My Journey</h1>
      <Timeline
        experience={[
          {
            date: "June 2023 - Current",
            title: "Fourtitude.asia",
            subtitle: "Front-end Developer",
            icon: "work",
            description: [
              "Led a team of front-end developers in an Agile environment to successfully launch an app/website serving over 1 million users across Klang Valley, while utilizing a Kanban board (Jira, Trello) to track progress, manage sprints, and ensure timely delivery of features.",
              "Collaborated with cross-functional teams (back-end, design, product) to deliver a user-centric website by conducting user interviews, analyzing feedback, and defining feature requirements that improved engagement and retention.",
              "Defined and prioritized product features based on user feedback, market trends, and business objectives, working closely with stakeholders to ensure alignment with company goals.",
              "Projects: Air Selangor, TGV Cinemas, Resorts World Cruise Payment App, Razor Gold Partner",
            ],
          },
          {
            date: "Oct - Dec 2022",
            title: "Studio20 / The Techy Hub",
            subtitle: "Front-end Developer Intern",
            icon: "work",
            description: [
              "Built reusable Gutenberg code blocks to be utilized on Wordpress",
              "Managed data & content of websites through Wordpress ACF plugins",
            ],
          },
          {
            date: "Sept - Dec 2022",
            title: "TalentLabs",
            subtitle: "Certified Associate in Front-end Development",
            icon: "education",
            description: ["Web Front-end Development with React"],
          },
          {
            date: "Sept - Dec 2022",
            title: "TalentLabs",
            subtitle: "Foundation Certificate in Software Engineering",
            icon: "education",
            description: [
              "Learned and applied the fundamentals of Javascript, HTML / CSS & SQLite",
            ],
          },
          {
            date: "Nov 2020 - July 2022",
            title: "Huawei Technologies",
            subtitle: "Network Design Engineer",
            icon: "work",
            description: [
              "Involved in pre-sales solution team for Core Network products",
              "Provide maintenance and support for existing infrastructures (Celcom Axiata)",
            ],
          },
          {
            date: "Sept 2015 - July 2019",
            title: "University of Nottingham",
            subtitle: "MEng Chemical Engineering",
            icon: "education",
            description: [
              "Wrote a dissertation on the Feasibility of Bentonite as Adsorbent for Contaminated Water",
            ],
          },
        ]}
      />
    </div>
  );
};

export default ExperiencePage;

import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import "./Resources.css";
import ResourceTabs from "../modules/ResourceTabs.js";
// DATA
const RESOURCE_SUBTITLE =
  "Below is a curated list of resources to support educators and students, organized by grade level and subject.";
const HIGH_SCHOOl_RESOURCES = [
  {
    title: "General",
    description:
      "Admittedly, it's kind of hard to motivate yourself to keep learning especially when there are no assignments! That's why we have collected these resources for you all. Many of these links include cool and engaging ways to learn things. And of course, here we've only listed common subjects taken by high schoolers, but your learning is not limited to these things.\
    Here's a list of stuff you can do to fill your days that are also educational in their own way.",
    resources: [
      {
        title: "Read books",
        link: undefined,
        description:
          "Check out websites like Goodreads where you can keep track of what you read and look at lists of what other people recommend! There is something for everybody.",
      },
      {
        title: "Write a novel, make a blog, just write!",
        link: undefined,
        description: "There are several resources for this: Medium & Google Blogger.",
      },
      {
        title: "Make a website for yourself",
        link: undefined,
        description: "Look into GitHub Pages, Jekyll, WordPress, and Wix.",
      },
      {
        title: "Pick up a new language",
        link: undefined,
        description:
          "A great way to do this is to do a few quick grammar and vocab lessons for the language then consume media in the language. For example, if you want to learn French, listen to French music! Watch French movies and tv-shows!",
      },
    ],
  },
  {
    title: "College Process",
    description:
      "The following is a collection of online resources that students from low-income and disadvantage backgrounds can look into for support. All of these resources are free and national.",
    resources: [
      {
        title: "ACT Fee Waiver",
        link: "https://www.act.org/content/dam/act/unsecured/documents/FeeWaiver.pdf",
        description:
          "Forms are available through your school or Upward Bound Center. You cannot apply for the fee waiver independently. \
            If you have a guidance/college guidance office. that should be your best bet at getting one.\
            If they do not have them, ask them to order them. (They can visit www.act.org/the-act/supportmaterials to order them.) \
            Included in the waiver: \
            TWO chances at the ACT without charge (one per waiver)\
            FREE Access to their prep online (Usually $40+)",
      },
      {
        title: "SAT Fee Waiver",
        link: "https://collegereadiness.collegeboard.org/pdf/sat-fee-waiver-student-brochure.pdf",
        description:
          "Forms are available through your school. You cannot apply for the fee waiver independently. \
          You must be in grades 11/12 to receive a Fee Waiver. If your counselor does not provide Fee Waivers, \
          they can learn how to request them here and can directly call 888-SAT-HELP for assistance. \
          Included in the waiver:  2 free SATs (with or without the essay), 6 free SAT Subject Tests, \
          2 free Question-and-Answer Service (QAS) or Student Answer Service (SAS) reports.\
          Unlimited score reports to colleges. They publicize college application fee waivers, but some participating \
          colleges already have their own waiving process. After taking an exam with a fee waiver, students will get \
          application waivers in the mail.Khan Academy provides free online test prep for the SAT.",
      },
      {
        title: "KhanAcademy",
        link: "https://www.khanacademy.org/college-careers-more/college-admissions",
        description:
          "This webpage is not a replacement for a counselor, but for a student it is a good starting point. Read it through to understand the process better.",
      },
      {
        title: "CollegePoint",
        link: "https://www.collegepoint.info/",
        description:
          "This is specifically for low-income students. It is free advising on essays, college searching, reading financial aid packages, and also provides scholarships for applying to schools. You can join as a junior or senior.",
      },
      {
        title: "Matriculate",
        link: "http://www.matriculate.org/college",
        description:
          "This is a similar program to Collegepoint.info. In the same way, they also connect high achieving, low-income students to counselors for their college seeking process starting in junior year for no cost to the student. The difference between Collegepoint.info and Matriculate is that you must be in Junior year and have taken either the ACT or the SAT to register for Matriculate. While this may be a higher barrier, they have a more streamlined process.",
      },
      {
        title: "UPchieve",
        link: "https://upchieve.org/",
        description:
          "In response to Covid-19, UPchieve is providing free mentorship to Title 1 school high students.\
        Their goal is to provide youth with live academic support to help them on their path to achieving upward mobility.\
        First, they are focused on providing free, 24/7 math tutoring to high school students, because math skills are essential to finishing high school and pursuing any kind of postsecondary certification.\
        They also provide college advice. They help you find affordable colleges to apply to, create a plan for finishing your application, brainstorm ideas for your personal statement, and more!",
      },
      {
        title: "College Prep Scholars Program",
        description:
          "(Application extended to late April due to Covid-19) \
        This is a more competitive program that the rest since there are scholarships involved. However, being a College Prep Scholar is a notable distinction that shows college partners that you are a competitive candidate for admission. Being admitted provides:\
        scholarships to travel to conferences and one-on-one college admissions support,\
        automatic entry into the National College Match as a senior, giving you a head start on applying for a full four-year scholarship to our college partners. The majority of College Prep Scholars are selected as Finalists for the National College Match.",
        link: "https://www.questbridge.org/high-school-students/college-prep-scholars",
      },
    ],
  },
];

const MIDDLE_SCHOOL_RESOURCES = [
  {
    title: "General",
    description:
      "We've collected a variety of resources here, from math puzzles to word games to science videos, and be sure to check back in a few days for more!",
    resources: [],
  },
  {
    title: "Mathematics",
    description:
      "This is a very important stage for mathematical development, and luckily there are lots of super fun resources for falling in love with math!",
    resources: [
      {
        title: "ABCYA",
        description: "Math games K-6",
        link: "https://www.abcya.com/",
      },
      {
        title: "Math-Play",
        description: "Math games for grades 6-8",
        link: "http://www.math-play.com/Middle-School-Math-Games.html",
      },
      {
        title: "Math4ChildrenPlus",
        description: "Math games for grades 6-7",
        link: "https://www.math4childrenplus.com/games-by-grades/",
      },
      {
        title: "Math Playground",
        description: "Math games for 6th grade",
        link: "https://www.mathplayground.com/math-games.html",
      },
    ],
  },
];

const ELEMENTARY_SCHOOL_RESOURCES = [
  {
    title: "General",
    description:
      "Here we have collected some resources that we hope will be helpful to continuing your/your child's education. There are also several excellent activities for children to do that are non-academic! Check out some of the websites listed below for sample schedules and other fun activities!",
    resources: [
      {
        title: "Khan Academy",
        description:
          "Khan Academy has provided some suggested schedules for students during the COVID-19 pandemic",
        link:
          "https://docs.google.com/document/d/e/2PACX-1vSZhOdEPAWjUQpqDkVAlJrFwxxZ9Sa6zGOq0CNRms6Z7DZNq-tQWS3OhuVCUbh_-P-WmksHAzbsrk9d/pub",
      },
      {
        title: "Scholastic Learn at Home",
        description: "ADD DESCRIPTION HERE",
        link: "https://classroommagazines.scholastic.com/support/learnathome.html",
      },
      
    ],
  },
  {
    title: "English",
    description: "ADD SOME DESCRIPTION",
    resources: [
      {
        title: "Dreamscape",
        link: "https://play.squigglepark.com/dreamscape/index.html?v=1",
      }
    ]
  }
];
class Resources extends Component {
  constructor(props) {
    super(props);
  }

  buildResourceComponent(resource_data) {
    let resource_tabs = null;
    const hasResources = resource_data.length !== 0;
    if (hasResources) {
      resource_tabs = <ResourceTabs resources={resource_data} />;
    } else {
      resource_tabs = <div>Unable to retrieve resources!</div>;
    }
    return resource_tabs;
  }
  render() {
    // BUILDING THE RESOURCE COMPONENTS
    let high_school_resource_tabs = this.buildResourceComponent(HIGH_SCHOOl_RESOURCES);
    let middle_school_resource_tabs = this.buildResourceComponent(MIDDLE_SCHOOL_RESOURCES);
    let elementary_school_resource_tabs = this.buildResourceComponent(ELEMENTARY_SCHOOL_RESOURCES);

    return (
      <>
        <div className="Resources-title">
          {/* INTRO */}
          <Typography variant="h2">Resources</Typography>
          <Typography variant="subtitle1">
            {RESOURCE_SUBTITLE}
            Know of a free resource that we haven't mentioned? Let us know
            <Link href="https://forms.gle/P4n36zh3pdt8nEzM8">{" here!"}</Link>
          </Typography>
        </div>
        {/* HIGH SCHOOL */}
        <div className="Resource-tab">
          <div className="Resource-tab-title">
            <Typography variant="h4">High School (Grades 9-12)</Typography>
          </div>

          {high_school_resource_tabs}
        </div>

        {/* MIDDLE SCHOOL */}
        <div className="Resource-tab">
          <div className="Resource-tab-title">
            <Typography variant="h4">Middle School (Grades 6-8)</Typography>
          </div>

          {middle_school_resource_tabs}
        </div>
        {/* ELEMENTARY */}
        <div className="Resource-tab">
          <div className="Resource-tab-title">
            <Typography variant="h4">Elementary School (Grades K-5)</Typography>
          </div>
          {elementary_school_resource_tabs}
        </div>
      </>
    );
  }
}

export default Resources;

export const timeZones = [
  {
    value: "GMT-4",
    timezone: "Eastern Daylight Time - Boston (GMT-4)"
  },
  {
    value: "GMT-5",
    timezone: "Central Daylight Time - Chicago (GMT-5)"
  },
  {
    value: "GMT-6",
    timezone: "Mountain Daylight Time - Denver (GMT-6)"
  },
  {
    value: "GMT-7",
    timezone: "Pacific Daylight Time - Los Angeles (GMT-7)"
  },
  {
    value: "GMT-8",
    timezone: "Alaska Daylight Time - Anchorage (GMT-8)"
  },
  {
    value: "GMT-10",
    timezone: "Hawaii-Aleutian Standard Time - Honolulu (GMT-10)"
  },
]

export const subjects = [
  {
    value: "English",
    label: "English"
  },
  {
    value: "History",
    label: "History"
  },
  {
    value: "Science",
    label: "Science"
  },
  {
    value: "Math",
    label: "Math"
  },
  {
    value: "Physics",
    label: "Physics"
  },
  {
    value: "Chemistry",
    label: "Chemistry"
  },
  {
    value: "Biology",
    label: "Biology"
  },
  {
    value: "College Prep - SATs, ACTs",
    label: "College Prep - SATs, ACTs",
  },
  {
    value: "College Prep - Essays",
    label: "College Prep - Essays"
  },
  {
    value: "Writing",
    label: "Writing",
  },
  {
    value: "Economics",
    label: "Economics"
  },
  {
    value: "Computer Science - Python",
    label: "Computer Science - Python"
  },
  {
    value: "Computer Science - C/C++",
    label: "Computer Science - C/C++"
  },
  {
    value: "Computer Science - Java",
    label: "Computer Science - Java"
  },
  {
    value: "AP Physics C",
    label: "AP Physics C"
  },
  {
    value: "AP Math AB",
    label: "AP Math AB"
  },
  {
    value: "AP Math BC",
    label: "AP Math BC"
  },
  {
    value: "AP Statistics",
    label: "AP Statistics"
  },
  {
    value: "AP English Literature",
    label: "AP English Literature"
  },
  {
    value: "AP English Language",
    label: "AP English Language"
  },
  {
    value: "AP World History",
    label: "AP World History"
  },
  {
    value: "AP US History",
    label: "AP US History"
  },
  {
    value: "AP Chemistry",
    label: "AP Chemistry"
  },
  {
    value: "AP Biology",
    label: "AP Biology"
  }
]
export const theme = {
  colors: {
    blue: '#00568C',
    yellow: '#F2BE32',
    white: '#ffffff',
    darkblue: '#003c61',
    black: '#000000',
    weird: '#E3E1E5'
  },
  fonts:{
    sans: 'Muli, sans-serif',
  },
  fontWeights: {
    light: 300,
    normish: 500,
    normal: 600,
    bold: 700,
  },
  fontSizes: [12, 14, 16, 20, 22, 24, 26, 28, 32, 34, 36, 50],
  space: [
    0,
    4,
    8,
    16,
    20,
    24,
    32,
    64,
    128,
    140,
    256,
  ]
};

export const tags = ["Early Childhood Learning", "Preschool", "Elementary School", "Middle School","High School"]
                    .map(k => {return {label: k, value: k}});

export const about_us_content =
  "CovED is a community of undergraduates, postgrads, students, and educators from colleges/universities across the U.S. who are interested in supporting K-12 students in light of the COVID-19 pandemic. Our goal is to create a free virtual platform for pairing mentors from higher ed institutions with K-12 students affected by school closures. We hope that this platform and our resources page will help provide additional academic assistance for students and families who are facing hardships caused by the ongoing pandemic.";
export const problem_content =
  "Many of us have been grappling with how we can meaningfully support our home communities during COVID-19 school shutdowns. As this pandemic is intensifying, many K-12 students are faced with financial, familial, and logistical challenges that may impact their learning experience.";
export const solution_content =
  "The goal of this virtual service is to provide a resource for students including academic mentoring, college preparation, and personalized mentorship. We are working to compile free, web-based educational resources for students, families, and educators, as well as partner with schools and other non-profits to improve the learning experience of K-12 students.";

export const FAQS = [
  {
    key: "0",
    question: "Who is eligible to register?",
    answer: "If you are a K-12 student, you are eligible to register as a mentee for personalized mentorship and academic support from an undergraduate or postgraduate mentor. For students under 18 years old, we require that parents be present during mentoring sessions."
  },
  {
    key: "1",
    question: "What mentoring services are available?",
    answer: "We provide mentoring services for all school subjects from K-12 (including some AP and Honors classes), mentorship, and college preparation (including help with college essays or preparing for the SAT/ACT/Subject Test exams)."
  },
  {
    key: "2",
    question: "How does mentoring work?",
    answer: "Due to the COVID-19 outbreak, our mentoring sessions will be conducted online via video chat. We suggest using Skype, Google Hangouts, or Zoom, although this can be decided on a one-to-one basis between the mentor and mentee."
  },
  {
    key: "3",
    question: "What if I do not have access to Wi-Fi?",
    answer: "Spectrum is providing free Wi-Fi services for students during the school shutdown. Their number is 1-844-488-8398. Mentoring lessons are also able to be held via phone calling."
  },
  {
    key: "4",
    question: "How do I get matched with a mentor/mentee? How does the matching process work?",
    answer: "After filling out the registration form and verifying their emails, parents/guardians will be able to access our 'Find a Mentor' page to find a mentor for their child. From there, they will be able to send messages to any of the mentors in our database. Please do not request more than 1 mentor per student per 24 hour period."
  },
  {
    key: "5",
    question: "How many hours a week do I have to commit?",
    answer: "We suggest students and mentors meet between 1-2 hours a week, although this can be decided among mentorship pairs. This may depend on the student’s needs as well as the mentor’s availability."
  },
  {
    key: "6",
    question: "How long will CovEd mentors provide mentoring?",
    answer: "We expect mentors to be able to help until the end of the academic year for the student. After the academic year is over, discussions between the mentor and mentee can help determine possible plans and whether or not the mentoring will continue."
  },
  {
    key: "7",
    question: "What are the responsibilities of a mentor?",
    answer: "Mentors are responsible for volunteering a minimum of one to two hours a week of their time to help their matched mentee with the subjects the mentee requests help in. While a mentor is only matched with one mentee, they can reach out if they would like to mentor more. Mentors are expected to help their mentee until the end of the 2020 academic school year. Additionally, all mentors must comply with the CovEd safety guidelines and expectations provided to them at all times."
  },
  {
    key: "8",
    question: "How are you addressing concerns of student safety?",
    answer: "Our safety guidelines during our mentoring sessions include (but are not limited to): receiving consent from the mentee’s parent or legal guardian, having a parent or guardian present during the lessons, having mentors record the lessons, and instituting a “no social media contact with your mentee” policy. For further information please check our Privacy Policy and the Mentor Guidelines. Links to both can be found at the bottom of this page!"
  },
  {
    key: "9",
    question: "How are you reaching students in disadvantaged situations?",
    answer: "We have an outreach team that is actively working on recruiting students around the USA. In our registration form, we ask questions pertaining to socioeconomic status, allowing us to ensure that these students are matched first."
  },
  {
    key: "10",
    question: "Can you help students that do not speak English very well?",
    answer: "Yes! We have mentors that are fluent in various languages and if this is a concern, be sure to mention this in the special requests/concerns portion of the registration form and we will definitely work to accommodate this. Additionally, we are working on translating all flyers and publicity materials into different languages to reach students regardless of their first language."
  },
  {
    key: "11",
    question: "Is there any way for educators to get involved?",
    answer: "One of CovEd’s goals is to ensure that all students have access to various resources to help stimulate educational growth during this time. On our website’s home page, we have a form where resources can be submitted. We are hoping to find the best resources for students and hope you can help us!"
  },
  {
    key: "12",
    question: "Is this service free?",
    answer: "Yes! This service is completely free and all of our mentors are volunteering."
  }
]

export const registerDisclaimer = "This service is a completely free volunteer-based service. Those under the age of 13 are required to have a form filled out by a parent or guardian. For all others it is strongly recommended that a parent or guardian fill out this form. If a parent or guardian is unable to fill out the form, please email coveducation@gmail.com. Thanks!";

export const subjectMentee = "If you like, please note any subjects with which your student seeks assistance. You will have the option to review specific Mentors after you complete the signup process.";

export const subjectMentor = "Please select the subjects you would like to mentor. These subjects will be listed next to your profile.";

export const FOOT = [
  {
    name: "Terms of Service",
    link: "/termsconditions"
  },
  {
    name: "Privacy Policy",
    link: "/privacy"
  },
  {
    name: "Mentor Guidelines",
    link: "/mentorguidelines"
  }
]

export default timeZones;

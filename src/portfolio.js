/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Onkar Sorde's Portfolio",
  description:
    "Engineering Student at MIT Academy of Engineering, Pune with expertise in Machine Learning, Web Development, IoT, Embedded Systems, and Electronics.",
  og: {
    title: "Onkar Sorde Portfolio",
    type: "website",
    url: "https://onkarsorde.com/",
  },
};

//Home Page
const greeting = {
  title: "Onkar Sorde",
  logo_name: "OnkarSorde",
  nickname: "Engineering Student",
  subTitle:
    "A passionate B.Tech student specializing in Electronics & Telecommunication at MIT Academy of Engineering, Pune. Focused on developing innovative solutions through Machine Learning, IoT, and Web Development. Committed to leveraging technology to create impactful projects that bridge hardware and software engineering.",
  resumeLink:
    "https://drive.google.com/file/d/1akZ8V1qCSClE4xbWP_U9djmSVPx2YU6H/view?usp=sharing",
  portfolio_repository: "https://github.com/OnkarS18/masterPortfolio",
  githubProfile: "https://github.com/OnkarS18",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/OnkarS18",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/onkar-sorde-6411002b7",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:onkarsorde@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building ML models for healthcare predictions and data analysis",
        "⚡ Experience with classification, regression, and time series forecasting",
        "⚡ Developing predictive systems for real-world applications",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and interactive web applications",
        "⚡ Creating ML model deployment interfaces using Streamlit",
        "⚡ Developing full-stack solutions with modern frameworks",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
      ],
    },
    {
      title: "IoT & Embedded Systems",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing IoT-based safety and monitoring systems",
        "⚡ Working with microcontrollers like ESP32 and Arduino",
        "⚡ Integrating sensors and cloud platforms for real-time data",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#00979D",
          },
        },
        {
          skillName: "ESP32",
          fontAwesomeClassname: "simple-icons:espressif",
          style: {
            color: "#E7352C",
          },
        },
        {
          skillName: "ThingSpeak",
          fontAwesomeClassname: "simple-icons:thingspeak",
          style: {
            color: "#0099CC",
          },
        },
        {
          skillName: "AWS IoT",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
    {
      title: "Programming & Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Proficient in C++, Java, and Python programming",
        "⚡ Experience with data visualization and analysis tools",
        "⚡ Version control and collaborative development",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/OnkarS18",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/onkar-sorde-6411002b7",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MIT Academy of Engineering, Pune",
      subtitle: "B.Tech in Electronics & Telecommunication",
      logo_path: "",
      alt_name: "MIT AOE Pune",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Currently pursuing B.Tech with focus on Electronics, Embedded Systems, and IoT technologies.",
        "⚡ Building expertise in Machine Learning, Web Development, and cutting-edge technology solutions.",
        "⚡ Actively working on innovative projects combining hardware and software to create impactful solutions.",
      ],
      website_link: "https://mitaoe.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // Add your certifications here when you have them
    // Example format:
    // {
    //   title: "Certificate Name",
    //   subtitle: "- Issuing Organization",
    //   logo_path: "logo.png",
    //   certificate_link: "https://certificate-link.com",
    //   alt_name: "Organization Name",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Academic Projects and Technical Interests",
  description:
    "As an engineering student, I am actively building my expertise through hands-on projects in Machine Learning, IoT, and Web Development. Beyond my technical pursuits, I maintain a well-rounded perspective through interests in cricket, geopolitics, and current affairs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projects",
      work: true,
      experiences: [
        {
          title: "Employee Salary Prediction using AI",
          company: "Machine Learning Project",
          company_url: "#",
          logo_path: "ml_logo.png",
          duration: "2024",
          location: "MIT AOE, Pune",
          description:
            "Developed a predictive system for employee salary estimation based on experience, role, education, and location. Built using Scikit-learn with Linear Regression, Random Forest, and Gradient Boosting models. Deployed using Streamlit for interactive predictions.",
          color: "#0879bf",
        },
        {
          title: "Electric Lineman Safety System",
          company: "IoT Project",
          company_url: "#",
          logo_path: "iot_logo.png",
          duration: "2024",
          location: "MIT AOE, Pune",
          description:
            "Designed an IoT-based safety monitoring system for electric linemen tracking GPS location, vital signs (heart rate, body temperature), and proximity to high voltage. Integrated ESP32/Arduino with ThingSpeak and AWS IoT for real-time alerts and data visualization.",
          color: "#9b1578",
        },
        {
          title: "Early Chronic Kidney Disease Prediction",
          company: "Healthcare ML Project",
          company_url: "#",
          logo_path: "health_logo.png",
          duration: "2024",
          location: "MIT AOE, Pune",
          description:
            "Built a machine learning model analyzing clinical data (blood pressure, albumin, specific gravity, RBC counts) to predict early-stage Chronic Kidney Disease. Implemented using SVM, Logistic Regression, and Decision Trees with comprehensive data visualization.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Additional Projects",
      experiences: [
        {
          title: "Air Quality Impact on Health Prediction",
          company: "Environmental ML Project",
          company_url: "#",
          logo_path: "env_logo.png",
          duration: "2024",
          location: "MIT AOE, Pune",
          description:
            "Developed ML models correlating air quality metrics with health outcomes to predict respiratory illness impacts. Utilized regression and time series analysis with AQI data APIs and public health datasets.",
          color: "#ee3c26",
        },
        {
          title: "Climate Change Impact on Agriculture",
          company: "AgriTech ML Project",
          company_url: "#",
          logo_path: "agri_logo.png",
          duration: "2024",
          location: "MIT AOE, Pune",
          description:
            "Created a predictive model analyzing climate variables (temperature, rainfall, humidity, soil type) effects on crop yield. Helps farmers make informed decisions on crop selection and irrigation using Random Forest and Deep Learning approaches.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span across Machine Learning, IoT, and Web Development, focusing on creating innovative solutions for real-world problems in healthcare, safety, and environmental monitoring.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Research papers and technical articles will be listed here.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // Add your publications here when available
    // {
    //   id: "publication-id",
    //   name: "Publication Title",
    //   createdAt: "2024-01-01T00:00:00Z",
    //   description: "Publication description",
    //   url: "https://publication-url.com",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "", // Add image filename here when ready
    description:
      "I am available on LinkedIn and GitHub. Feel free to reach out for collaborations on ML, IoT, Web Development, or any innovative tech projects. I'm always eager to learn and contribute!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I document my learning journey and share insights about technology, projects, and innovations.",
    link: "https://github.com/OnkarS18",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "MIT Academy of Engineering, Pune, Maharashtra, India",
    locality: "Pune",
    country: "India",
    region: "Maharashtra",
    postalCode: "412105",
    streetAddress: "Alandi Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NdWtmWBNvZKQjY7E8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

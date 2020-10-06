export default {
  name: "akash dutta.",
  headerTagline: [
    //Line 1 For Header
    "Hi 👋 You found me!",
    " I am Akash.",
    //Line 2 For Header
    "Software Developer",
    //Line 3 For Header
    "from India",
  ],
  //Contact Email
  contactEmail: "dutta.akash1993official@gmail.com",

  abouttext: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five
       centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release 
       of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
       versions of Lorem Ipsum.`,
  aboutImage: require("./img/profile.jpg"),

  ShowAboutImage: false, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1,
      title: "Devium | Full Stack MERN",
      service: "Web Development",
      imageSrc: require("./img/devium2.png"),
      live: "https://devium-by-akash.herokuapp.com/",
      livedemo: "https://www.youtube.com/watch?v=_2RWrUU1Bc4",
      github: "https://github.com/akash-dutta-au7/devium",
    },
    {
      id: 2,
      title: "SaaSBee | React",
      service: "UI Development",
      imageSrc: require("./img/saas.png"),
      live: "https://saasbee-marketplace.netlify.app/",
      livedemo: "https://www.youtube.com/watch?v=XtMbn4dmfVM",
      github: "https://github.com/akash-dutta-au7/saasbee",
    },
    {
      id: 3,
      title: "Netflix Clone | React",
      service: "Frontend Development",
      imageSrc: require("./img/net2.png"),

      live: "http://stream-em-all.herokuapp.com/",
      livedemo: "https://www.youtube.com/watch?v=LZBt3ufTWJ8&t=3s",
      github: "https://github.com/attainu/Stream-em-all",
    },
    {
      id: 4,
      title: "The Globile Store | Bootstrap UI",
      service: "Ui Development",
      imageSrc: require("./img/globilestore.png"),

      live: "https://akash-dutta-au7.github.io/TheGlobileStore/",
      livedemo: "",
      github: "https://github.com/akash-dutta-au7/TheGlobileStore",
    },

    /*
  
                      If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                  ,{
                  id: 5,
                  title: 'Project Five',
                  service: 'Something Amazing',
                  imageSrc: "",
                  url: ''
              }
                  */
  ],
  social: [
    { name: "Github", url: "https://github.com/chetanverma16" },
    {
      name: "Behance",
      url: "https://www.behance.net/chetanverma",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/chetanverma",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cv.uidesign/",
    },
  ],
};

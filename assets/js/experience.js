AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Junior Machine Learning Engineer",
        cardImage: "assets/images/experience-page/omdena.png",
        place: "Omdena Algeria Chapter",
        time: "(Oct, 2022 - present)",
        desp: "<li>Selected as one of the 60 contributors to work on the project titled - Green Algeria Project: Building an Intelligent Control System for Greenhouses - Part 2.</li> ",
      },
      {
        title: "Research Intern",
        cardImage: "assets/images/experience-page/spartificial.png",
        place: "Spartificial",
        time: "(Sept, 2022 - present)",
        desp: "<li>Worked on some projects related to Artificial Intelligence for Lunar Exploration</li>",
      },
      {
        title: "Data Analyst",
        cardImage: "assets/images/experience-page/trainity.jpg",
        place: "Trainity",
        time: "(Nov, 2022 - present)",
        desp:"<li>Worked on some data analysis projects that include Instagram User Analytics , Operation & Metric Analytics , Hiring Process Analytics , IMDB Movie Analysis and many more. </li>",
      },
      {
        title: "Web Development Intern",
        cardImage: "assets/images/experience-page/letsgrowmore.png",
        place: "LetsGrowMore",
        time: "(Jan, 2022 - Feb, 2022)",
        desp:"<li>Created a single page webpage using Html, Css and JavaScript.</li><li>Also created a web application using create-react-app which uses API to fetch user data.</li>",
      },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Core Member Design Team",
    cardImage: "assets/images/experience-page/aiclub.png",
    description:
      "Creating various posters, posts and designs for AI club",
  },
  {
    title: "Core Member  Design Team",
    cardImage: "assets/images/experience-page/ecell.jpg",
    description:
      "Creating various posters, posts and designs for E cell",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);



// Hackathon  Cards

const hackathon = document.querySelector(".hackathon");
const hackathoncards = [
  {
    title: "Cipherthon",
    cardImage: "assets/images/experience-page/cipherschools.jpg",
    mode: "ONLINE",
    description:
      "Made it to the Top 50 in CIPHERTHON (conducted by CipherSchools )after qualifying 2 rounds .Team was ranked in the top 50 out of 600+ teams.",
  },
  {
    title: "Ideathon",
    cardImage: "assets/images/experience-page/vitbhopal.jpg",
    mode: "OFFLINE",
    description:
      "Made it to the Top 20 in IDEATHON (conducted by VIT) .Team was ranked in the top 20 out of 50+ teams.",
  },
];

const showCards3 = () => {
  let output = "";
  hackathoncards.forEach(
    ({ title, cardImage, mode, description }) =>
      (output += `        
      <div class="card hackathonCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="hackathonTitle">${title}</h2>
          <p class="copy">${mode}</p></div>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  hackathon.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);


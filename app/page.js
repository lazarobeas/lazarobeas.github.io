'use client'
import { BsLinkedin, BsYoutube, BsMedium} from "react-icons/bs";
import {GoMarkGithub} from "react-icons/go";
import {
    SiHtml5, SiJavascript, SiCss3, SiReact,
    SiTailwindcss, SiPython,
    SiDjango, SiPandas, SiNumpy,
    SiJetbrains, SiScikitlearn, SiSelenium,
    SiCplusplus, SiGithub, SiNextdotjs, SiDocker,
    SiGit, SiMongodb, SiChakraui, SiNodedotjs, SiYarn, SiTypescript
} from "react-icons/si";
import {TypeAnimation} from "react-type-animation";


export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons">🇲🇽 🇺🇸</h1>
              <ul className="flex items-center">
                  <li>
                      <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 rounded-xl ml-5"
                          href="https://drive.google.com/file/d/1TSXpG6zLOPzFtvHbT0b7z7_a91XQCL_H/view?usp=sharing">
                          Resume</a>
                  </li>
                  {/*<li>*/}
                  {/*    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 rounded-xl ml-5" href="#">Projects</a>*/}
                  {/*</li>*/}
              </ul>
          </nav>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20">
              <img src="/headshotLBEAS.jpg" alt="my beautiful face"/>
          </div>
          <div className="text-center p-10">

              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Lazaro Beas</h2>
              <TypeAnimation
                  sequence={[
                      'Software Engineer ● Full Stack Developer ● Student',
                      2000,
                  ]}
                  wrapper="h2"
                  speed={30}
                  style={{ fontSize: '2em', display: 'inline-block' , fontStyle:'inherit',}}
                  repeat={Infinity}
              />
              <p className="text-md py-4 leading-8 text-gray-800 md:text-xl">
                  I am a hardworking Computer Science & Finance double major student at the University of Texas Rio Grande Valley. My first love is
                  Python but am currently learning C++ and Java. I always enjoy taking on new projects or building software. Have an idea in mind?
                  Please reach out! I am a big fan of problem solving and love managing data. I also have experience working
                  in teams. In my spare time,
                  you can find me mountain biking, watching sports, reading, or looking at charts. Warwick main for life.
              </p>
          </div>
          <div className="text-5xl cursor-pointer flex justify-center gap-4 py-3 text-gray-600">
              <a href="https://github.com/lazarobeas"><GoMarkGithub/></a>
              <a href="https://www.linkedin.com/in/lazaro-beas-5ba702201/"><BsLinkedin/></a>
              <a href="https://www.youtube.com/channel/UCt_ohKQSmycrTVWmqmuHcEA"><BsYoutube/></a>
              <a href="https://medium.com/@lazarobeas2"><BsMedium/></a>
          </div>
      </section>

      <section>
          <div>
              <h3 className="text-6xl text-teal-600 mt-10 text-center">Skills</h3>
          </div>
          <div className="lg:flex gap-5">
              <div className="text-center shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
                  <h3 className="text-4xl font-semibold pt-1 pb-6">
                      Languages
                  </h3>
                  <div className="flex flex-wrap gap-15 text-3xl justify-evenly pb-10 mt-6">
                      <p className="text-gray-800 px-10 py-5"><SiPython/>Python</p>
                      <p className="text-gray-800 px-10 py-5"><SiJavascript/>Javascript</p>
                      <p className="text-gray-800 px-10 py-5"><SiTypescript/>Typescript</p>
                      <p className="text-gray-800 px-10 py-5 "><SiCplusplus/>C++</p>
                  </div>
              <h4 className="text-md text-center pb-4 justify-self-center">
                  My favorite languages for systems programming, software engineering, and data analysis.
              </h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
                <h3 className="text-4xl font-semibold pt-1 pb-6">
                    Front-End
                </h3>
                  <div className="flex flex-wrap gap-8 text-3xl justify-evenly mt-5">
                    <p className="text-gray-800 px-1"><SiHtml5/>HTML5</p>
                    <p className="text-gray-800 px-1"><SiCss3/>CSS</p>
                    <p className="text-gray-800 px-1"><SiReact/>React</p>
                    <p className="text-gray-800 px-1"><SiNextdotjs/>Next.js</p>
                    <p className="text-gray-800 px-1 py-1"><SiTailwindcss/>Tailwind CSS</p>
                    <p className="text-gray-800 px-1 py-1"><SiChakraui/>Chakra UI</p>
                  </div>
                  <h4 className="text-md pt-24 text-center justify-self-center">
                      My preferred technologies for front-end web development and component design.
                  </h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
                  <h3 className="text-4xl font-semibold pt-1 pb-6">
                      Back-End
                  </h3>
                  <div className="flex flex-wrap gap-8 text-3xl justify-evenly mt-5">
                      <p className="text-gray-800 px-1"><SiDjango/>Django</p>
                      <p className="text-gray-800 px-1"><SiNodedotjs/>Node.js</p>
                      <p className="text-gray-800 px-1"><SiYarn/>Yarn</p>
                      <p className="text-gray-800 px-1"><SiMongodb/>MongoDB</p>
                      <p className="text-gray-800 px-1"><SiPandas/>Pandas</p>
                      <p className="text-gray-800 px-1"><SiScikitlearn/>Sci-kit</p>
                      <p className="text-gray-800 py-1"><SiSelenium/>Selenium</p>
                      <p className="text-gray-800 py-1"><SiNumpy/>Numpy</p>
                  </div>
                  <h4 className="text-md pt-24 text-center justify-self-center">
                      My preferred technologies for back-end web programming, database architecture, and my favorite python packages.
                  </h4>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
                  <h3 className="text-4xl font-semibold pt-1 pb-6">
                      Tools
                  </h3>
                  <div className="flex flex-wrap gap-3 text-3xl justify-evenly">
                      <p className="text-gray-800 px-10 py-5"><SiDocker/>Docker</p>
                      <p className="text-gray-800 px-10 py-5"><SiGit/>Git</p>
                      <p className="text-gray-800 px-10 py-5"><SiGithub/>Github</p>
                      <p className="text-gray-800 px-10 py-5"><SiJetbrains/>Jetbrains</p>
                  </div>
                  <h4 className="text-md pt-4 text-center justify-self-center">
                      My favorite tools for version control, code editing, and container orchestration.
                  </h4>
              </div>
          </div>
      </section>
    <section>
        <div>
            <h3 className="text-6xl text-teal-600 mt-10 mb-10 text-center">Projects</h3>
        </div>
        <div className=" lg:flex flex-row text-right shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
            <div className="flex-1 flex-wrap w-50 h-50">
                <ul className="flex-2 flex-wrap">
                    <li className="flex-5 flex-col-reverse px-12">
                            <a href="http://propsniper.io">
                            <img src="/home.png" alt="Homepage propsniper.io" width={500} height={300} />
                            </a>
                        <h4 className="text-4xl font-semibold pt-5 pb-6 text-right">
                            NBA Player Point Prediction Model
                        </h4>
                    </li>
                    <li className="flex-3 flex-col text-right">
                        <p> Back-end built using Python, Sci-kit, and Pandas. I developed a logistic
                            regression model to predict whether an NBA player would score over x points in a given
                            NBA game based on historical game data. The model accuracy ranged from 65%-33% with an
                            average of 54% in a 1-month period. I also leveraged NBA-API to facilitate data collection and
                            created my own dataset containing a player game splits. Used over 10,000 player data points to train various models,
                            such as logistic regresssions, gradient boosting, & XGBoost. Feature engineering and hyperparameter tuning was also
                            considered as I looked to prevent overfitting and high accuracy scores.
                            I preprocessed data by creating dummy variables for new features such as home/away game advantage,
                            and binarized the target variable based on a threshold of x points. Front-end built with Next.js
                            and Chakra UI. I also routed RESTful APIs that interacts with the python player models and the front end. Source code can be found
                            <a href="https://github.com/lazarobeas/NBAProject"><span className="text-teal-600"> here </span></a>or you can check my Github.
                            You can also click the picture to try it out yourself!</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className=" lg:flex flex-row text-right shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
            <div className="flex-1 flex-wrap w-50 h-50">
                <ul className="flex-2 flex-wrap">
                    <div className="flex origin-right px-10">
                    <img src="/design.png" alt="Design icon"/>
                    </div>
                    <li className="flex-5 flex-col text-right">
                        <h4 className="text-4xl font-semibold pt-1 pb-6">
                            Prizepicks Webscraper
                        </h4>
                    </li>
                    <li className="flex-3 flex-col text-right">
                        <p>Using Python, Selenium, and Pandas, I succesfully built a webscraper that can be deployed on the PrizePicks DFS website
                            and retrieves all of the posted lines and props for a specific sport. It then renders all of the data
                            into a .csv file filtered by player, prop type, and sport. This data is stored in a local database to make prop research more efficient.
                            Source code can be found
                            <a href="https://github.com/lazarobeas/prizepicks-prop-scraper"><span className="text-teal-600"> here </span></a>or you can check out my
                            <a href="https://youtu.be/UD50Js6YdNI"><span className="text-teal-600"> YouTube </span></a>channel for a
                                tutorial.
                            </p>
                    </li>
                </ul>
            </div>
        </div>
        <div className=" lg:flex flex-row text-right shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
            <div className="flex-1 flex-wrap w-50 h-50">
                <ul className="flex-2 flex-wrap">
                    <div className="flex origin-right px-10">
                        <a href="https://edconbuilders.com">
                        <img src="/edcon.PNG" alt="Design icon" width={700} height={400}/>
                        </a>
                    </div>
                    <li className="flex-5 flex-col text-right">
                        <h4 className="text-4xl font-semibold pt-1 pb-6">
                            EDCON Website
                        </h4>
                    </li>
                    <li className="flex-3 flex-col text-right">
                        <p>This website was created using modern technologies including Next.js, React, Tailwind CSS, TypeScript, and Node, epitomizing the dynamic, responsive digital experience I strive to deliver to commercial projects. Tailored for an engineering firm, the platform seamlessly integrates API requests for contact forms, acting as a conduit to funnel prospective customers through various informative pages. The journey from concept to live website entailed planning and execution, all the while adhering to the goals of the client. This lightweight, front-facing website also serves as an effective tool in capturing and engaging potential business inquiries for the client. The live website now stands as a vibrant representation of the firm. Live website
                            <a href="https://edcon-web.vercel.app/"><span className="text-teal-600"> here.</span></a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div className=" lg:flex flex-row text-right shadow-lg p-10 rounded-xl my-1  dark:bg-white flex-1">
            <div className="flex-1 flex-wrap w-50 h-50">
                <ul className="flex-2 flex-wrap">
                    <div className="flex origin-right px-10">
                        <img src="/hungrylion.PNG" alt="Design icon" width={700} height={400}/>
                    </div>
                    <li className="flex-5 flex-col text-right">
                        <h4 className="text-4xl font-semibold pt-1 pb-6">
                            Hack Weekly - Hungry Lion
                        </h4>
                    </li>
                    <li className="flex-3 flex-col text-right">
                        <p>The project was created as part of the Hack Weekly hackathon,
                            a platform where participants gathered to form teams
                            and pit their skills against each other. We were presented with an intriguing challenge –
                            to build a recipe app client using a designated API.
                            I was primarily responsible for the design and front-end development aspects of the project. I took the lead in designing a user-friendly interface,
                            while ensuring that the front-end development seamlessly aligns with the project&aps;s overall objectives. Our team was a dynamic mix of 6 intermediate programmers.
                            Throughout the project, we all learned the importance of effective communication in ensuring the smooth
                            functioning of our team. We worked in tandem, held each other accountable, and created an atmosphere
                            of shared responsibility. This experience has been instrumental in honing our teamwork and collaboration skills,
                            alongside our technical capabilities. You can find the source code
                            <a href="https://github.com/Hack-Weekly/cerulean-lion-recipe-app"><span className="text-teal-600"> here.</span></a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </main>
  )
}

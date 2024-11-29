import React from "react";
import Foto from "../images/foto.jpg";
import Aws from "../images/AWS.png";
import DataBase from "../images/DB.png";
import Dockers from "../images/DKS.png";
import JavaScript from "../images/JS.png";
import Linux from "../images/LN.png";
import Python from "../images/PTH.png";
import LogoReact from "../images/react.png";
import Postman from "../images/Post.png";
import K8S from "../images/K8S.png";
import Azure from "../images/AZ.png";
import NodeJs from "../images/NodeJs.png";
import Jenkins from "../images/Jenkins.png";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.raum}>
        <Link to="/aboutme">
          <div className={styles.foto}>
            <img src={Foto} alt="Portafoto" width={280} height={300} />
            <div className={styles.text}> </div>
            <h1>
              {" "}
              Hi! My name is Rosa. I just finished my one-year Web Developer
              training.
            </h1>
            <p>
              {" "}
              I would like to share with you my experience after finishing my
              training at a company. Let’s go to the beginning.
            </p>
            <p>
              {" "}
              I’m currently living in Berlin, a big cosmopolitan city that gives
              you the opportunity to meet new people and discover interesting
              things. By the way, it’s the best place to never give up on
              learning. There is a really famous saying: "It’s never too late to
              learn a new career." So, that's what I did.
            </p>
          </div>
        </Link>
      </div>
      <div className={styles.raum}></div>
      <hr className={styles.linea}></hr>

      <div className={styles.raum}>
        <img src={Linux} alt="Portafoto" width={280} height={300} />
        <div className={styles.text}>
          <h1>
          What is Linux?
          </h1>
          <p>
            Linux is a powerful, open-source operating system used
            worldwide for servers, desktops, mobile devices, and embedded
            systems. It is known for its stability, security, and flexibility,
            making it the backbone of modern computing.<Link to ="/linux"> more information? clik here?</Link>
          </p>
        </div>
      </div>

      <div className={styles.raum}>
        <img src={Aws} alt="Portafoto" width={280} height={300} />

        <img src={Azure} alt="Portafoto" width={280} height={300} />
        <div className={styles.text}>
          <h1>
            {" "}
            Hi! My name is Rosa. I just finished my one-year Web Developer
            training.
          </h1>
          <p>
            {" "}
            I would like to share with you my experience after finishing my
            training at a company. Let’s go to the beginning.
          </p>
        </div>
      </div>

      <div className={styles.raum}>
        <img src={DataBase} alt="Portafoto" width={280} height={300} />
        <div className={styles.text}>
          <h1>
            {" "}
            Hi! My name is Rosa. I just finished my one-year Web Developer
            training.
          </h1>
          <p>
            {" "}
            I would like to share with you my experience after finishing my
            training at a company. Let’s go to the beginning.
          </p>
        </div>
      </div>

      <div className={styles.raum}>
        <img src={Dockers} alt="Portafoto" width={280} height={300} />
        <img src={K8S} alt="Portafoto" width={280} height={300} />
        <img src={Jenkins} alt="Portafoto" width={280} height={300} />
        <div className={styles.text}>
          <h1>
            {" "}
            Hi! My name is Rosa. I just finished my one-year Web Developer
            training.
          </h1>
          <p>
            {" "}
            I would like to share with you my experience after finishing my
            training at a company. Let’s go to the beginning.
          </p>
        </div>
      </div>

      <div className={styles.raum}>
        <img src={JavaScript} alt="Portafoto" width={280} height={300} />
        <img src={Python} alt="Portafoto" width={280} height={300} />
        <div className={styles.text}>
          <h1>
            {" "}
            Hi! My name is Rosa. I just finished my one-year Web Developer
            training.
          </h1>
          <p>
            {" "}
            I would like to share with you my experience after finishing my
            training at a company. Let’s go to the beginning.
          </p>
        </div>
      </div>

      <div className={styles.raum}>
        <img src={K8S} alt="Portafoto" width={280} height={300} />
        <img src={Jenkins} alt="Portafoto" width={280} height={300} />
        <div className={styles.text}>
          <h1>
            {" "}
            Hi! My name is Rosa. I just finished my one-year Web Developer
            training.
          </h1>
          <p>
            {" "}
            I would like to share with you my experience after finishing my
            training at a company. Let’s go to the beginning.
          </p>
        </div>
      </div>
      <div className={styles.raum}>
        <img src={Linux} alt="Portafoto" width={280} height={300} />
        <div className={styles.text}>
          <h1>
            {" "}
            Hi! My name is Rosa. I just finished my one-year Web Developer
            training.
          </h1>
          <p>
            {" "}
            I would like to share with you my experience after finishing my
            training at a company. Let’s go to the beginning.
          </p>
        </div>
      </div>

      <div className={styles.raum}>
        <img src={Postman} alt="Portafoto" width={280} height={300} />
        <img src={NodeJs} alt="Portafoto" width={280} height={300} />
        <img src={LogoReact} alt="Portafoto" width={280} height={300} />

        <div className={styles.text}>
          <h1>
            {" "}
            Hi! My name is Rosa. I just finished my one-year Web Developer
            training.
          </h1>
          <p>
            {" "}
            I would like to share with you my experience after finishing my
            training at a company. Let’s go to the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

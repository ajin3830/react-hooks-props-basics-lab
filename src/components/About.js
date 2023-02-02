import React from "react";
import Links from "./Links";

function About(props) {
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* this test is weird */}
      {/* {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null} */}
      {props.bio.length >= 1 ? <p>{props.bio}</p> : null}
      {/* <p>{props.bio = "" ? null : props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}


export default About;

// if props empty string
  // dont pass down
  // else
  // pass down props
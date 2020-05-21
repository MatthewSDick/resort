import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import { loremIpsum } from "lorem-ipsum";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "laborum ea cillum do ullamco sint et nostrud ullamco ea",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "laborum ea cillum do ullamco sint et nostrud ullamco ea",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "laborum ea cillum do ullamco sint et nostrud ullamco ea",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "laborum ea cillum do ullamco sint et nostrud ullamco ea",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

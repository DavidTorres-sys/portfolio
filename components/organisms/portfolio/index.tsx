import CardTitle from "@/components/molecules/cardTitle"
import PortfolioCard from "@/components/molecules/portfolioCard"
import React from "react"

const Index = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <CardTitle
          title={"Portfolio"}
          titleSize={"2xl"}
          description={"Some projects I've worked on."}
          descriptionSize={"base"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-col md:flex-row justify-between items-center text-center">
        <PortfolioCard
          title={"SIGA"}
          description={"Administrative management system for the employees of the Faculty of Exact and Natural Sciences at the University of Antioquia."}
          image={"/images/udealogo.png"}
          link={"https://siga-fcen.com/auth/login"}
          linkText={"Learn More"}
          modalDescription={"I led the development of the SIGA application (Sistema Integrado de Gestión Administrativa) for the Faculty of Exact and Natural Sciences."} />

        <PortfolioCard
          title={"Earthquake Projects"}
          description={"Project to visualize the location of earthquakes throughout history."}
          image={"/images/earthquake.png"}
          link={"https://github.com/DavidTorres-sys/proyecto-terremotos"}
          linkText={"Learn More"}
          modalDescription={"This project was developed using Python, FastAPI, Angular with the aim of exploring PostGIS, a spatial database."} />

        <PortfolioCard
          title={"GUMELAB"}
          description={"The transmission of history through entertainment media in Latin America."}
          image={"/images/gumelab.png"}
          link={"https://www.gumelab.net/es/index.html"}
          linkText={"Learn More"}
          modalDescription={"I Orchestrated and optimized models and services on the GUMELAB research project platform, employing design patterns and utilizing technologies such as FastAPI and MongoDB."} />
      </div>
    </div>
  )
}

export default Index

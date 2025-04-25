"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SocialMediaIcon, MarketingStrategyIcon, DataAnalyticsIcon, SEOIcon } from "./icons"

const services = [
  {
    id: "01",
    title: "Education",
    description: "My academic background, degrees and certifications",
    color: "bg-[rgb(255,182,193)]",
    textColor: "text-black",
    icon: <SocialMediaIcon />,
    link: "/education",
  },
  {
    id: "02",
    title: "Skills",
    description: "My technical stack and professional skills",
    color: "bg-[rgb(198,236,38)]",
    textColor: "text-black",
    icon: <MarketingStrategyIcon />,
    link: "/skills",
  },
  {
    id: "03",
    title: "Experience",
    description: "My professional work experience and achievements",
    color: "bg-[rgb(255,165,0)]",
    textColor: "text-black",
    icon: <DataAnalyticsIcon />,
    link: "/experience",
  },
  {
    id: "04",
    title: "Projects",
    description: "My development projects and portfolio",
    color: "bg-white",
    textColor: "text-black",
    icon: <SEOIcon />,
    link: "/projects",
  },
]

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link href={service.link} key={service.id}>
            <div
              className={`card ${service.color} ${service.textColor} p-6 rounded-3xl flex flex-col h-80 cursor-pointer`}
            >
              <div className="mb-6">{service.icon}</div>

              <div className="mt-auto">
                <div className="text-sm font-medium mb-2">{service.id}.</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                {service.description && <p className="text-sm mb-4">{service.description}</p>}

                <div className="flex justify-end">
                  <div className="rounded-full border border-black p-2 transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

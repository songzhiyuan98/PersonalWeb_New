import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SocialMediaIcon, MarketingStrategyIcon, DataAnalyticsIcon, SEOIcon } from "./icons"

const services = [
  {
    id: "01",
    title: "教育经历",
    description: "我的学术背景和所获得的学位、证书",
    color: "bg-[rgb(255,182,193)]",
    textColor: "text-black",
    icon: <SocialMediaIcon />,
    link: "/education",
  },
  {
    id: "02",
    title: "技术展示",
    description: "我掌握的技术栈和专业技能",
    color: "bg-[rgb(198,236,38)]",
    textColor: "text-black",
    icon: <MarketingStrategyIcon />,
    hasArrow: true,
    link: "/skills",
  },
  {
    id: "03",
    title: "工作经历",
    description: "我的专业工作经验和成就",
    color: "bg-[rgb(255,165,0)]",
    textColor: "text-black",
    icon: <DataAnalyticsIcon />,
    link: "/experience",
  },
  {
    id: "04",
    title: "项目展示",
    description: "我参与开发的项目和作品集",
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

                {service.hasArrow && (
                  <div className="flex justify-end">
                    <div className="rounded-full border border-black p-2">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

import type { Profile } from "@types/profile";

export const profile: Profile = {
  name: "Luis Octavio",
  job: "DevOps Engineer",
  avatar: "/my-avatar.png",
  // avatar: "/avatar-2-lucho.png",
  email: "lomv0209@gmail.com",
  bio: [
    "I am a DevOps Engineer/Site Reliability Engineer focused on designing secure, scalable, and cost-effective solutions for my clients. My expertise includes advanced practices in Kubernetes, cybersecurity, high availability, and compliance with NIST and ISO standards. I am also responsible for implementing FinOps policies to automate cloud cost management, ensuring optimal resource usage and cost efficiency. Staying up-to-date with emerging technologies, I provide innovative and efficient solutions that align with the strategic and budgetary needs of organizations.",
    "In my role, I manage the entire lifecycle of cloud infrastructure and ensure the reliability, performance, and security of production systems. I focus on automating processes, improving CI/CD pipelines, and maintaining system observability. Additionally, I work closely with cross-functional teams to ensure the scalability and availability of services while adhering to industry best practices and regulatory requirements.",
  ],
  socials: [
    {
      icon: "logo-github",
      link: "https://github.com/Lucho00Cuba",
    },
    {
      icon: "logo-twitter",
      link: "https://twitter.com/zzjustmezz",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/luis-octavio-mota-verdasco-sys-admin/",
    },
    {
      icon: "finger-print-outline",
      link: "https://www.credly.com/users/zzjustmezz",
    },
  ],
  contacts: [
    {
      icon: "mail-outline",
      title: "Email",
      value: "lomv0209@gmail.com",
      link: "mailto:lomv0209@gmail.com",
    },
    {
      icon: "phone-portrait-outline",
      title: "Phone",
      value: "+34 000 00 0000",
      link: "tel:+34000000000",
    },
    {
      icon: "location-outline",
      title: "Location",
      value: "Aranjuez, Madrid, Spain",
    },
  ],
  services: [
    {
      // icon: "/icon-design.svg",
      icon: "design",
      title: "Infrastructure as Code",
      description:
        "Design and implementation of infrastructure using code for scalability, reliability, and automation, leveraging tools like Terraform, CloudFormation, and Ansible.",
    },
    {
      // icon: "/icon-dev.svg",
      icon: "dev",
      title: "Backend Development",
      description:
        "Efficient backend solutions designed for high performance, security, and scalability, using modern technologies and best practices in containerization and orchestration.",
    },
    {
      // icon: "/icon-app.svg",
      icon: "monitoring",
      title: "Cloud & DevOps Engineering",
      description:
        "Expertise in managing cloud environments, optimizing CI/CD pipelines, container orchestration with Kubernetes, and automating infrastructure processes for continuous integration and delivery.",
    },
    {
      // icon: "/icon-monitoring.svg",
      icon: "photo",
      title: "Monitoring & Observability",
      description:
        "Implementing robust monitoring, logging, and alerting systems with Prometheus, Grafana, and other tools to ensure application health and optimize performance across cloud and on-premise infrastructure.",
    },
  ],
  portfolio: {
    categories: ["All", "Web design", "Applications", "Web development"],
    projects: [
      {
        title: "Finance",
        category: "Web development",
        image: "/project-1.jpg",
      },
      {
        title: "Orizon",
        category: "Applications",
        image: "/project-2.png",
      },
    ],
  },
  education: [
    {
      title: "Microcomputer systems and networks FP Degree",
      date: "2019 — 2021",
      description:
        "Studied microcomputer systems, network protocols, and hardware configurations, gaining hands-on experience in system administration.",
    },
    {
      title: "Network computer systems administration FP Degree",
      date: "2021 — 2023",
      description:
        "Focused on network administration, configuration, troubleshooting, and security, with a strong emphasis on cloud and virtualized environments.",
    },
  ],
  experience: [
    {
      title: "System administrator",
      date: "2022 — 2021",
      description:
        "Managed and maintained hybrid and cloud infrastructures, including OpenStack, ensuring optimal performance and high availability. Focused on container orchestration with Kubernetes and Rancher, as well as automating tasks with custom scripts to enhance operational efficiency and reduce downtime.",
    },
    {
      title: "DevOps Engineer",
      date: "2021 — Present",
      description:
        "Designed and implemented automated infrastructures using Terraform and Ansible, optimizing Kubernetes cluster creation and configuration. Led the adoption of GitOps with Fleet Rancher, implemented CI/CD pipelines, and integrated observability systems like Prometheus and Grafana to improve system monitoring and troubleshooting.",
    },
  ],
  skills: [
    { name: "Infrastructure as Code (IaC)", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "Terraform", level: 80 },
    { name: "Ansible", level: 75 },
    { name: "CI/CD Automation", level: 85 },
    { name: "Cloud Platforms (AWS, OpenStack)", level: 80 },
    { name: "Docker", level: 80 },
    { name: "GitOps", level: 75 },
    { name: "Monitoring & Observability (Prometheus, Grafana)", level: 80 },
    { name: "Scripting (Bash, Python, Golang)", level: 85 },
    { name: "Networking", level: 70 },
  ],
  testimonials: [
    {
      name: "Oscar Gonzalez",
      avatar: "/avatar-1.png",
      text: "Luis is a brilliant mind and proficient in the sysadmin field. I had the opportunity to share with him and he showed a great capacity for learning and the ability to resolve complex problems. Luis is willing to take the lead in situations when required. I believe that his skills and experience make him an excellent candidate for any position related to Information Technologies.",
      date: "2020-10-30",
    },
    {
      name: "David Domenech",
      avatar: "/avatar-4.png",
      text: "Luis is a great, very professional coworker; and he always shows good results and professionalism. He has mainly shown great interest in the sysadmin field and Python programming language. He is a proactive, cooperative and responsible developer and technology enthusiast, who aims to achieve superior results. In spite of being young, it's an importan member and colaborator of our team. If you have any question about him, please feel free to contact me.",
      date: "2021-03-09",
    },
  ],
};

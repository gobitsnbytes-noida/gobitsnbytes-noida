export interface TeamMember {
  name: string
  role: string
  superpowers: string[]
  talkToMeWhen: string[]
  department: "Leadership" | "Engineering" | "Design" | "Community" | "Content" | "Operations"
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Yash",
    role: "Founder & Local Lead",
    superpowers: ["Leadership", "Event Management", "Team Coordination", "Strategic Planning", "Great guy", "Awesome developer"],
    talkToMeWhen: [
      "You need clarity on organizational goals or timelines",
      "You want to coordinate cross-team efforts",
      "You have questions about events or strategic planning"
    ],
    department: "Leadership"
  },
  {
    name: "Aadrika",
    role: "Co-Founder & Chief Creative Strategist",
    superpowers: ["Creative Strategy", "Brand Development", "Campaign Planning", "Design Direction", "Very creative and welcoming!"],
    talkToMeWhen: [
      "You need input on visual direction or design decisions",
      "You are planning a promotional campaign",
      "You want to align a project with the overall brand strategy"
    ],
    department: "Design"
  },
  {
    name: "Akshat Kushwaha",
    role: "Co-Founder & Technical Lead",
    superpowers: ["AI & LLMOps", "Cloud Infrastructure", "Full-Stack Development", "Amazing human being", "Great software engineer"],
    talkToMeWhen: [
      "You need to propose or evaluate a technical stack",
      "You need help with agent development or cloud infrastructure",
      "You want to implement AI integrations or backend systems"
    ],
    department: "Engineering"
  },
  {
    name: "Devansh",
    role: "Founding Member & Backend Lead",
    superpowers: ["Backend Development", "Database Architecture", "Community Outreach", "Partnership Building"],
    talkToMeWhen: [
      "You are designing database schemas or backend APIs",
      "You need outreach support for schools or students",
      "You want to explore partnerships with external communities"
    ],
    department: "Engineering"
  },
  {
    name: "Maryam",
    role: "Social Media & Promotions Head",
    superpowers: ["Social Media", "Brand Identity", "Visual Communication", "Design Systems"],
    talkToMeWhen: [
      "You need visuals designed for an event or social media post",
      "You want to ensure branding consistency for a campaign",
      "You have questions regarding social media promotions"
    ],
    department: "Design"
  },
  {
    name: "Srishti",
    role: "Operations & Communications Head",
    superpowers: ["Operations Management", "Team Communications", "Project Coordination", "Process Optimization"],
    talkToMeWhen: [
      "You need help with internal operations or processes",
      "You want to optimize communication within your team",
      "You need assistance coordinating cross-department initiatives"
    ],
    department: "Operations"
  }
]

export function findExperts(query: string): TeamMember[] {
  const lowerQuery = query.toLowerCase()
  if (!lowerQuery) return TEAM_MEMBERS

  return TEAM_MEMBERS.filter(
    (member) =>
      member.name.toLowerCase().includes(lowerQuery) ||
      member.role.toLowerCase().includes(lowerQuery) ||
      member.superpowers.some((s) => s.toLowerCase().includes(lowerQuery)) ||
      member.talkToMeWhen.some((t) => t.toLowerCase().includes(lowerQuery))
  )
}

export function recommendRoles(skills: string[], interests: string[]): string {
  const userKeywords = [...skills, ...interests].map((k) => k.toLowerCase())
  const recommendations: string[] = []

  if (userKeywords.some((k) => k.includes("design") || k.includes("ui") || k.includes("art") || k.includes("drawing") || k.includes("brand"))) {
    recommendations.push("Design & Content Team (Talk to Aadrika or Maryam)")
  }
  if (
    userKeywords.some(
      (k) => k.includes("code") || k.includes("dev") || k.includes("web") || k.includes("python") || k.includes("js") || k.includes("ai") || k.includes("cloud")
    )
  ) {
    recommendations.push("Engineering Team (Talk to Akshat Kushwaha or Devansh)")
  }
  if (
    userKeywords.some(
      (k) => k.includes("people") || k.includes("event") || k.includes("manage") || k.includes("lead") || k.includes("operations")
    )
  ) {
    recommendations.push("Community, Operations & Leadership (Talk to Yash or Srishti)")
  }

  if (recommendations.length === 0) {
    return "General Member - join our Discord to explore different tracks!"
  }

  return recommendations.join(", ")
}


export default function About() {
  const team = [
    { name: "YASH SINGH", role: "CO-FOUNDER & ORGANISATION LEAD", image: "/logo.svg" },
    { name: "AADRIKA MAURYA", role: "CO-FOUNDER & CHIEF CREATIVE STRATEGIST", image: "/logo.svg" },
    { name: "AKSHAT KUSHWAHA", role: "CO-FOUNDER & TECHNICAL LEAD", image: "/logo.svg" },
    { name: "DEVAANSH PATHAK", role: "FOUNDING MEMBER & BACKEND LEAD", image: "/logo.svg" },
    { name: "MARYAM FATIMA", role: "SOCIAL MEDIA & PROMOTIONS HEAD", image: "/logo.svg" },
    { name: "SRISTHI SINGH", role: "OPERATIONS & COMMUNICATIONS HEAD", image: "/logo.svg" },
  ];

  return (
    <main className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold uppercase tracking-tight text-[#E5E5E5] md:text-6xl">ABOUT</h1>

        <div className="mt-8 space-y-2 text-sm uppercase tracking-tight text-gray-400">
          <p>BITS&amp;BYTES IS A SYSTEM.</p>
          <p>THIS IS THE NOIDA FORK.</p>
          <p>TEEN-LED. SHIPS PUBLICLY.</p>
        </div>

        <h2 className="mt-14 border-t border-[#2a2a2a] pt-6 text-xs font-medium uppercase tracking-tight text-gray-500">
          TEAM
        </h2>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="space-y-3">
              <img src={member.image} alt={member.name} className="h-56 w-full object-cover" />
              <p className="text-sm font-semibold uppercase tracking-tight text-[#E5E5E5]">{member.name}</p>
              <p className="text-xs uppercase tracking-tight text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
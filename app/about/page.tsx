export default function About() {
  const founders = [
    { name: "Akshat", image: "/team/akshat.jpg" },
    { name: "Yash", image: "/team/yash.jpg" },
    { name: "Aadrika", image: "/team/aadrika.jpg" },
  ];

  const noidaCore = [
    { name: "Aryan Chauhan", role: "Lead + Tech", image: "/team/aryan.jpg" },
    { name: "Nisha Rawat", role: "Operations Head", image: "/team/nisha.jpg" },
    { name: "Disha Yadav", role: "Creative & Design Head", image: "/team/disha.jpg" },
    { name: "Benny Vijay Daniel", role: "Sponsorship Head", image: "/team/benny.jpg" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-[#e5e5e5] md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold uppercase tracking-tight md:text-6xl">ABOUT</h1>

        <section className="mt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">FOUNDERS</h2>
          <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            {founders.map((member) => (
              <div key={member.name} className="space-y-3">
                <img src={member.image} alt={member.name} className="aspect-square w-full object-cover" />
                <p className="text-base font-medium tracking-tight">{member.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">NOIDA CORE</h2>
          <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {noidaCore.map((member) => (
              <div key={member.name} className="space-y-3">
                <img src={member.image} alt={member.name} className="aspect-square w-full object-cover" />
                <p className="text-base font-medium tracking-tight">{member.name}</p>
                <p className="text-xs uppercase tracking-wide text-[#9a9a9a]">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
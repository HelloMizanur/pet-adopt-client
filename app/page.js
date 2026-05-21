"use client";
import { Button, Card, CardBody, Chip, Image } from "@heroui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { api, endpoints } from "@/lib/api";
import PetCard from "@/components/PetCard";
import { Heart, Shield, Sparkles, PawPrint, Stethoscope, HandHeart, Quote } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    api.get(endpoints.petsFeatured).then((r) => setFeatured(r.data)).catch(() => {});
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Chip startContent={<Sparkles size={14} />} color="primary" variant="flat" className="mb-5">
              500+ pets adopted this month
            </Chip>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Find your <span className="gradient-text">forever friend</span>.
            </h1>
            <p className="mt-5 text-lg text-foreground/70 max-w-xl">
              Browse adoptable dogs, cats, birds and more from verified shelters and loving foster homes.
              Every adoption changes two lives — theirs and yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={NextLink} href="/pets" color="primary" size="lg" variant="shadow" endContent={<PawPrint size={16}/>}>
                Adopt Now
              </Button>
              <Button as={NextLink} href="/dashboard/add-pet" size="lg" variant="bordered">
                List a Pet
              </Button>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="text-2xl font-bold text-primary">12k+</div><div className="text-foreground/60">Happy adopters</div></div>
              <div><div className="text-2xl font-bold text-primary">350+</div><div className="text-foreground/60">Partner shelters</div></div>
              <div><div className="text-2xl font-bold text-primary">98%</div><div className="text-foreground/60">Success rate</div></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                removeWrapper
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80"
                alt="A happy adopted dog"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-content1 shadow-xl rounded-2xl p-4 flex items-center gap-3 border border-divider/40">
              <div className="p-2 rounded-full bg-primary/15"><Heart className="text-primary" /></div>
              <div><div className="text-sm font-semibold">Adopted today</div><div className="text-xs text-foreground/60">Luna found her family ❤️</div></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Featured Pets</h2>
            <p className="text-foreground/70 mt-2">Newest furry friends looking for a home.</p>
          </div>
          <Button as={NextLink} href="/pets" variant="flat" color="primary">View all</Button>
        </motion.div>
        {featured.length === 0 ? (
          <p className="text-foreground/60">No pets yet — be the first to add one!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => <PetCard key={p._id} pet={p} index={i} />)}
          </div>
        )}
      </section>

      {/* Why Adopt */}
      <section className="bg-content1/40 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">Why adopt a pet?</motion.h2>
          <p className="text-center text-foreground/70 mt-3 max-w-2xl mx-auto">
            Adopting is one of the most rewarding things you'll ever do. Here's what awaits you.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Heart, title: "Save a life", desc: "Give a deserving animal a safe and loving home." },
              { icon: Shield, title: "Healthy & vetted", desc: "All pets are health-checked and vaccinated by partner shelters." },
              { icon: HandHeart, title: "Lower cost", desc: "Adoption fees are a fraction of breeder prices, with care included." },
            ].map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="bg-content1 border border-divider/40 h-full"><CardBody className="p-6">
                  <div className="p-3 rounded-xl bg-primary/15 w-fit"><f.icon className="text-primary" /></div>
                  <h3 className="font-bold text-xl mt-4">{f.title}</h3>
                  <p className="text-foreground/70 mt-2">{f.desc}</p>
                </CardBody></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">Success stories</motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { name: "Emma & Bailey", text: "Bailey filled our home with joy from day one. The adoption process was seamless!", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80" },
            { name: "Marcus & Whiskers", text: "Found my best friend on PawHaven. Whiskers is the king of the apartment now.", img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80" },
            { name: "Sara & Mango", text: "Mango brings so much color into our days. We are forever grateful.", img: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600&q=80" },
          ].map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Card className="bg-content1 overflow-hidden h-full">
                <Image removeWrapper alt={s.name} src={s.img} className="h-44 w-full object-cover" />
                <CardBody className="p-6">
                  <Quote className="text-primary mb-2" />
                  <p className="text-foreground/80">{s.text}</p>
                  <p className="mt-4 font-semibold">— {s.name}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pet Care Tips */}
      <section className="bg-content1/40 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">Pet care tips</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[
              { icon: Stethoscope, t: "Regular vet visits", d: "Annual checkups keep small problems small." },
              { icon: PawPrint, t: "Daily exercise", d: "Movement is medicine — for body and mind." },
              { icon: Heart, t: "Quality nutrition", d: "Choose food made for their age and size." },
              { icon: Shield, t: "Safe environment", d: "Pet-proof your home and provide cozy spaces." },
            ].map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Card className="bg-content1 h-full"><CardBody className="p-5">
                  <f.icon className="text-primary" />
                  <h4 className="font-semibold mt-3">{f.t}</h4>
                  <p className="text-sm text-foreground/70 mt-1">{f.d}</p>
                </CardBody></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">How adoption works</motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { n: "01", t: "Browse", d: "Explore pets in your area, filter by species and breed." },
            { n: "02", t: "Request", d: "Submit a quick adoption request to the owner or shelter." },
            { n: "03", t: "Welcome home", d: "Once approved, pick up your new best friend." },
          ].map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Card className="bg-content1 h-full"><CardBody className="p-6">
                <div className="text-5xl font-extrabold gradient-text">{s.n}</div>
                <h3 className="font-bold text-xl mt-2">{s.t}</h3>
                <p className="text-foreground/70 mt-2">{s.d}</p>
              </CardBody></Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp}>
          <Card className="bg-gradient-to-tr from-primary to-secondary text-primary-foreground">
            <CardBody className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold">Ready to meet your match?</h3>
                <p className="mt-2 opacity-90">Start browsing pets available for adoption right now.</p>
              </div>
              <Button as={NextLink} href="/pets" size="lg" color="default" variant="solid" className="font-semibold">
                Browse pets
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}

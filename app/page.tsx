import { KeyPegboard } from "@/components/key-pegboard";
import {
  Wind,
  Wifi,
  Tv,
  ShieldCheck,
  ShowerHead,
  Coffee,
  Sun,
  ParkingSquare,
  Anchor,
  Waves,
  MapPin,
  Phone,
} from "lucide-react";

const AMENITIES = [
  { icon: Wind, label: "Klimatizirane sobe" },
  { icon: Wifi, label: "Besplatan WiFi" },
  { icon: Tv, label: "TV u svakoj sobi" },
  { icon: ShieldCheck, label: "Sef na recepciji" },
  { icon: ShowerHead, label: "Privatna kupaonica" },
  { icon: Sun, label: "Terasa" },
  { icon: ParkingSquare, label: "Parking uz rezervaciju" },
  { icon: Coffee, label: "Doručak u pansionu" },
];

const NEARBY = [
  { icon: Anchor, label: "ACI Marina Vodice", note: "nekoliko minuta hoda" },
  { icon: Waves, label: "Plaža Male Vrulje", note: "≈ 8 min hoda" },
  { icon: MapPin, label: "Riva i centar Vodica", note: "na dva koraka od pansiona" },
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* HERO — the reception wall the pegboard hangs on */}
      <section className="relative flex min-h-[92svh] flex-col justify-center px-5 pt-28 pb-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <p className="reveal text-label text-terracotta">Pansion · Vodice, riva</p>
          <h1 className="reveal mt-5 max-w-3xl font-display text-[length:var(--hero-title-size)] leading-[var(--hero-title-leading)] text-foreground text-balance">
            Vaš ključ vas već čeka <span className="italic text-terracotta">na rivi</span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Obiteljski pansion u srcu Vodica — klimatizirane sobe, doručak i topla dobrodošlica,
            na nekoliko koraka od ACI marine i gradske plaže.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#sobe"
              className="rounded-full bg-terracotta px-7 py-3.5 text-sm uppercase tracking-[0.12em] text-[var(--button-primary-fg)] transition-colors hover:bg-[var(--button-primary-hover-bg)]"
            >
              Pogledajte sobe
            </a>
            <a
              href="tel:+385954400155"
              className="flex items-center gap-2 rounded-full border border-[var(--button-ghost-border)] px-6 py-3.5 text-sm uppercase tracking-[0.12em] text-marina transition-colors hover:border-terracotta hover:text-terracotta"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              +385 95 440 0155
            </a>
          </div>

          <dl className="reveal mt-14 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {NEARBY.map((n) => (
              <div key={n.label} className="flex items-start gap-3">
                <n.icon className="mt-0.5 h-5 w-5 shrink-0 text-brass" strokeWidth={1.75} />
                <div>
                  <dt className="text-sm font-medium text-foreground">{n.label}</dt>
                  <dd className="text-xs text-muted-foreground">{n.note}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ROOM-KEY PEGBOARD — the site's signature layout */}
      <section id="sobe" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="reveal text-label text-terracotta">Odaberite ključ</p>
          <h2 className="reveal mt-3 max-w-xl font-display text-3xl text-foreground sm:text-4xl">
            Sobe pansiona Makina
          </h2>
          <p className="reveal mt-4 max-w-xl text-muted-foreground">
            Kao na pravoj recepcijskoj ploči — svaki ključ predstavlja tip sobe. Podignite ga da
            vidite detalje, kapacitet i pogled.
          </p>
          <div className="mt-12">
            <KeyPegboard />
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="sadrzaji" className="bg-card px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="reveal text-label text-terracotta">U pansionu</p>
          <h2 className="reveal mt-3 font-display text-3xl text-foreground sm:text-4xl">
            Sadržaji koje ćete koristiti svaki dan
          </h2>
          <ul className="reveal mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {AMENITIES.map((a) => (
              <li key={a.label} className="flex flex-col items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background">
                  <a.icon className="h-5 w-5 text-marina" strokeWidth={1.75} />
                </span>
                <span className="text-sm text-foreground">{a.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BREAKFAST / PANSION SERVICE */}
      <section id="dorucak" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="reveal">
            <p className="text-label text-terracotta">Usluga pansiona</p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Doručak koji vas postavi na noge
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Svako jutro na raspolaganju su bife i à la carte doručak — svježe pecivo, voće i
              sokovi, uz mogućnost pripreme paketa hrane za izlete i putovanja brodom.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Osoblje na recepciji rado pomaže s preporukama za plažu, marinu i izlete po
              Šibensko-kninskoj županiji.
            </p>
          </div>
          <div
            aria-hidden
            className="reveal h-64 rounded-3xl md:h-80"
            style={{
              background:
                "linear-gradient(160deg, var(--marina) 0%, var(--marina-deep) 55%, var(--terracotta-deep) 100%)",
            }}
          />
        </div>
      </section>

      {/* LOCATION */}
      <section id="lokacija" className="bg-card px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="reveal text-label text-terracotta">Lokacija</p>
          <h2 className="reveal mt-3 font-display text-3xl text-foreground sm:text-4xl">
            Na rivi, uz marinu i plažu
          </h2>
          <p className="reveal mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Pansion se nalazi na vodičkoj rivi (Obala I. Juričev Čota), odmah uz šetnicu — blizu
            trgovina, kafića i vezova ACI marine Vodice, s gradskom plažom Male Vrulje na
            kratkoj šetnji.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pansion+Makina+Obala+I.+Juri%C4%8Dev+%C4%8Cota+20+Vodice"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-[var(--button-ghost-border)] px-6 py-3 text-sm uppercase tracking-[0.12em] text-marina transition-colors hover:border-terracotta hover:text-terracotta"
            >
              <MapPin className="h-4 w-4" strokeWidth={2} />
              Otvori u Google kartama
            </a>
            <span className="text-sm text-muted-foreground">
              Obala I. Juričev Čota 20, 22211 Vodice
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING CTA */}
      <section id="kontakt" className="px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-border bg-[var(--marina-deep)] px-6 py-14 text-center sm:px-14">
          <p className="text-label text-brass">Rezervacije</p>
          <h2 className="mt-3 font-display text-3xl text-[var(--button-primary-fg)] sm:text-4xl">
            Rezervirajte svoj ključ
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--button-primary-fg)]/75">
            Nazovite recepciju izravno ili provjerite dostupnost putem Booking.com.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+385954400155"
              className="flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm uppercase tracking-[0.12em] text-[var(--button-primary-fg)] transition-colors hover:bg-[var(--button-primary-hover-bg)]"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              +385 95 440 0155
            </a>
            <a
              href="https://www.booking.com/hotel/hr/makina.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--button-primary-fg)]/30 px-7 py-3.5 text-sm uppercase tracking-[0.12em] text-[var(--button-primary-fg)] transition-colors hover:border-[var(--button-primary-fg)]"
            >
              Provjeri na Booking.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg text-foreground">Pansion Makina</span>
          <span className="text-xs text-muted-foreground">
            Obala I. Juričev Čota 20, 22211 Vodice · +385 95 440 0155
          </span>
          <span className="text-xs text-muted-foreground">© 2026 Pansion Makina</span>
        </div>
      </footer>
    </main>
  );
}

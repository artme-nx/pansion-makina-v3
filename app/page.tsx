import { KeyPegboard } from "@/components/key-pegboard";
import Image from "next/image";
import { Photo, BASE } from "@/components/photo";
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

          <Photo
            src="/img/pansion-makina-pogled-marina-vodice.webp"
            alt="Pogled s pansiona Makina na vodičku rivu i vezove ACI marine s jedrilicama, ispod crveni krovovi kioska na obali"
            width={1920}
            height={1280}
            priority
            sizes="(min-width: 1024px) 1100px, 92vw"
            className="reveal mt-14 aspect-[16/9] w-full md:aspect-[21/9]"
          />

          <dl className="reveal mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
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

          <div className="reveal mt-8 grid gap-5 sm:grid-cols-3">
            <Photo
              src="/img/pansion-makina-soba-bracni-krevet.webp"
              alt="Soba pansiona Makina s bračnim krevetom, narančastim jastucima i naslonjačem uz zid"
              width={1400}
              height={933}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 30vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-soba-radni-stol.webp"
              alt="Soba pansiona Makina s bijelim radnim stolom i televizorom nasuprot kreveta"
              width={1400}
              height={933}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 30vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-soba-pogled.webp"
              alt="Uredno pospremljen krevet u sobi pansiona Makina, sa zidnim svjetiljkama i slikom iznad uzglavlja"
              width={1400}
              height={933}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 30vw, 92vw"
            />
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

          <div className="reveal mt-14 grid gap-5 sm:grid-cols-3">
            <Photo
              src="/img/pansion-makina-ulaz-kameni-zid.webp"
              alt="Recepcija pansiona Makina — drveni pult s prospektima, kameni zidovi i stubište prema sobama"
              width={1200}
              height={800}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 30vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-interijer-kameni-zid.webp"
              alt="Predvorje pansiona Makina s foteljama uz očuvani kameni zid i stubištem s kovanom ogradom"
              width={1400}
              height={933}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 30vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-kupaonica.webp"
              alt="Privatna kupaonica u sobi pansiona Makina s tuš kabinom, umivaonikom i ogledalom"
              width={1200}
              height={800}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 30vw, 92vw"
            />
          </div>
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
          <Photo
            src="/img/pansion-makina-restoran-interijer.webp"
            alt="Blagovaonica restorana u prizemlju zgrade pansiona Makina — dugi stolovi s ljubičastim nadstolnjacima, bijele stolice i kameni zid"
            width={1024}
            height={683}
            className="reveal aspect-[3/2] w-full"
            sizes="(min-width: 768px) 46vw, 92vw"
          />
        </div>
      </section>

      {/* KONOBA, PIZZA & COCKTAIL BAR — the ground floor of the same building */}
      <section id="konoba" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="reveal text-label text-terracotta">U prizemlju iste zgrade</p>
          <h2 className="reveal mt-3 max-w-xl font-display text-3xl text-foreground sm:text-4xl">
            Konoba, pizza iz krušne peći i cocktail bar
          </h2>
          <p className="reveal mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Pansion, restoran s pizzerijom i caffe/night bar dijele istu adresu i istog domaćina —
            večera i izlazak su na istom mjestu gdje spavate. Bar u prizemlju radi do kasno, pa
            sobe iznad nisu izbor za goste koji traže potpunu tišinu.
          </p>

          <div className="reveal mt-12 grid gap-5 sm:grid-cols-2">
            <Photo
              src="/img/pansion-makina-jelo-konoba-1.webp"
              alt="Carpaccio s kaparima, maslinama i listićima sira, posluženo na bijelom ovalnom tanjuru na drvenom stolu"
              width={1200}
              height={800}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 46vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-jelo-konoba-2.webp"
              alt="Salata s trakama pečene piletine, svježim povrćem i bijelim umakom u dubokom bijelom tanjuru"
              width={1200}
              height={800}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 46vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-znak-sobe-restaurant.webp"
              alt="Svjetleći znak MAKINA na zupčaniku ispred objekta, s natpisima SOBE, RESTAURANT, PIZZA i COCKTAIL BAR"
              width={1024}
              height={683}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 46vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-night-club.webp"
              alt="Puni night bar u prizemlju objekta u večernjim satima, gosti pod plavim i ljubičastim svjetlima ispod staklenog krova"
              width={1024}
              height={683}
              radius="rounded-2xl"
              className="aspect-[3/2] w-full"
              sizes="(min-width: 640px) 46vw, 92vw"
            />
          </div>
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

          <div className="reveal mt-12 grid gap-5 md:grid-cols-2">
            <Photo
              src="/img/pansion-makina-zgrada-riva-vodice.webp"
              alt="Pogled odozgo na natkrivenu terasu konobe i kamenu zgradu pansiona Makina, s vezovima marine u pozadini"
              width={1400}
              height={933}
              className="aspect-[3/2] w-full"
              sizes="(min-width: 768px) 46vw, 92vw"
            />
            <Photo
              src="/img/pansion-makina-terasa-pogled-marina.webp"
              alt="Ograda terase ukrašena ribarskim mrežama i loncima s biljem, iza nje jarboli jedrilica u marini Vodice"
              width={1400}
              height={933}
              className="aspect-[3/2] w-full"
              sizes="(min-width: 768px) 46vw, 92vw"
            />
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING CTA */}
      <section id="kontakt" className="px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-border bg-[var(--marina-deep)] px-6 py-14 text-center sm:px-14">
          <Image
            src={`${BASE}/img/makina-logo.png`}
            alt="Makina Vodice"
            width={160}
            height={79}
            className="mx-auto mb-7 h-auto w-32"
          />
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

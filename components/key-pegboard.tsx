"use client";

import { useId, useState } from "react";
import { BedDouble, Users, Waves, Building2, Wind, Wifi, Tv, ShowerHead } from "lucide-react";

type RoomKey = {
  id: string;
  tag: string;
  title: string;
  capacity: string;
  view: string;
  blurb: string;
  amenities: string[];
  tone: "terracotta" | "marina" | "brass";
  icon: typeof BedDouble;
};

const ROOM_KEYS: RoomKey[] = [
  {
    id: "dvokrevetna",
    tag: "01",
    title: "Dvokrevetna soba",
    capacity: "2 osobe",
    view: "gradska strana",
    blurb:
      "Standardna klimatizirana soba za dvoje, mirnija strana zgrade, kratka šetnja do rive i centra Vodica.",
    amenities: ["Klima uređaj", "Besplatan WiFi", "TV", "Privatna kupaonica s tušem"],
    tone: "marina",
    icon: BedDouble,
  },
  {
    id: "pogled-more",
    tag: "02",
    title: "Soba s pogledom na more",
    capacity: "2 osobe",
    view: "pogled na rivu / more",
    blurb:
      "Ista udobnost kao standardna dvokrevetna soba, uz pogled prema moru i vodičkoj rivi — buđenje uz zvuk marine.",
    amenities: ["Klima uređaj", "Besplatan WiFi", "TV", "Radni stol"],
    tone: "terracotta",
    icon: Waves,
  },
  {
    id: "trokrevetna",
    tag: "03",
    title: "Trokrevetna soba",
    capacity: "2–3 osobe",
    view: "gradska strana",
    blurb:
      "Prostranija soba za manje grupe ili obitelj s jednim djetetom — dodatni ležaj po dogovoru s recepcijom.",
    amenities: ["Klima uređaj", "Besplatan WiFi", "TV", "Sef"],
    tone: "brass",
    icon: Users,
  },
  {
    id: "obiteljska",
    tag: "04",
    title: "Obiteljska soba",
    capacity: "3–4 osobe",
    view: "gradska strana",
    blurb:
      "Za obitelji koje putuju zajedno — udobno za duži boravak, na nekoliko minuta hoda od plaže Male Vrulje.",
    amenities: ["Klima uređaj", "Besplatan WiFi", "TV", "Privatna kupaonica"],
    tone: "marina",
    icon: Building2,
  },
];

const TONE_CLASSES: Record<RoomKey["tone"], { fob: string; ring: string; text: string }> = {
  terracotta: {
    fob: "bg-[var(--terracotta)]",
    ring: "border-[var(--terracotta)]",
    text: "text-[var(--button-primary-fg)]",
  },
  marina: {
    fob: "bg-[var(--marina)]",
    ring: "border-[var(--marina)]",
    text: "text-[var(--button-primary-fg)]",
  },
  brass: {
    fob: "bg-[var(--brass)]",
    ring: "border-[var(--brass)]",
    text: "text-[var(--marina-deep)]",
  },
};

const AMENITY_ICON: Record<string, typeof Wind> = {
  "Klima uređaj": Wind,
  "Besplatan WiFi": Wifi,
  TV: Tv,
  "Privatna kupaonica s tušem": ShowerHead,
  "Privatna kupaonica": ShowerHead,
  "Radni stol": BedDouble,
  Sef: Building2,
};

function RoomKeyFob({
  room,
  isSelected,
  onSelect,
  panelId,
}: {
  room: RoomKey;
  isSelected: boolean;
  onSelect: () => void;
  panelId: string;
}) {
  const tone = TONE_CLASSES[room.tone];
  const Icon = room.icon;

  return (
    <div className="flex flex-col items-center">
      {/* Peg mounted on the board */}
      <span
        aria-hidden
        className="relative z-10 h-3 w-3 rounded-full bg-[var(--pegboard-peg-color)] shadow-[0_1px_2px_rgba(13,31,45,0.4)]"
      />
      <button
        type="button"
        aria-pressed={isSelected}
        aria-controls={panelId}
        onClick={onSelect}
        className={`group -mt-0.5 flex flex-col items-center transition-transform duration-(--duration-lift) ease-(--ease-swing) ${
          isSelected ? "-translate-y-3 rotate-[-2deg] scale-105" : "hover:-translate-y-1.5 hover:rotate-[-1deg]"
        }`}
      >
        {/* Split key ring */}
        <span
          aria-hidden
          className={`h-6 w-6 rounded-full border-[3px] bg-transparent transition-colors ${
            isSelected ? tone.ring : "border-[var(--marina)]/35"
          }`}
        />
        {/* Fob tag */}
        <span
          className={`-mt-1 flex w-[6.5rem] flex-col items-center gap-1 rounded-b-2xl rounded-t-md px-3 pb-4 pt-5 shadow-[var(--pegboard-fob-shadow)] transition-colors sm:w-28 ${
            isSelected ? tone.fob : "bg-[var(--marina)]/85"
          } ${isSelected ? tone.text : "text-[var(--button-primary-fg)]"}`}
        >
          <Icon className="h-4 w-4" strokeWidth={1.75} />
          <span className="text-label" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            {room.tag}
          </span>
          <span className="text-center text-[0.72rem] font-medium leading-tight text-balance">
            {room.title}
          </span>
        </span>
      </button>
    </div>
  );
}

export function KeyPegboard() {
  const [selectedId, setSelectedId] = useState<string | null>(ROOM_KEYS[0].id);
  const baseId = useId();
  const panelId = `${baseId}-room-detail`;

  const selected = ROOM_KEYS.find((r) => r.id === selectedId) ?? null;

  return (
    <div className="reveal">
      {/* The pegboard wall */}
      <div className="bg-pegboard rounded-3xl border border-border px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-10 sm:gap-x-10 md:justify-between">
          {ROOM_KEYS.map((room) => (
            <RoomKeyFob
              key={room.id}
              room={room}
              isSelected={selectedId === room.id}
              onSelect={() => setSelectedId((prev) => (prev === room.id ? null : room.id))}
              panelId={panelId}
            />
          ))}
        </div>
      </div>

      {/* Detail panel — reveals what's on the lifted key */}
      <div
        id={panelId}
        role="region"
        aria-live="polite"
        className="mt-6 rounded-2xl border border-border bg-card px-6 py-8 sm:px-10"
      >
        {selected ? (
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-label text-terracotta">Ključ {selected.tag} — odabran</p>
              <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
                {selected.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {selected.capacity} · {selected.view}
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-foreground/85">
                {selected.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {selected.amenities.map((a) => {
                  const AIcon = AMENITY_ICON[a] ?? Wind;
                  return (
                    <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <AIcon className="h-4 w-4 text-marina" strokeWidth={1.75} />
                      {a}
                    </li>
                  );
                })}
              </ul>
            </div>
            <a
              href="tel:+385954400155"
              className="justify-self-start rounded-full bg-terracotta px-6 py-3 text-center text-sm uppercase tracking-[0.12em] text-[var(--button-primary-fg)] transition-colors hover:bg-[var(--button-primary-hover-bg)] md:justify-self-end"
            >
              Upit za ovu sobu
            </a>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Odaberite ključ s pegle da vidite detalje sobe.
          </p>
        )}
        <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
          Raspored, točna dostupnost i cijene po sobi provjeravaju se na recepciji ili putem
          rezervacije — kategorije gore prikazuju tipičnu ponudu pansiona.
        </p>
      </div>
    </div>
  );
}

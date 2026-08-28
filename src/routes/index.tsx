import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Car,
  Check,
  ChevronDown,
  Clock,
  FileCheck2,
  KeyRound,
  MessageCircle,
  Minus,
  ShieldCheck,
  Star,
  Truck,
  Users,
  X,
} from "lucide-react";

import logoAsset from "@/assets/tahiti-logo.png.asset.json";
import heroImg from "@/assets/hero-auto.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seguro Auto sem burocracia | Tahiti Corretora de Seguros" },
      {
        name: "description",
        content:
          "Cotação de seguro de automóvel em 1 minuto: assistência 24h, carro reserva, cobertura contra roubo e colisão. Atendimento humanizado via WhatsApp.",
      },
      { property: "og:title", content: "Seguro Auto sem burocracia | Tahiti Corretora" },
      {
        property: "og:description",
        content:
          "Proteja seu carro contra roubo, colisão e imprevistos. Cotação gratuita em 1 minuto, com assistência 24h em todo o Brasil.",
      },
    ],
  }),
  component: Index,
});

const WA = (msg: string) =>
  `https://wa.me/5592994017045?text=${encodeURIComponent(msg)}`;

const CTA_MAIN = WA(
  "Oi! Vim pelo site e quero uma cotação de seguro auto em 1 minuto.",
);

const benefits = [
  {
    icon: Truck,
    title: "Assistência 24h",
    text: "Guincho, troca de pneu, pane elétrica e pane seca a qualquer hora, em todo o Brasil.",
  },
  {
    icon: KeyRound,
    title: "Carro reserva",
    text: "Você não fica a pé enquanto o seu carro está na oficina. Retirada rápida e sem enrolação.",
  },
  {
    icon: ShieldCheck,
    title: "Cobertura a terceiros",
    text: "RCF-V para danos materiais e corporais causados a outras pessoas. Seu bolso protegido.",
  },
  {
    icon: FileCheck2,
    title: "Sem burocracia",
    text: "Contratação 100% digital e vistoria por foto pelo celular, em poucos minutos.",
  },
];

const steps = [
  {
    n: "01",
    title: "Envie seus dados",
    text: "Nome, CEP e o modelo do veículo. Leva menos de 1 minuto pelo WhatsApp.",
  },
  {
    n: "02",
    title: "Receba a cotação ideal",
    text: "Comparamos as principais seguradoras e trazemos o melhor custo-benefício para o seu perfil.",
  },
  {
    n: "03",
    title: "Dirija tranquilo",
    text: "Fechou? A apólice é emitida e a proteção começa a valer. Suporte no sinistro do início ao fim.",
  },
];

const testimonials = [
  {
    name: "Rafael Menezes",
    city: "Manaus / AM",
    initials: "RM",
    text: "Bati o carro num sábado à noite. Mandei mensagem e o guincho chegou em 40 minutos. Nunca fui tão bem atendido.",
  },
  {
    name: "Juliana Prado",
    city: "Parintins / AM",
    initials: "JP",
    text: "Tiveram meu carro furtado no estacionamento. A Tahiti tocou todo o processo e a indenização saiu sem dor de cabeça.",
  },
  {
    name: "Carlos Eduardo Lima",
    city: "Itacoatiara / AM",
    initials: "CL",
    text: "Paguei quase 30% menos que na renovação anterior e ainda ganhei carro reserva. Cotação chegou no mesmo dia.",
  },
];

const faqs = [
  {
    q: "Quanto tempo demora para o seguro ativar?",
    a: "Após a aprovação da proposta e a vistoria por foto, a cobertura costuma ser ativada no mesmo dia. Em muitos perfis a emissão sai em poucas horas.",
  },
  {
    q: "Posso incluir qualquer modelo de carro?",
    a: "Trabalhamos com carros de passeio, SUVs, picapes e veículos de uso comercial leve. Modelos mais antigos ou blindados são analisados caso a caso com as seguradoras parceiras.",
  },
  {
    q: "Como funciona o acionamento do guincho em caso de pane?",
    a: "Você chama pelo WhatsApp ou pela central 24h da seguradora. Confirmamos a localização e o guincho é despachado para o local, com reboque até a oficina indicada.",
  },
  {
    q: "Preciso pagar franquia mesmo em pequenos reparos?",
    a: "Nem sempre. Serviços de assistência (guincho, chaveiro, pneu) não têm franquia, e reparos de vidros ou faróis costumam ter franquia reduzida conforme a cobertura contratada.",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-deep/95 py-3 shadow-lg backdrop-blur"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Tahiti Corretora de Seguros"
              className="h-10 w-auto shrink-0 sm:h-12"
              width={48}
              height={48}
            />
            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="font-display text-lg text-on-navy">Tahiti</span>
              <span className="text-[10px] font-bold tracking-[0.18em] text-emerald-bright">
                SEGURO AUTO
              </span>
            </span>
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 text-sm font-semibold text-on-navy-muted lg:flex">
              <a href="#como-funciona" className="transition-colors hover:text-on-navy">
                Como Funciona
              </a>
              <a href="#beneficios" className="transition-colors hover:text-on-navy">
                Benefícios
              </a>
              <a href="#faq" className="transition-colors hover:text-on-navy">
                FAQ
              </a>
            </nav>
            <a href={CTA_MAIN} target="_blank" rel="noreferrer" className="btn-cta px-5 py-3 text-sm">
              Cotar Agora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroImg}
          alt="Carro em rodovia molhada ao anoitecer"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/85 to-navy-deep md:bg-gradient-to-r md:from-navy-deep md:via-navy-deep/90 md:to-navy-deep/20" />

        <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 md:pt-44 md:pb-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald/40 bg-emerald/10 px-4 py-2 text-xs font-bold tracking-[0.12em] text-emerald-bright uppercase">
              <ShieldCheck className="h-4 w-4" />
              Proteção completa 24h para o seu veículo
            </span>

            <h1 className="mt-6 text-4xl leading-[1.05] text-on-navy sm:text-5xl md:text-6xl">
              Carro batido, roubado ou parado na estrada.{" "}
              <span className="text-emerald-bright">Quem paga o prejuízo amanhã?</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-on-navy-muted sm:text-lg">
              Proteja seu patrimônio contra imprevistos em minutos: sem burocracia, sem
              franquia abusiva e com assistência 24h em todo o Brasil.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={CTA_MAIN}
                target="_blank"
                rel="noreferrer"
                className="btn-cta w-full text-base sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Fazer Cotação Gratuita em 1 Minuto
              </a>
              <a href="#como-funciona" className="btn-outline-light w-full text-base sm:w-auto">
                Ver como funciona
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex shrink-0 gap-0.5 text-emerald-bright">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="min-w-0 text-sm text-on-navy-muted">
                  <strong className="text-on-navy">4.9/5</strong> de satisfação
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 shrink-0 text-emerald-bright" />
                <span className="min-w-0 text-sm text-on-navy-muted">
                  <strong className="text-on-navy">+8.000</strong> motoristas protegidos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-emerald-bright" />
                <span className="min-w-0 text-sm text-on-navy-muted">
                  <strong className="text-on-navy">15 anos</strong> de corretora
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR x SOLUÇÃO */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Dor x Solução</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              A diferença entre um dia ruim e um prejuízo que dura anos.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card-lift rounded-2xl border border-border bg-card p-7 sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-bold tracking-wide text-destructive uppercase">
                Sem seguro
              </span>
              <h3 className="mt-5 text-2xl">O problema</h3>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Ficar parado na estrada, à noite, sem ninguém para acionar.",
                  "Pagar do próprio bolso oficina, guincho e peças caríssimas.",
                  "Bater em outro carro e responder judicialmente pelos danos.",
                  "Burocracia infinita e call center que empurra você de setor em setor.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-lift rounded-2xl border border-emerald/30 bg-navy-deep p-7 text-on-navy sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald/20 px-3 py-1.5 text-xs font-bold tracking-wide text-emerald-bright uppercase">
                Com a Tahiti
              </span>
              <h3 className="mt-5 text-2xl text-on-navy">A solução</h3>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Assistência imediata 24h: guincho, chaveiro, pneu e pane elétrica.",
                  "Cobertura contra roubo, furto, colisão e fenômenos da natureza.",
                  "Proteção financeira para danos causados a terceiros (RCF-V).",
                  "Atendimento humanizado via WhatsApp, com um corretor de verdade.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-on-navy-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Benefícios</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Tudo o que você espera de um seguro — e o que a maioria não entrega.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="card-lift group rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="h-6 w-6 text-emerald-bright" />
                </div>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-navy-deep py-20 text-on-navy sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow text-emerald-bright">Como funciona</span>
            <h2 className="mt-4 text-3xl leading-tight text-on-navy sm:text-4xl">
              Três passos entre você e a tranquilidade.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(({ n, title, text }) => (
              <div
                key={n}
                className="card-lift rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-emerald/40"
              >
                <span className="font-display text-4xl text-emerald-bright">{n}</span>
                <h3 className="mt-4 text-xl text-on-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-navy-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href={CTA_MAIN} target="_blank" rel="noreferrer" className="btn-cta w-full sm:w-auto">
              <Car className="h-5 w-5" />
              Começar minha cotação
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Prova social</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Quem já precisou acionar conta como foi.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex gap-0.5 text-emerald">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm text-on-navy">
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.city}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Perguntas frequentes</h2>

          <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary"
                  >
                    <span className="min-w-0 text-base font-bold">{f.q}</span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-emerald" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-emerald/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <h2 className="text-3xl leading-tight text-on-navy sm:text-4xl">
            Não espere o imprevisto acontecer. Proteja seu carro hoje mesmo.
          </h2>
          <p className="mt-4 text-base text-on-navy-muted">
            A cotação é gratuita, leva 1 minuto e não gera nenhum compromisso.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={CTA_MAIN}
              target="_blank"
              rel="noreferrer"
              className="btn-cta w-full text-base sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Quero minha cotação gratuita
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep py-12 text-on-navy-muted">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Tahiti Corretora de Seguros"
                className="h-11 w-auto shrink-0"
                width={44}
                height={44}
                loading="lazy"
              />
              <span className="font-display text-lg text-on-navy">Tahiti Corretora</span>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#beneficios" className="transition-colors hover:text-emerald-bright">
                Benefícios
              </a>
              <a href="#como-funciona" className="transition-colors hover:text-emerald-bright">
                Como Funciona
              </a>
              <a href="#faq" className="transition-colors hover:text-emerald-bright">
                FAQ
              </a>
              <a href={CTA_MAIN} target="_blank" rel="noreferrer" className="transition-colors hover:text-emerald-bright">
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Tahiti Corretora de Seguros · Manaus/AM</p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="#" className="transition-colors hover:text-emerald-bright">
                Termos de uso
              </a>
              <a href="#" className="transition-colors hover:text-emerald-bright">
                Política de privacidade
              </a>
            </p>
          </div>
          <p className="mt-6 text-[11px] leading-relaxed text-on-navy-muted/70">
            A Tahiti atua como corretora de seguros habilitada pela SUSEP. As coberturas,
            carências e condições descritas nesta página são informativas e podem variar
            conforme a seguradora, o perfil do condutor e a análise da proposta. Consulte as
            condições gerais da apólice antes da contratação.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={CTA_MAIN}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className={`fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald shadow-[var(--shadow-cta)] transition-all duration-300 hover:scale-110 ${
          scrolled ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <MessageCircle className="h-7 w-7 text-emerald-foreground" />
      </a>
    </div>
  );
}

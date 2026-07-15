/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Workflow, 
  Cpu, 
  Layers, 
  Phone, 
  Mail, 
  Instagram, 
  CheckCircle2,
  Quote,
  Eye,
  Rocket,
  Zap,
  ShieldCheck,
  Code,
  Film,
  PenTool,
  MessageSquare,
  Send,
  Bot,
  User,
  RefreshCw,
  Brain,
  Palette,
  LineChart
} from 'lucide-react';
import React, { useState, useRef, FormEvent, useEffect } from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f59e0b] via-amber-400 to-[#f59e0b] origin-left z-[100]" 
      style={{ scaleX: scrollYProgress }} 
    />
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        paddingTop: isScrolled ? "12px" : "18px",
        paddingBottom: isScrolled ? "12px" : "18px",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.2)",
        borderColor: isScrolled ? "rgba(245, 158, 11, 0.2)" : "rgba(255, 255, 255, 0.05)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)"
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12 glass mt-4 mx-4 md:mx-12 rounded-full border transition-all"
    >
      <div className="flex items-center">
        <div className="text-base sm:text-xl font-black tracking-tighter font-sans whitespace-nowrap">
          ELEVION<span className="text-[#f59e0b]">LABS</span>
        </div>
      </div>
      
      <div className="hidden space-x-8 text-xs font-medium tracking-widest uppercase md:flex text-zinc-500">
        <a href="#services" className="group relative py-2 transition-all duration-300 hover:text-white">
          Soluções
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#about" className="group relative py-2 transition-all duration-300 hover:text-white">
          DNA
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#process" className="group relative py-2 transition-all duration-300 hover:text-white">
          Método
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#marketing" className="group relative py-2 transition-all duration-300 hover:text-white">
          Marketing
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#results" className="group relative py-2 transition-all duration-300 hover:text-white">
          Resultados
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f59e0b] transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      <a 
        href="https://wa.me/5511978724985" 
        target="_blank" 
        rel="noreferrer"
        className="px-3 py-1.5 sm:px-5 sm:py-2 text-[9px] sm:text-[11px] font-bold tracking-widest uppercase transition-all bg-white rounded-full text-black hover:bg-zinc-200 whitespace-nowrap shrink-0"
      >
        Falar com Consultor
      </a>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section 
      className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 bg-transparent"
    >
      {/* Premium Atmospheric Ambient Glow (Static) */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[450px] h-[450px] md:w-[950px] md:h-[950px] rounded-full bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent blur-[130px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-[20%] left-1/4 w-[350px] h-[350px] rounded-full bg-amber-600/5 blur-[120px] pointer-events-none z-0 mix-blend-screen" />

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b] text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-eagle-glow animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Visão Absoluta de Mercado
          </div>
          <h1 className="mb-8 text-5xl font-bold tracking-tighter md:text-7xl lg:text-9xl font-display text-gradient leading-[0.9] text-eagle-glow">
            Onde Comuns veem o <br /> Presente, Nós <br /> Dominamos o Futuro.
          </h1>
          <p className="max-w-xl mb-12 text-sm leading-relaxed md:text-lg text-zinc-300 md:text-zinc-400 font-light tracking-wide border-l border-[#f59e0b]/30 pl-6">
            Na <span className="text-white font-medium">Elevion Labs</span>, aplicamos a precisão do voo estratégico e a inteligência absoluta para elevar seu negócio a patamares onde outros apenas ousam olhar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
            <a 
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase bg-[#f59e0b] text-black rounded-full transition-all text-center justify-center w-full sm:w-auto hover:scale-105 duration-300 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              Iniciar Ascensão
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#marketing"
              className="px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase border border-white/10 text-white rounded-full transition-all backdrop-blur-sm bg-black/20 text-center justify-center w-full sm:w-auto hover:bg-white/5 hover:border-[#f59e0b]/30 duration-300"
            >
              Expansão & Marketing
            </a>
          </div>
        </div>
      </div>

      {/* Futuristic Horizon Line Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent z-10" />
    </section>
  );
};

const Marquee = () => {
  const marqueeItems = [
    { text: "Evolução Contínua", icon: Zap, highlight: true },
    { text: "Domínio Digital", icon: Cpu, highlight: false },
    { text: "Inteligência Aplicada", icon: Sparkles, highlight: true },
    { text: "Crescimento Estratégico", icon: Target, highlight: false },
    { text: "Tecnologia com Precisão", icon: ShieldCheck, highlight: true },
    { text: "Infraestrutura Resiliente", icon: Rocket, highlight: false },
    { text: "Sistemas Autônomos", icon: Bot, highlight: true }
  ];

  return (
    <div className="py-6 md:py-8 overflow-hidden bg-zinc-950/60 backdrop-blur-lg relative">
      {/* Precise technical layout markers */}
      <div className="absolute top-1 left-6 right-6 flex justify-between pointer-events-none select-none">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#f59e0b]/40">SYS_MONITOR_ACTIVE // [01]</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#f59e0b]/40">ELEVION LABS ENGINE</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">LATENCY: 12ms</span>
      </div>
      
      <div className="absolute bottom-1 left-6 right-6 flex justify-between pointer-events-none select-none">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">SCALE: UNLIMITED</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#f59e0b]/40">CONVERSION: OPTIMIZED</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">SISTEMA SOBERANO</span>
      </div>

      {/* Seamless side gradients for smooth fade-in/out effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-r from-black via-black/85 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-l from-black via-black/85 to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-marquee py-2">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center gap-16 px-8">
            {marqueeItems.map((item, itemIdx) => {
              const IconComponent = item.icon;
              return (
                <React.Fragment key={itemIdx}>
                  <span className={`text-xl md:text-3xl font-bold tracking-[0.4em] uppercase flex items-center gap-6 transition-all duration-300 ${
                    item.highlight 
                      ? "text-[#f59e0b] drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" 
                      : "text-white/80 hover:text-white"
                  }`}>
                    {item.text} 
                    <IconComponent className={`w-6 h-6 ${
                      item.highlight ? "text-amber-500 animate-pulse" : "text-white/40"
                    }`} />
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_12px_rgba(245,158,11,0.6)] shrink-0" />
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const EaglePhilosophy = () => {
  const qualities = [
    { 
      label: "Visão Absoluta", 
      value: "Mapeamento estratégico e preditivo de tendências de mercado e comportamento do usuário para capturar fatias de mercado valiosas antes dos concorrentes comuns.", 
      icon: "01" 
    },
    { 
      label: "Precisão de Ataque", 
      value: "Desenvolvimento técnico impecável baseado em arquiteturas modernas que impulsionam velocidade extrema de carregamento e eliminam fricções na conversão.", 
      icon: "02" 
    },
    { 
      label: "Força Adaptativa", 
      value: "Sistemas modulares, escaláveis e resilientes sob APIs robustas, preparados para absorver picos agressivos de tráfego sem perda de performance ou estabilidade.", 
      icon: "03" 
    },
    { 
      label: "Liberdade Radical", 
      value: "Engenharia livre de clichês operacionais. Criamos agentes cognitivos inteligentes e automações integradas que substituem processos manuais lentos por precisão 24/7.", 
      icon: "04" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      {/* Dynamic Background Circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-amber-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#f59e0b]/10 md:bg-[#f59e0b]/5 blur-[90px] md:blur-[140px] -z-10" />
      
      {/* Decorative architectural lines */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-white/5 hidden xl:block" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              DNA de Soberania
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter text-white">
              O Instinto que <br /> Move o Mercado.
            </h2>
            <p className="text-zinc-300 md:text-zinc-500 text-lg md:text-xl leading-relaxed mb-12 font-light">
              Na Elevion Labs, não seguimos tendências—nós as criamos do alto. Nossa essência é forjada na visão estratégica e na capacidade de adaptação constante.
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {qualities.map((q, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.01, 
                    borderColor: "rgba(245, 158, 11, 0.35)",
                    boxShadow: "0 10px 30px -15px rgba(245, 158, 11, 0.15)"
                  }}
                  className="space-y-4 group p-8 rounded-3xl border border-white/5 bg-zinc-950/40 hover:bg-white/[0.01] transition-all duration-300 cursor-default relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/[0.02] to-transparent rounded-bl-full group-hover:from-amber-500/[0.08] transition-colors duration-500" />
                  <div className="text-4xl font-display font-black text-[#f59e0b]/50 group-hover:text-[#f59e0b] transition-colors duration-500">{q.icon}</div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-amber-500 transition-colors">{q.label}</h4>
                  <p className="text-zinc-300 md:text-zinc-500 text-xs leading-relaxed max-w-[260px] sm:max-w-xs group-hover:text-zinc-200 transition-colors duration-300">{q.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative group">
             <div className="aspect-[4/5] glass rounded-[4rem] overflow-hidden relative border-white/5 group-hover:border-[#f59e0b]/30 transition-all duration-700 shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/19fIvOpIb8CfjsuGyEr-EHUnmo8CGc9oh" 
                  alt="Elevion Strategic Asset" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/30 to-transparent flex flex-col justify-end p-12">
                   <div className="w-12 h-1 gap-2 flex mb-8">
                     <div className="w-8 h-full bg-[#f59e0b] rounded" />
                     <div className="w-2 h-full bg-white/20 rounded" />
                   </div>
                   <p className="text-3xl md:text-4xl font-display italic font-light leading-snug text-eagle-glow text-white">
                     "Empresas comuns enxergam o presente. Nós dominamos o futuro."
                   </p>
                </div>
             </div>
             {/* Abstract Lines */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-[#f59e0b]/15 rounded-br-[4rem] pointer-events-none group-hover:border-[#f59e0b]/40 transition-colors duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutDNA = () => {
  const values = [
    { 
      title: "Nosso Propósito", 
      text: "Posicionar empresas e marcas líderes no topo absoluto de seus nichos, munindo-as com infraestrutura digital premium, design cinematográfico e engenharia de alto padrão.", 
      icon: <Rocket className="w-6 h-6 text-[#f59e0b]" />,
      label: "Impulso" 
    },
    { 
      title: "Nossa Missão", 
      text: "Materializar a excelência operacional através de código limpo, automações cognitivas e estratégias de marketing de elite que maximizam o retorno financeiro de nossos parceiros.", 
      icon: <Target className="w-6 h-6 text-[#f59e0b]" />,
      label: "Foco" 
    },
    { 
      title: "Nossa Visão", 
      text: "Consolidar a Elevion Labs como o ecossistema tecnológico definitivo para negócios que rejeitam o comum, estabelecendo novos horizons em IA, design de conversão e escalabilidade global.", 
      icon: <Eye className="w-6 h-6 text-[#f59e0b]" />,
      label: "Alcance" 
    },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Decorative high-tech scanning line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase text-[#f59e0b] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              O DNA ELEVION LABS
            </span>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl font-display mb-8 text-white leading-tight">
              Inspirados pela Visão, <br /> Movidos pela Tecnologia.
            </h2>
            <p className="text-zinc-300 md:text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Na Elevion Labs, pensamos e agimos como uma águia. Nossa cultura é baseada na precisão das decisões, na agilidade da execução e na excelência constante. Não entregamos apenas código; entregamos poder estratégico e escalabilidade de alta performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl border border-white/5 bg-zinc-950/40 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <ShieldCheck className="w-5 h-5 text-[#f59e0b] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Excelência</h4>
                <p className="text-[11px] text-zinc-400">Compromisso inegociável com a qualidade de cada pixel.</p>
              </div>
              <div className="p-6 rounded-3xl border border-white/5 bg-zinc-950/40 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <Zap className="w-5 h-5 text-[#f59e0b] mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Agilidade</h4>
                <p className="text-[11px] text-zinc-400">Decisões rápidas para um mercado que não espera.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  scale: 1.02, 
                  x: 8,
                  borderColor: "rgba(245, 158, 11, 0.35)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)"
                }}
                className="group p-8 rounded-[2rem] bg-zinc-950/50 flex gap-6 items-center transition-all duration-500 border border-white/5 relative overflow-hidden cursor-default shadow-lg"
              >
                {/* Micro shine reflector */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:bg-[#f59e0b]/10 group-hover:border-[#f59e0b]/30 transition-all duration-500">
                  {v.icon}
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#f59e0b]/60 group-hover:text-[#f59e0b] transition-colors">{v.label}</span>
                  <h3 className="text-xl font-bold font-display mb-1 text-white group-hover:text-amber-400 transition-colors">{v.title}</h3>
                  <p className="text-zinc-350 text-xs leading-relaxed group-hover:text-zinc-250 transition-colors">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'marketing' | 'ai'>('websites');

  const tabsData = {
    websites: {
      pill: "Área 01 // Presença Estética",
      title: "Websites de Elite",
      subtitle: "Direção de arte e geometria sob medida que convertem percepção de luxo em desejo.",
      desc: "Portais corporativos e landing pages cinematográficas projetadas sob rígida direção de arte e geometria sob medida, convertendo percepção instantânea de luxo em desejo palpável.",
      features: ["Direção Artística de Luxo", "SEO & Performance Extrema", "Copywriting Hipnótico Integrado"],
      subsections: [
        {
          title: "Direção Artística de Luxo",
          badge: "Estética",
          desc: "Proporções áureas e layouts de altíssima fidelidade inspirados no minimalismo internacional de luxo, destacando a autoridade máxima da sua marca."
        },
        {
          title: "SEO & Performance Extrema",
          badge: "Velocidade",
          desc: "Carregamento instantâneo de frações de segundos com código limpo e otimizado. Pontuação máxima de 100/100 no Google PageSpeed garantida."
        },
        {
          title: "Copywriting Hipnótico Integrado",
          badge: "Conversão",
          desc: "Textos calibrados com engenharia de persuasão e storytelling estratégico de luxo, guiando o lead silenciosamente do primeiro impacto até o fechamento."
        }
      ]
    },
    marketing: {
      pill: "Área 02 // Alta Conversão",
      title: "Marketing & Conteúdo",
      subtitle: "Roteiros cirúrgicos e design de alto impacto para atrair clientes de alta renda.",
      desc: "Estratégia de posicionamento e narrativas focadas na geração de autoridade. Criamos ganchos de extrema retenção, carrosséis sofisticados e roteiros milimetricamente calculados.",
      features: ["Ganchos de Alta Retenção", "Direção de Arte de Luxo", "Linha Editorial Proprietária"],
      subsections: [
        {
          title: "Roteiros Magnéticos",
          badge: "Narrativa",
          desc: "Estruturação de narrativas magnéticas e ganchos de retenção extremos projetados para Reels, Shorts e VSLs, transformando cada segundo de atenção em desejo palpável."
        },
        {
          title: "Criação de Posts de Elite",
          badge: "Estética",
          desc: "Direção de arte de alto padrão com carrosséis estratégicos estruturados sob rígida simetria visual, estabelecendo autoridade máxima no feed."
        },
        {
          title: "Estratégia de Posicionamento",
          badge: "Estratégia",
          desc: "Planejamento tático de posicionamento digital focado em atingir tomadores de decisão qualificados e consolidar sua autoridade de mercado."
        }
      ]
    },
    ai: {
      pill: "Área 03 // Sistemas Cognitivos",
      title: "Inteligência Artificial",
      subtitle: "Automações e agentes autônomos de dados que otimizam processos 24/7.",
      desc: "Engenharia de dados avançada e agentes autônomos 24/7 que eliminam custos, refinam pipelines de aquisição de leads e otimizam processos críticos autonomamente.",
      features: ["Sistemas Cognitivos Próprios", "Automações de Vendas sem Ruído", "Predição e Análise de Altitude"],
      subsections: [
        {
          title: "Sistemas Cognitivos Próprios",
          badge: "IA Avançada",
          desc: "Modelos de linguagem sintonizados especificamente com os dados corporativos e o tom de voz elegante da sua própria marca."
        },
        {
          title: "Automações de Vendas sem Ruído",
          badge: "Agente 24/7",
          desc: "Captura automática de leads em múltiplos canais digitais e qualificação instantânea com agendamento direto na sua agenda."
        },
        {
          title: "Predição e Análise de Altitude",
          badge: "Análise",
          desc: "Processamento preditivo inteligente para prever comportamento de mercado e de compras de leads de alta renda cientificamente."
        }
      ]
    }
  };

  const currentData = tabsData[activeTab];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#f59e0b]/15 md:bg-[#f59e0b]/8 blur-[100px] md:blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#f59e0b]/15 md:bg-[#f59e0b]/8 blur-[100px] md:blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="pill mb-6 uppercase tracking-[0.4em] text-[10px] font-bold text-[#f59e0b]">Nossas Verticais de Impacto</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-tight mb-4">
            Nossas Áreas
          </h2>
          <p className="text-zinc-350 md:text-zinc-500 max-w-2xl mx-auto text-sm md:text-base font-light">
            Desenvolvemos ecossistemas estratégicos sob medida para posicionar sua empresa no topo absoluto do seu segmento.
          </p>
        </div>

        {/* Tab Selector Section */}
        <div className="flex flex-col items-center mb-16 relative z-30">
          {/* Inner pill bar container */}
          <div className="w-full max-w-3xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-full p-2 flex flex-col sm:flex-row justify-between items-center gap-2 shadow-[0_0_40px_rgba(245,158,11,0.05)] relative overflow-hidden">
            <button 
              onClick={() => setActiveTab('websites')}
              className={`w-full sm:w-auto px-6 py-3 rounded-full flex items-center justify-center gap-2.5 font-bold text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer relative ${
                activeTab === 'websites' ? 'text-zinc-950 font-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeTab === 'websites' && (
                <motion.div 
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#f59e0b] rounded-full shadow-[0_0_25px_rgba(245,158,11,0.3)] z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2.5">
                <Palette className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'websites' ? 'scale-110 text-zinc-950' : 'text-[#f59e0b]/40'}`} />
                Websites de Elite
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('marketing')}
              className={`w-full sm:w-auto px-6 py-3 rounded-full flex items-center justify-center gap-2.5 font-bold text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer relative ${
                activeTab === 'marketing' ? 'text-zinc-950 font-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeTab === 'marketing' && (
                <motion.div 
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#f59e0b] rounded-full shadow-[0_0_25px_rgba(245,158,11,0.3)] z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2.5">
                <MessageSquare className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'marketing' ? 'scale-110 text-zinc-950' : 'text-[#f59e0b]/40'}`} />
                Marketing & Conteúdo
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`w-full sm:w-auto px-6 py-3 rounded-full flex items-center justify-center gap-2.5 font-bold text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer relative ${
                activeTab === 'ai' ? 'text-zinc-950 font-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeTab === 'ai' && (
                <motion.div 
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#f59e0b] rounded-full shadow-[0_0_25px_rgba(245,158,11,0.3)] z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2.5">
                <Cpu className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'ai' ? 'scale-110 text-zinc-950' : 'text-[#f59e0b]/40'}`} />
                Inteligência Artificial
              </span>
            </button>
          </div>

          {/* Dynamic subtitle */}
          <div className="mt-8 text-center">
            <motion.p 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-zinc-200 md:text-zinc-400 text-sm font-medium tracking-wide"
            >
              {currentData.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Dynamic content rendering with layout transitions */}
        <div className="relative z-10">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Details left side */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#f59e0b]">{currentData.pill}</span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                    {currentData.title} <span className="text-[#f59e0b]">Premium</span>
                  </h3>
                  <p className="text-zinc-300 md:text-zinc-500 text-sm font-light leading-relaxed">
                    {currentData.desc}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-wrap gap-4">
                  {currentData.features.map((feat, fIdx) => (
                    <span key={fIdx} className="text-[10px] text-zinc-300 md:text-zinc-400 font-mono tracking-wider uppercase">• {feat}</span>
                  ))}
                </div>
              </div>

              {/* Subsections Cards on the right - taking full remaining space */}
              <div className="lg:col-span-7 space-y-6">
                {currentData.subsections.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-8 rounded-[2rem] border border-white/5 bg-zinc-950/40 hover:border-[#f59e0b]/20 hover:bg-white/[0.01] transition-all duration-500 group flex gap-6 items-start"
                  >
                    <span className="w-10 h-10 rounded-full font-mono text-xs flex items-center justify-center shrink-0 border border-white/10 bg-white/5 text-zinc-400 group-hover:border-[#f59e0b]/30 group-hover:bg-[#f59e0b]/10 group-hover:text-[#f59e0b] transition-all duration-500">
                      0{idx + 1}
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-display font-bold text-base text-white group-hover:text-[#f59e0b] transition-colors">{item.title}</h4>
                        <span className="text-[9px] uppercase tracking-wider font-semibold text-[#f59e0b]/80 bg-[#f59e0b]/10 px-2.5 py-0.5 rounded-full">{item.badge}</span>
                      </div>
                      <p className="text-zinc-300 md:text-zinc-400 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="dna" className="py-32 px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Target coordinates decorative design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.02] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.01] rounded-full pointer-events-none hidden md:block" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            <span className="w-1 h-1 rounded-full bg-amber-500 animate-ping" />
            DNA ESTRATÉGICO
          </span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-6xl font-display mb-4 text-white leading-tight">
            Domínio Digital Absoluto
          </h2>
          <p className="text-zinc-400 max-w-xl text-xs uppercase tracking-[0.3em] font-light">
            Onde a inteligência superior encontra a execução implacável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
          {/* Vision Card */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(245, 158, 11, 0.45)" }}
            transition={{ 
              default: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-zinc-950/80 to-black rounded-[2.5rem] p-12 flex flex-col justify-end relative overflow-hidden group border border-white/5 transition-all shadow-xl cursor-default"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-500" />
            
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-15 group-hover:scale-105 group-hover:rotate-6 transition-all duration-700 pointer-events-none">
              <Eye className="w-64 h-64 text-white" />
            </div>
            
            <div className="w-16 h-16 mb-8 bg-[#f59e0b] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.25)] group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-display text-white group-hover:text-amber-400 transition-colors duration-300">Visão de Topo</h3>
            <p className="text-zinc-300 md:text-zinc-400 text-sm leading-relaxed max-w-sm font-light">
              Não nos limitamos ao que o mercado dita atualmente. Construímos ecossistemas proprietários que antecipam o futuro do consumo digital e garantem que sua marca voe bem acima da concorrência comum.
            </p>
          </motion.div>

          {/* AI Synergy */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              default: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
              y: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(245, 158, 11, 0.35)" }}
            className="md:col-span-2 bg-gradient-to-br from-[#0c0c0c] to-black rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden border border-white/5 transition-all group cursor-default shadow-lg"
          >
            {/* Decorative Grid Lines within the block */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-amber-500">
                Sistemas Inteligentes
              </div>
              <Cpu className="w-6 h-6 text-[#f59e0b] animate-pulse group-hover:rotate-12 transition-transform" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 font-display text-white group-hover:text-amber-400 transition-colors">A Mente Digital</h3>
              <p className="text-zinc-300 md:text-zinc-400 text-xs leading-relaxed max-w-md font-light">
                Utilizamos inteligência artificial avançada não como um adereço superficial de marketing, mas como a verdadeira espinha dorsal de processos que analisam dados, tomam decisões táticas e escalam seu ROI de forma autônoma.
              </p>
            </div>
          </motion.div>

          {/* ROI Focus */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              default: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
              y: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            whileHover={{ y: -6, scale: 1.01, backgroundColor: "#f59e0b", borderColor: "#f59e0b" }}
            className="md:col-span-1 bg-zinc-950/40 rounded-[2.5rem] p-8 flex flex-col justify-between border border-white/5 transition-all group cursor-pointer shadow-lg"
          >
            <div className="w-12 h-12 bg-zinc-900/50 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-black/10 group-hover:border-black/20 transition-all">
              <Target className="w-6 h-6 text-[#f59e0b] group-hover:text-black transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 font-display text-white group-hover:text-black transition-colors">Direção de Alvo</h3>
              <p className="text-zinc-400 text-[9px] uppercase font-bold tracking-widest group-hover:text-black/75 transition-colors mb-3">Precisão de Voo</p>
              <p className="text-zinc-300 group-hover:text-black/80 text-[11px] leading-relaxed font-light transition-colors duration-300">
                Foco cirúrgico em canais de aquisição de alta renda. Eliminamos desperdícios direcionando sua mensagem diretamente para tomadores de decisão com máxima precisão demográfica e comportamental.
              </p>
            </div>
          </motion.div>

          {/* Evolution Card */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              default: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
              y: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(245, 158, 11, 0.35)" }}
            className="md:col-span-1 bg-[#090909] rounded-[2.5rem] p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden transition-all group cursor-default shadow-lg"
          >
            <Zap className="w-12 h-12 text-white/5 absolute -top-2 -right-2 rotate-12 group-hover:text-[#f59e0b]/20 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-[#f59e0b]/10 transition-all">
              <Workflow className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1 font-display uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">Voo Contínuo</h3>
              <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest mb-3">Evolução Incansável</p>
              <p className="text-zinc-400 group-hover:text-zinc-200 text-[11px] leading-relaxed font-light transition-colors duration-300">
                Otimização contínua pós-lançamento. Analisamos dados em tempo real e calibramos sua plataforma para assegurar estabilidade, velocidade máxima e liderança de mercado perpétua.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ProcessSteps = () => {
  const steps = [
    { 
      phase: "01",
      code: "PHASE_SURVEY",
      title: "Mapeamento Atmosférico", 
      desc: "Analisamos o cenário atual e identificamos rotas de crescimento estratégico antes invisíveis para posicionamento supremo.",
      icon: Eye
    },
    { 
      phase: "02",
      code: "PHASE_ARCH",
      title: "Arquitetura de Voo", 
      desc: "Desenhamos ecossistemas digitais robustos que garantem estabilidade de processamento, sofisticação estética e poder de manobra.",
      icon: Workflow
    },
    { 
      phase: "03",
      code: "PHASE_LAUNCH",
      title: "Ignição Tecnológica", 
      desc: "Desenvolvimento técnico de alta precisão com engenharia de conversão e integração profunda de inteligência artificial aplicada.",
      icon: Rocket
    },
    { 
      phase: "04",
      code: "PHASE_CRUISE",
      title: "Domínio de Cruzeiro", 
      desc: "Monitoramento analítico e calibragem constante em altitude para garantir que sua liderança de mercado seja inabalável e perpétua.",
      icon: ShieldCheck
    },
  ];

  return (
    <section id="process" className="py-36 px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-amber-600/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-28 gap-16">
          <div className="flex-1 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-[#f59e0b] text-[9px] font-black tracking-[0.4em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Metodologia Elevion
            </span>
            <h2 className="text-4xl font-bold tracking-tighter md:text-7xl lg:text-8xl font-display text-white leading-none">
              A Rota de <br />
              <span className="text-[#f59e0b] drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">Ascensão</span>
            </h2>
          </div>
          
          <div className="flex-1 w-full lg:pl-12 flex flex-col md:flex-row items-start md:items-center gap-10 group">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-gradient-to-r from-[#f59e0b] to-transparent" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">SYSTEM_DOCTRINE_V2</span>
              </div>
              <div className="relative">
                <p className="text-zinc-300 text-2xl md:text-3xl font-display font-light leading-tight italic">
                  "A precisão não é uma opção, é a nossa <br />
                  <span className="text-white font-semibold not-italic relative inline-block">
                    natureza fundamental
                    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-[#f59e0b]/50" />
                  </span>."
                </p>
              </div>
            </div>
            
            <div className="relative shrink-0 select-none">
              <div className="w-40 h-40 rounded-[2rem] overflow-hidden border border-white/[0.08] bg-zinc-950/40 shadow-2xl transition-all duration-700 group-hover:border-[#f59e0b]/30 group-hover:shadow-[0_0_60px_rgba(245,158,11,0.15)] relative">
                {/* Visual HUD corner ticks inside the lens frame */}
                <span className="absolute top-3 left-3 font-mono text-[7px] text-[#f59e0b]/40">C_1_SYS</span>
                <span className="absolute bottom-3 right-3 font-mono text-[7px] text-white/30">EL_WINGS</span>
                <img 
                  src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=800" 
                  alt="Visão de Águia" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-[#f59e0b]/30 opacity-40 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-[#f59e0b]/30 opacity-40 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
          
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative z-10 group bg-zinc-950/30 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/[0.03] hover:border-amber-500/20 hover:bg-white/[0.01] transition-all duration-500 flex flex-col justify-between min-h-[380px] shadow-lg"
              >
                {/* Hover Ambient Inner Backplate Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none" />
                
                {/* Tech Code Indicator */}
                <div className="flex justify-between items-center relative z-20">
                  <span className="font-mono text-[9px] text-zinc-500 tracking-wider group-hover:text-[#f59e0b]/60 transition-colors">
                    [{step.code}]
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/0 group-hover:bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-300" />
                </div>

                {/* Main Content Area */}
                <div className="my-10 relative z-20 space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900/80 border border-white/[0.05] flex items-center justify-center text-zinc-400 group-hover:scale-110 group-hover:border-[#f59e0b]/30 group-hover:bg-[#f59e0b]/10 group-hover:text-[#f59e0b] transition-all duration-500 shadow-inner">
                    <IconComponent className="w-6 h-6 transition-transform group-hover:rotate-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs leading-relaxed font-light group-hover:text-zinc-200 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

                {/* High-End Absolute Phase Watermark & Stage Number Badge */}
                <div className="flex justify-between items-baseline pt-4 border-t border-white/[0.02] group-hover:border-amber-500/10 transition-colors duration-500 relative z-20">
                  <span className="font-mono text-[9px] tracking-widest text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors">STAGE_</span>
                  <span className="font-display text-3xl font-black text-[#f59e0b]/20 group-hover:text-[#f59e0b]/90 transition-all duration-500 drop-shadow-[0_0_10px_rgba(245,158,11,0)] group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                    {step.phase}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



const ContactSection = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const companyPhone = '5511978724985';

  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    const fullMessage = `Olá! Meu telefone é: ${phone}%0A%0A${message}`;
    const whatsappUrl = `https://wa.me/${companyPhone}?text=${fullMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#f59e0b]/15 md:bg-[#f59e0b]/8 blur-[100px] md:blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <span className="pill uppercase tracking-[0.4em] text-[10px] font-bold">Inicie sua Jornada</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight">
              Pronto para <br /> <span className="text-eagle-glow">Dominar</span> os Ares?
            </h2>
            <p className="text-zinc-300 md:text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Entre em contato agora e descubra como a Elevion Labs pode elevar seu negócio através da inteligência estratégica.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="p-8 rounded-[2rem] border border-white/[0.05] bg-zinc-950/40 backdrop-blur-md space-y-8">
              <a 
                href="https://wa.me/5511978724985" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-6 group/item p-4 rounded-2xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover/item:scale-110 group-hover/item:bg-green-500 group-hover/item:text-black transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Telefone / WhatsApp</div>
                  <div className="text-lg font-bold text-white group-hover/item:text-[#f59e0b] transition-colors mt-1">+55 11 97872-4985</div>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/elevionlab" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-6 group/item p-4 rounded-2xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover/item:scale-110 group-hover/item:bg-pink-500 group-hover/item:text-black transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Instagram</div>
                  <div className="text-lg font-bold text-white group-hover/item:text-[#f59e0b] transition-colors mt-1">@elevionlab</div>
                </div>
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=elevion.lab@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group/item p-4 rounded-2xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] group-hover/item:scale-110 group-hover/item:bg-[#f59e0b] group-hover/item:text-black transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">E-mail corporativo</div>
                  <div className="text-lg font-bold text-white group-hover/item:text-[#f59e0b] transition-colors mt-1">elevion.lab@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-12 rounded-[3.5rem] border-white/10"
          >
            <form onSubmit={handleWhatsAppSend} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-4">Seu Telefone</label>
                <input 
                  type="text" 
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#f59e0b]/50 transition-colors"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-4">Mensagem Estratégica</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos elevar seu negócio?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#f59e0b]/50 transition-colors resize-none"
                  required
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(245, 158, 11, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-6 rounded-3xl bg-white text-black font-bold uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3"
              >
                Enviar via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest font-medium">
                Resposta média em menos de 15 minutos.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Testimonials = () => {
  const testimonials = [
    {
      text: "A Elevion Labs não apenas criou um site, eles construíram a base do nosso crescimento digital. A integração de IA no atendimento mudou nosso jogo totalmente.",
      author: "Leonardo José",
      role: "CEO E FUNDADOR"
    },
    {
      text: "O domínio técnico da equipe em IA e Automação superou nossas expectativas. Hoje, operamos com 40% mais eficiência graças à arquitetura proposta.",
      author: "Leonardo José",
      role: "CEO E FUNDADOR"
    },
    {
      text: "Nossa presença digital agora reflete a autoridade que temos no mercado físico. A precisão estratégica da Elevion é, de fato, sua natureza fundamental.",
      author: "Leonardo José",
      role: "CEO E FUNDADOR"
    }
  ];

  return (
    <section id="results" className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Vozes da Liderança</h2>
          <p className="text-zinc-300 md:text-zinc-500 uppercase text-[10px] tracking-[0.3em]">Testemunhos de quem já alcançou novas altitudes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              whileHover={{ 
                y: -12, 
                scale: 1.01,
                borderColor: "rgba(245, 158, 11, 0.3)",
                boxShadow: "0 15px 30px -10px rgba(245, 158, 11, 0.08)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-10 rounded-[2.5rem] relative group border border-white/5 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#f59e0b]/5 absolute top-10 left-10 group-hover:text-[#f59e0b]/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-zinc-100 md:text-zinc-300 italic mb-10 leading-relaxed text-sm md:text-base">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-widest text-[#f59e0b]">{t.author}</div>
                    <div className="text-[10px] text-zinc-300 md:text-zinc-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketingDoctrine = () => {
  const services = [
    { 
      title: "Roteiros Magnéticos", 
      desc: "Estruturação narrativa cirúrgica e ganchos de retenção extremos projetados para Reels, Shorts e VSLs, transformando cada segundo de atenção em autoridade inabalável.", 
      icon: <Film className="w-8 h-8 text-[#f59e0b]" />,
      features: ["Ganchos de Altíssima Retenção", "Direção de Ritmo Narrativo", "Copywriting Hipnótico Integrado"]
    },
    { 
      title: "Criação de Posts", 
      desc: "Direção de arte sob medida e carrosséis estratégicos estruturados sob rígida simetria visual, posicionando sua marca no topo da cadeia de percepção do feed.", 
      icon: <PenTool className="w-8 h-8 text-[#f59e0b]" />,
      features: ["Direção de Arte de Luxo", "Carrosséis de Alto Impacto", "Tipografia e Grid Proprietários"]
    },
    { 
      title: "Gestão & Estratégia", 
      desc: "Planejamento tático de posicionamento digital e distribuição que garante que sua mensagem de alto padrão alcance os tomadores de decisão corretos.", 
      icon: <LineChart className="w-8 h-8 text-[#f59e0b]" />,
      features: ["Linha Editorial Proprietária", "Posicionamento Premium", "Distribuição Multicanal Inteligente"]
    },
  ];

  return (
    <section id="marketing" className="py-32 px-6 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#f59e0b]/15 md:bg-[#f59e0b]/8 blur-[100px] md:blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#f59e0b]/15 md:bg-[#f59e0b]/8 blur-[100px] md:blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12 border-b border-white/5 pb-16">
          <div className="flex-1">
            <span className="pill mb-6 uppercase tracking-[0.4em] text-[10px] font-bold text-[#f59e0b]">Doutrina de Marketing</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-tight">
              A Arte de <br />
              <span className="text-eagle-glow">Sobrevoar</span> a Média
            </h2>
          </div>
          <div className="flex-1 md:pl-12">
            <p className="text-zinc-300 md:text-zinc-500 text-lg font-light leading-relaxed max-w-xl">
              Nossa abordagem comunicativa recusa caminhos triviais ou barulho vazio. Criamos artefatos de impacto intelectual — onde design cinematográfico, ritmo visual e retórica estratégica agem integrados, consolidando hegemonias digitais absolutas.
            </p>
          </div>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                borderColor: "rgba(245, 158, 11, 0.35)",
                boxShadow: "0 20px 40px -15px rgba(245, 158, 11, 0.1)"
              }}
              className="p-10 rounded-[2.5rem] glass border border-white/5 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/10 flex items-center justify-center mb-8 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-black transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-[#f59e0b] transition-colors">{service.title}</h3>
              <p className="text-zinc-200 md:text-zinc-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="space-y-3 border-t border-white/5 pt-6">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-zinc-300 md:text-zinc-500">
                    <CheckCircle2 className="w-3 h-3 text-[#f59e0b]" />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, duration = 1500, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !startedRef.current) {
        startedRef.current = true;
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const Footer = () => {
  return (
    <footer className="footer-wrap">
      {/* Stats Bar */}
      <div className="bg-transparent border-t border-white/10 px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12">
            <motion.div whileHover={{ y: -4 }} className="flex-1 min-w-[200px] cursor-default group">
              <div className="text-4xl font-bold font-display group-hover:text-[#f59e0b] transition-colors">
                <CountUp end={150} suffix="+" />
              </div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-2 group-hover:text-zinc-500 transition-colors">Soluções Implementadas</div>
            </motion.div>
            
            <motion.div whileHover={{ y: -4 }} className="flex-1 min-w-[200px] cursor-default group">
              <div className="text-4xl font-bold font-display group-hover:text-[#f59e0b] transition-colors">
                <CountUp end={98} suffix="%" />
              </div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-2 group-hover:text-zinc-500 transition-colors">Taxa de Conversão Mantida</div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="flex-1 min-w-[200px] cursor-default group">
              <div className="text-4xl font-bold font-display text-[#f59e0b] group-hover:text-amber-400 transition-colors">GLOBAL</div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-2 group-hover:text-zinc-500 transition-colors">Presença Internacional</div>
            </motion.div>
            
            <div className="hidden lg:block h-16 w-px bg-white/10" />
            <div className="text-right">
              <div className="text-xl font-bold mb-2 hover:text-[#f59e0b] transition-colors cursor-pointer">+55 11 97872-4985</div>
              <div className="text-sm text-zinc-500 hover:text-white transition-colors cursor-pointer">elevion.lab@gmail.com</div>
              <div className="text-[10px] text-[#f59e0b] font-bold uppercase tracking-widest mt-2">São Paulo, BR</div>
            </div>
        </div>
      </div>

      <div className="py-16 px-6 border-t border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3 group">
            <img 
              src="https://lh3.googleusercontent.com/d/1bMMvDDgawKtoQZPnGMpjbt4a4NyfND_6" 
              alt="Elevion Lab Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:rotate-12"
              referrerPolicy="no-referrer"
            />
            <div className="text-xl font-extrabold tracking-tighter font-display uppercase">
              ELEVION<span className="text-[#f59e0b]">LABS</span>
            </div>
          </div>

          <div className="flex gap-10">
            <a href="mailto:elevion.lab@gmail.com" className="text-zinc-500 hover:text-[#f59e0b] transition-all transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://wa.me/5511978724985" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-green-500 transition-all transform hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/elevionlab" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-pink-500 transition-all transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-[11px] text-zinc-600 uppercase tracking-[0.3em] font-medium text-center md:text-right">
            Designed for Excellence. <br /> 
            <span className="text-zinc-800">Copyright © 2026 Elevion Labs.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#f59e0b] selection:text-black bg-black relative">
      {/* Background Image fixed across the entire app */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Atmospheric Global Vision" 
          className="object-cover w-full h-full opacity-55 md:opacity-45 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Ambient Amber Lighting Glow Spheres - dramatic increase in site-wide visibility and lighting */}
        <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#f59e0b]/20 md:bg-[#f59e0b]/10 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen" />
        <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#f59e0b]/15 md:bg-[#f59e0b]/8 rounded-full blur-[90px] md:blur-[160px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[15%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-amber-500/15 md:bg-[#f59e0b]/8 rounded-full blur-[80px] md:blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#f59e0b]/15 md:bg-[#f59e0b]/8 rounded-full blur-[90px] md:blur-[150px] mix-blend-screen" />
        
        {/* Subtle vignette/glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.75)_100%)] opacity-70 z-20" />
      </div>

      <div className="relative z-10 bg-transparent">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Marquee />
        <EaglePhilosophy />
        <AboutDNA />
        <Services />
        <BentoGrid />
        <ProcessSteps />
        <Testimonials />
        <MarketingDoctrine />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

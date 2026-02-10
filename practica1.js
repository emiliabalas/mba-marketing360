<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estrategia Platzi 2026</title>
    <!-- Tailwind CSS (Estilos) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- React y ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <!-- Babel para traducir JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <style>
        body { background-color: #0f172a; color: white; }
        /* Animaciones suaves */
        .fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // --- ICONOS SVG INCRUSTADOS (Para que no necesites instalaciones) ---
        const Icons = {
            ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
            ChevronLeft: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>,
            Globe: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
            TrendingUp: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
            Target: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
            ShieldCheck: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>,
            Users: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            Brain: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
            Video: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>,
            MessageCircle: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>,
            Award: ({size=24, className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
        };

        const StrategyDeck = () => {
            const [currentSlide, setCurrentSlide] = React.useState(0);

            const slides = [
                {
                    id: 'intro',
                    title: "Análisis Estratégico de Mercado",
                    subtitle: "Caso de Estudio: Platzi (LatAm 2026)",
                    content: "Evaluación del entorno digital, segmentación y propuesta de valor ante la era de la IA y la gratuidad del conocimiento.",
                    icon: Icons.Globe,
                    color: "from-green-400 to-blue-500"
                },
                {
                    id: 'market',
                    title: "Investigación de Mercado",
                    subtitle: "El contexto actual (2026)",
                    layout: "grid",
                    items: [
                        { title: "Tendencia", desc: "Migración del video-curso pasivo al aprendizaje asistido por IA. Preferencia por micro-learning.", icon: Icons.TrendingUp },
                        { title: "Motivación", desc: "Movilidad socioeconómica urgente. No buscan títulos, buscan empleo remoto en dólares.", icon: Icons.Target },
                        { title: "Barrera", desc: "Fatiga de suscripciones y competencia contra contenido gratuito de alta calidad (YouTube/Docs).", icon: Icons.ShieldCheck },
                        { title: "Competencia", desc: "YouTube (Midudev, HolaMundo), Udemy (Precio), Coursera (Prestigio), IA (Tutores).", icon: Icons.Users }
                    ]
                },
                {
                    id: 'segment',
                    title: "Segmento Objetivo",
                    subtitle: "El Autodidacta Validado por Comunidad",
                    layout: "profile",
                    content: {
                        profile: "Jóvenes (18-35 años) saturados por la infoxicación.",
                        pain: "Tienen acceso a todo el conocimiento gratis (YouTube/IA) pero sufren de falta de estructura y soledad profesional.",
                        gain: "No pagan por el contenido (video). Pagan por la Curaduría, el Orden y el Networking que los influencers no pueden escalar.",
                        behavior: "Valoran la velocidad de inserción laboral sobre los cartones académicos."
                    }
                },
                {
                    id: 'value',
                    title: "Propuesta de Valor",
                    subtitle: "Del Caos al Orden Profesional",
                    layout: "quote",
                    quote: "Deja de consumir tutoriales aislados. Transformamos el caos del aprendizaje gratuito en una ruta profesional estructurada, validada por expertos y potenciada por una red de contactos que la IA no puede replicar."
                },
                {
                    id: 'digital',
                    title: "Presencia Digital",
                    subtitle: "Activos y Canales",
                    layout: "list",
                    sections: [
                        {
                            title: "Activos Propios (Walled Garden)",
                            items: ["LMS Propio (Web/App)", "Sistema de Foros (Retención)", "Platzi Live (Eventos)", "Blog (Motor SEO)"],
                            icon: Icons.Globe
                        },
                        {
                            title: "Canales de Distribución",
                            items: ["YouTube (Adquisición Masiva)", "Redes Sociales (Cultura Tech)", "Newsletter (Reacticavación)", "Podcast (Brand Awareness)"],
                            icon: Icons.Video
                        },
                        {
                            title: "Estrategia de Contenido",
                            items: ["Rutas de Aprendizaje (No cursos sueltos)", "Gamificación (PlatziRank)", "Certificados Virales (LinkedIn)"],
                            icon: Icons.Award
                        }
                    ]
                },
                {
                    id: 'strategy',
                    title: "Estrategia Final",
                    subtitle: "Blindaje Competitivo (The Moat)",
                    layout: "focus",
                    points: [
                        "El contenido es un commodity (se consigue gratis).",
                        "La ventaja competitiva de Platzi no son sus cursos, es su COMUNIDAD.",
                        "Efecto de Red: Más estudiantes = Más respuestas en foros = Más valor.",
                        "El 'Moat' es la barrera de salida: Dejar Platzi significa perder tu identidad profesional y tu red de apoyo."
                    ]
                }
            ];

            const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

            React.useEffect(() => {
                const handleKeyDown = (e) => {
                    if (e.key === 'ArrowRight') nextSlide();
                    if (e.key === 'ArrowLeft') prevSlide();
                };
                window.addEventListener('keydown', handleKeyDown);
                return () => window.removeEventListener('keydown', handleKeyDown);
            }, []);

            const SlideContent = ({ slide }) => {
                if (slide.layout === 'grid') {
                    return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 fade-in">
                            {slide.items.map((item, idx) => (
                                <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
                                    <div className="flex items-center mb-4 text-green-400">
                                        <item.icon size={24} />
                                        <h3 className="ml-3 font-bold text-lg text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    );
                }

                if (slide.layout === 'profile') {
                    return (
                        <div className="bg-slate-800 rounded-2xl p-8 mt-6 border border-slate-700 shadow-2xl relative overflow-hidden fade-in">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">AV</div>
                                    <div className="ml-4">
                                        <h3 className="text-2xl font-bold text-white">El Autodidacta Validado</h3>
                                        <p className="text-green-400">Target Persona 2026</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-slate-300">
                                    <li className="flex items-start"><Icons.Users className="text-blue-400 mt-1 mr-3 shrink-0" size={20} /><span><strong>Perfil:</strong> {slide.content.profile}</span></li>
                                    <li className="flex items-start"><Icons.Brain className="text-red-400 mt-1 mr-3 shrink-0" size={20} /><span><strong>Dolor (Pain):</strong> {slide.content.pain}</span></li>
                                    <li className="flex items-start"><Icons.Target className="text-green-400 mt-1 mr-3 shrink-0" size={20} /><span><strong>Ganancia (Gain):</strong> {slide.content.gain}</span></li>
                                </ul>
                            </div>
                        </div>
                    );
                }

                if (slide.layout === 'quote') {
                    return (
                        <div className="flex flex-col justify-center items-center h-full mt-8 fade-in">
                            <div className="relative p-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center max-w-3xl shadow-lg">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-green-500 bg-slate-900 p-2 rounded-full border border-slate-700">
                                    <Icons.MessageCircle size={48} />
                                </div>
                                <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed">"{slide.quote}"</p>
                                <div className="mt-6 w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
                                <p className="mt-4 text-slate-400 text-sm uppercase tracking-widest font-bold">Propuesta de Valor</p>
                            </div>
                        </div>
                    );
                }

                if (slide.layout === 'list') {
                    return (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 fade-in">
                            {slide.sections.map((section, idx) => (
                                <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-green-500">
                                    <div className="flex items-center mb-4 text-white">
                                        <section.icon size={20} className="mr-2 text-green-400" />
                                        <h3 className="font-bold">{section.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-center text-slate-400 text-sm">
                                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    );
                }

                if (slide.layout === 'focus') {
                    return (
                        <div className="flex flex-col items-center justify-center mt-8 fade-in">
                            <div className="bg-slate-800 p-8 rounded-2xl border-2 border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.1)] max-w-3xl w-full">
                                <div className="flex justify-center mb-6 text-green-500"><Icons.ShieldCheck size={64} /></div>
                                <h3 className="text-center text-2xl font-bold text-white mb-8">El "Blindaje Competitivo"</h3>
                                <div className="space-y-4">
                                    {slide.points.map((point, idx) => (
                                        <div key={idx} className="flex items-center bg-slate-900/50 p-4 rounded-lg">
                                            <div className="flex-shrink-0 w-8 h-8 bg-green-900/50 rounded-full flex items-center justify-center text-green-400 font-bold mr-4">{idx + 1}</div>
                                            <p className="text-slate-200 text-lg">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }

                // Intro Slide
                return (
                    <div className="flex flex-col items-center justify-center text-center h-full p-6 fade-in">
                        <div className={`p-6 rounded-full bg-gradient-to-br ${slide.color} mb-8 shadow-lg shadow-green-500/20`}>
                            <slide.icon size={64} className="text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">{slide.title}</h1>
                        <h2 className="text-xl md:text-2xl text-green-400 font-medium mb-6">{slide.subtitle}</h2>
                        <p className="text-slate-400 max-w-xl text-lg">{slide.content}</p>
                        <div className="mt-12 text-slate-500 text-sm animate-bounce">Usa las flechas para navegar</div>
                    </div>
                );
            };

            return (
                <div className="w-full h-screen bg-slate-900 text-white font-sans overflow-hidden flex flex-col items-center justify-center selection:bg-green-500 selection:text-white relative">
                     {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-600/10 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="z-10 w-full max-w-5xl h-[85vh] flex flex-col p-4 md:p-8">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8 px-2">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Estrategia 2026</span>
                            </div>
                            <div className="text-slate-500 text-sm font-mono">{currentSlide + 1} / {slides.length}</div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 relative">
                            <div className="h-full flex flex-col">
                                {slides[currentSlide].id !== 'intro' && (
                                    <div className="text-center md:text-left mb-2 fade-in">
                                        <h2 className="text-3xl font-bold text-white">{slides[currentSlide].title}</h2>
                                        <p className="text-green-400 font-medium">{slides[currentSlide].subtitle}</p>
                                    </div>
                                )}
                                <div className="flex-1"><SlideContent slide={slides[currentSlide]} /></div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-between items-center mt-8">
                            <button onClick={prevSlide} className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-green-500 hover:text-green-400 transition-all">
                                <Icons.ChevronLeft size={24} />
                            </button>
                            <div className="flex space-x-2">
                                {slides.map((_, idx) => (
                                    <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-green-500 w-8' : 'bg-slate-700 hover:bg-slate-600'}`} />
                                ))}
                            </div>
                            <button onClick={nextSlide} className="p-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-green-500 hover:text-green-400 transition-all">
                                <Icons.ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<StrategyDeck />);
    </script>
</body>
</html>

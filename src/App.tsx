import { useEffect, useState } from 'react';
import { Mail, FileText, Code, Linkedin, BookOpen, Sun, Moon } from 'lucide-react';

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, () => setDark(d => !d)] as const;
}

const Portfolio = () => {
  const [dark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans py-12 sm:py-20 px-4 sm:px-6 selection:bg-slate-200 dark:selection:bg-slate-700">

      <main className="max-w-2xl mx-auto">

        <header className="mb-12 sm:mb-16">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-4 tracking-tight">
              Sebastián Ariel Waisbrot
            </h1>
            <button
              onClick={toggleDark}
              className="p-2 text-slate-400 hover:text-black dark:hover:text-white transition-colors print:hidden"
              aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <a href="mailto:waisbrotsebastian@gmail.com" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
              <Mail size={14} /> Email
            </a>
            <a href="https://www.linkedin.com/in/seppo0010/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://github.com/seppo0010" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
              <Code size={14} /> GitHub
            </a>
            <a href="/Sebastian%20Waisbrot%20CV.pdf" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
              <FileText size={14} /> Curriculum Vitae
            </a>
          </div>
        </header>

        <section className="mb-12 sm:mb-16">
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-serif">
            Estudiante de <span className="font-semibold text-black dark:text-white">Abogacía</span> y <span className="font-semibold text-black dark:text-white">Licenciatura en Economía</span> en la Universidad de Buenos Aires.<br />
            Anteriormente <span className="font-semibold text-black dark:text-white">programador</span> en Mural, Anses, Despegar, Brubank, Avature, Twitter.<br />
            Combinación de herramientas jurídicas, económicas e informáticas.
          </p>
        </section>

        <hr className="border-slate-200 dark:border-slate-800 mb-12" />

        <section className="mb-12 sm:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
            <BookOpen size={14} /> Docencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-sm shadow-sm">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Justicia Digital</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Ayudante alumno • Departamento de Ciencias Sociales • UBA • 2020 en adelante</p>
              <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded font-medium">
                Ayudante
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-sm shadow-sm">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Análisis Económico y Financiero</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Ayudante alumno • Cátedra Di Pelino • UBA • 2024 en adelante</p>
              <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded font-medium">
                Ayudante
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-sm shadow-sm">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">Elementos de Derecho Administrativo</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Ayudante alumno • Cátedra Balbín • UBA • 2025 en adelante</p>
              <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded font-medium">
                Ayudante
              </span>
            </div>
          </div>
        </section>


        <section className="mb-12 sm:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8 flex items-center gap-2">
            <FileText size={14} /> Presentaciones Seleccionadas
          </h2>

          <div className="space-y-10 sm:space-y-12">

            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a
                  href="https://www.youtube.com/watch?v=iYJpMsHKvwM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:underline decoration-1 underline-offset-4"
                >
                  Jornadas de IA y Derechos Humanos del CIPDH
                </a>
              </div>

              <div className="flex mt-3 text-slate-600 dark:text-slate-400">
                Introducción a algoritmos, algoritmos de aprendizaje automático, y la posibilidad de daños y sesgos en el marco jurídico argentino.
              </div>
              <div className="flex mt-3 gap-3 text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-tight">
                <span>Webinario Inteligencia Artificial y Derechos Humanos</span>
                <span>•</span>
                <span>2024</span>
              </div>
            </article>

            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a
                  href="https://www.youtube.com/watch?v=PuuPAZ6fiUk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:underline decoration-1 underline-offset-4"
                >
                  Desmitificando machine learning
                </a>
              </div>
              <div className="flex mt-3 text-slate-600 dark:text-slate-400">
                Introducción a aprendizaje automático y <em>fairness</em>.
              </div>
              <div className="flex mt-3 gap-3 text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-tight">
                <span>BuzzConf BA</span>
                <span>•</span>
                <span>2024</span>
              </div>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8 flex items-center gap-2">
            <FileText size={14} /> Proyectos Destacados
          </h2>


          <div className="space-y-10 sm:space-y-12">
            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a
                  href="https://seppo0010.github.io/gastos-congresistas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:underline decoration-1 underline-offset-4"
                >
                  Deudas de legisladores
                </a>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                Aplicación web interactiva que muestra la deuda que tienen mes a mes nuestros representantes en el congreso.
              </p>
              <div className="flex gap-3 text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-tight">
                <span>React</span>
                <span>•</span>
                <span>Full Stack</span>
                <span>•</span>
                <span>UI/UX</span>
                <span>•</span>
                <span>2025</span>
              </div>
            </article>

            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a
                  href="https://convergencia.uaemex.mx/article/view/20656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:underline decoration-1 underline-offset-4"
                >
                  Breaking down the Gender Pay Gap through a machine learning model
                </a>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                Análisis econométrico sobre la brecha salarial en el sector IT argentino utilizando modelos de aprendizaje automático sobre una base de +5,700 casos.
              </p>
              <div className="flex gap-3 text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-tight">
                <span>Convergencia Revista de Cs. Sociales</span>
                <span>•</span>
                <span>2023</span>
              </div>
            </article>

            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a
                  href="https://acrossoverepisode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:underline decoration-1 underline-offset-4"
                >
                  A Crossover Episode
                </a>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                Aplicación web interactiva que permite a los usuarios buscar citas textuales y escenas específicas de series de TV.
              </p>
              <div className="flex gap-3 text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-tight">
                <span>React</span>
                <span>•</span>
                <span>Full Stack</span>
                <span>•</span>
                <span>UI/UX</span>
                <span>•</span>
                <span>2022</span>
              </div>
            </article>

            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a
                  href="https://seppo0010.github.io/ley-omnibus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-slate-100 group-hover:underline decoration-1 underline-offset-4"
                >
                  Ley Bases comparada
                </a>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                Web para mostrar fácilmente los cambios normativos introducidos por el proyecto de Ley de Bases y Puntos de Partida para la Libertad de los Argentinos.
              </p>
              <div className="flex gap-3 text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-tight">
                <span>Full Stack</span>
                <span>•</span>
                <span>2024</span>
              </div>
            </article>

          </div>
        </section>

        <footer className="mt-20 sm:mt-24 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sebastián Ariel Waisbrot</p>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;

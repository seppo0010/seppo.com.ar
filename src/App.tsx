import { Mail, FileText, Code, Linkedin, BookOpen } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans py-20 px-6 selection:bg-slate-200">
      
      <main className="max-w-2xl mx-auto">

        <header className="mb-16">
          <h1 className="text-4xl font-serif font-bold text-black mb-4 tracking-tight">
            Sebastián Ariel Waisbrot
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
            <a href="mailto:waisbrotsebastian@gmail.com" className="flex items-center gap-2 hover:text-black transition-colors">
              <Mail size={14} /> Email
            </a>
            <a href="https://www.linkedin.com/in/seppo0010/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://github.com/seppo0010" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
              <Code size={14} /> GitHub
            </a>
          </div>
        </header>

        <section className="mb-16">
          <p className="text-lg leading-relaxed text-slate-700 font-serif">
            Estudiante de <span className="font-semibold text-black">Abogacía</span> y <span className="font-semibold text-black">Licenciatura en Economía</span> en la Universidad de Buenos Aires.<br />
            Anteriormente <span className="font-semibold text-black">programador</span> en Mural, Anses, Despegar, Brubank, Avature, Twitter.<br />
            Combinación de herramientas jurídicas, económicas e informáticas.
          </p>
        </section>

        <hr className="border-slate-200 mb-12" />

        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <BookOpen size={14} /> Docencia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-100 p-5 rounded-sm shadow-sm">
              <h3 className="font-bold text-slate-800 mb-1">Justicia Digital</h3>
              <p className="text-sm text-slate-500 mb-2">Departamento de Ciencias Sociales • UBA</p>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">
                Ayudante
              </span>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-sm shadow-sm">
              <h3 className="font-bold text-slate-800 mb-1">Análisis Económico y Financiero</h3>
              <p className="text-sm text-slate-500 mb-2">Cátedra Di Pelino • UBA</p>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">
                Ayudante
              </span>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-sm shadow-sm">
              <h3 className="font-bold text-slate-800 mb-1">Elementos de Derecho Administrativo</h3>
              <p className="text-sm text-slate-500 mb-2">Cátedra Balbín • UBA</p>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">
                Ayudante
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
            <FileText size={14} /> Proyectos Destacados
          </h2>

          <div className="space-y-12">
            
            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a 
                  href="https://convergencia.uaemex.mx/article/view/20656" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-serif font-bold text-slate-900 group-hover:underline decoration-1 underline-offset-4"
                >
                  Breaking down the Gender Pay Gap through a machine learning model
                </a>
              </div>
              <p className="text-slate-600 mb-3 leading-relaxed">
                Análisis econométrico sobre la brecha salarial en el sector IT argentino utilizando modelos de aprendizaje automático sobre una base de +5,700 casos.
              </p>
              <div className="flex gap-3 text-xs font-mono text-slate-500 uppercase tracking-tight">
                <span>Convergencia Revista de Cs. Sociales</span>
                <span>•</span>
                <span>2023</span>
              </div>
            </article>

            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a 
                  href="http://acrossoverepisode.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-serif font-bold text-slate-900 group-hover:underline decoration-1 underline-offset-4"
                >
                  A Crossover Episode
                </a>
              </div>
              <p className="text-slate-600 mb-3 leading-relaxed">
                Aplicación web interactiva que permite a los usuarios buscar citas textuales y escenas específicas de series de TV.
              </p>
              <div className="flex gap-3 text-xs font-mono text-slate-500 uppercase tracking-tight">
                <span>React</span>
                <span>•</span>
                <span>Full Stack</span>
                <span>•</span>
                <span>UI/UX</span>
                <span>•</span>
                <span>2022</span>
              </div>
            </article>

            <article className="group relative pl-4 border-l-2 border-transparent hover:border-slate-300 transition-colors">
              <div className="flex justify-between items-baseline mb-2">
                <a 
                  href="https://seppo0010.github.io/ley-omnibus/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-serif font-bold text-slate-900 group-hover:underline decoration-1 underline-offset-4"
                >
                  Ley Bases comparada
                </a>
              </div>
              <p className="text-slate-600 mb-3 leading-relaxed">
                Web para mostrar fácilmente los cambios normativos introducidos por el proyecto de Ley de Bases y Puntos de Partida para la Libertad de los Argentinos. 
              </p>
              <div className="flex gap-3 text-xs font-mono text-slate-500 uppercase tracking-tight">
                <span>Full Stack</span>
                <span>•</span>
                <span>2024</span>
              </div>
            </article>

          </div>
        </section>
        
        <footer className="mt-24 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Sebastián Ariel Waisbrot</p>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;

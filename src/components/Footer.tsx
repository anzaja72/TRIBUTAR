import React from 'react';
import { Calculator, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const dianiaUrl = 'https://diania-31452.chipp.ai';

  return (
    <footer className="bg-gradient-to-br from-[#0F1419] to-[#000] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Tributar-IA</span>
            </div>
            <p className="text-neutral-400">Simplificando lo complejo</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href={dianiaUrl} className="text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="https://angelzambrano.com" className="text-neutral-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="https://docs.google.com/document/d/1ILnbW1OqcFHtmU68I84tNjSKDal6I8Tn8mvF2ey3sVY/edit?usp=sharing" className="text-neutral-400 hover:text-white transition-colors">Términos</a></li>
              <li><a href="https://docs.google.com/document/d/1FVrExWnTiUN4f-6qc_czRdVt4GYPq71uO7w0N83q6tM/edit?usp=sharing" className="text-neutral-400 hover:text-white transition-colors">Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="www.linkedin.com/in/angelzambrano1" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:angelzambranojaraba@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Tributar-IA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
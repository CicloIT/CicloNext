import React, { useEffect, useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactPage() {
  const [state, handleSubmit] = useForm("mdkzwllo");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      const timeout = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  return (
    <div id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <section>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pongámonos en <span className="text-verde-it">Contacto</span>
            </h2>
            <p className="text-xl text-slate-400">
              ¿Tenés alguna duda o proyecto en mente? Escribinos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Formulario de contacto */}
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700/50 backdrop-blur-sm">
              {showSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-slate-400">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Nombre" id="name" type="text" required />
                    <div>
                      <InputField label="Email" id="email" type="email" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-verde-it focus:border-transparent transition-all resize-none"
                      placeholder="Contanos ¿en qué podemos ayudarte?"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="flex-1 bg-verde-it hover:bg-[#159e90] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-verde-it/20"
                    >
                      {state.submitting ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col justify-center space-y-12 pl-0 lg:pl-10">
              <ContactInfo
                iconPath="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                title="Email"
                description="Para consultas generales y presupuestos"
              >
                <a href="mailto:info@cicloit.com" className="text-xl text-white hover:text-verde-it transition-colors font-medium">
                  info@cicloit.com
                </a>
              </ContactInfo>

              <ContactInfo
                iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                title="Teléfono / WhatsApp"
                description="Lunes a Viernes de 9:00 a 18:00hs"
              >
                <a href="https://wa.me/5493584314857" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-verde-it transition-colors font-medium">
                  +54 9 358 431 4857
                </a>
              </ContactInfo>

              <div className="pt-8 border-t border-slate-800">
                <p className="text-slate-500 text-sm">
                  CicloIT - Soluciones Tecnológicas Integrales
                  <br />Río Cuarto, Córdoba, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InputField({ label, id, type = "text", required = false }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-slate-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-verde-it focus:border-transparent transition-all"
      />
    </div>
  );
}

function ContactInfo({ iconPath, title, description, children }) {
  return (
    <div className="flex items-start space-x-6">
      <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-verde-it flex-shrink-0">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        {description && <p className="text-slate-500 text-sm mb-2">{description}</p>}
        {children}
      </div>
    </div>
  );
}

export default ContactPage;

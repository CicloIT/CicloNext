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
    <div className="pt-5">
      <section id="contact" className="py-5 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              {showSuccess ? (
                <p className="text-green-400 text-lg">¡Gracias por tu mensaje! Te responderemos pronto.</p>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Nombre" id="name" type="text" required />
                    <div>
                      <InputField label="Email" id="email" type="email" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      {state.submitting ? "Enviando..." : "Enviar"}
                    </button>
                    <button
                      type="reset"
                      className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Limpiar
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Información de contacto */}
            <div className="space-y-10">
              <ContactInfo
                iconPath="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                title="Email"
              >
                <a href="mailto:info@cicloit.com" className="text-blue-400 hover:underline">
                  info@cicloit.com
                </a>
              </ContactInfo>

              <ContactInfo
                iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                title="Teléfono"
              >
                <span className="text-slate-300">+54 9 3584 314857</span>
              </ContactInfo>
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
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

function ContactInfo({ iconPath, title, children }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-6 h-6 text-blue-400 mt-1">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default ContactPage;

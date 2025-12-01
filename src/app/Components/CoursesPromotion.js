'use client'
import React, { useState } from "react";
import {
  Camera,
  Wifi,
  Monitor,
  Award,
  MapPin,
  Calendar,  
} from "lucide-react";

const CoursesPromotion = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Instalación y Mantenimiento de Cámaras de Seguridad",
      subtitle: "Sistemas de Videovigilancia IP y Analógica",
      icon: Camera,
      description:
        "Formación técnica especializada para instalar, configurar y mantener sistemas de videovigilancia profesional. Dirigido a técnicos, instaladores y emprendedores del sector seguridad.",
      duration: "40 horas académicas",
      modality: "Presencial",
      schedule: "Lunes a Viernes 18:00 - 22:00",
      students: "Máximo 12 estudiantes",
      investment: "$45,000 ARS",
      discount: "15% OFF hasta el 31/07",
      certification: "Certificado Oficial",
      // rating: 4.8,
      //reviews: 89,
      color: "from-blue-600 to-blue-800",
      prerequisites: "Conocimientos básicos de electricidad y herramientas",
      objectives: [
        "Dominar la instalación de cámaras IP y analógicas",
        "Configurar DVR/NVR y sistemas de monitoreo",
        "Implementar redes de datos para videovigilancia",
        "Realizar mantenimiento preventivo y correctivo",
        "Generar propuestas técnicas y comerciales",
      ],
      syllabus: [
        {
          module: "Módulo 1: Fundamentos de Videovigilancia",
          topics: [
            "Introducción a sistemas CCTV",
            "Tipos de cámaras y aplicaciones",
            "Elementos del sistema",
            "Normativas y legislación",
          ],
        },
        {
          module: "Módulo 2: Tecnología de Cámaras",
          topics: [
            "Cámaras IP vs Analógicas",
            "Resolución y calidad de imagen",
            "Lentes y ángulos de visión",
            "Características técnicas",
          ],
        },
        {
          module: "Módulo 3: Instalación Práctica",
          topics: [
            "Montaje y ubicación estratégica",
            "Cableado y conectores",
            "Fuentes de alimentación",
            "Protección y blindaje",
          ],
        },
        {
          module: "Módulo 4: Configuración de Equipos",
          topics: [
            "Setup de DVR/NVR",
            "Configuración de red",
            "Acceso remoto",
            "Software de gestión",
          ],
        },
        {
          module: "Módulo 5: Mantenimiento y Troubleshooting",
          topics: [
            "Diagnóstico de fallas",
            "Mantenimiento preventivo",
            "Actualización de firmware",
            "Soporte técnico",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Instalación y Fusionado de Fibra Óptica",
      subtitle: "Redes FTTH y Conectorizado Profesional",
      icon: Wifi,
      description:
        "Capacitación técnica especializada en instalación, conectorizado y fusionado de fibra óptica para redes FTTH. Incluye práctica con equipamiento profesional de última generación.",
      duration: "60 horas académicas",
      modality: "Presencial",
      schedule: "Sábados 8:00 - 17:00",
      students: "Máximo 8 estudiantes",
      investment: "$75,000 ARS",
      discount: "20% OFF hasta el 31/07",
      certification: "Certificado Oficial + Constancia de Horas",
      //rating: 4.9,
      //reviews: 67,
      color: "from-green-600 to-green-800",
      prerequisites:
        "Conocimientos básicos de herramientas y sistema métrico decimal",
      objectives: [
        "Ejecutar instalaciones de fibra óptica FTTH",
        "Realizar conectorizado mecánico profesional",
        "Dominar técnicas de fusionado por arco eléctrico",
        "Interpretar mediciones con OTDR",
        "Certificar enlaces según normativas internacionales",
      ],
      syllabus: [
        {
          module: "Módulo 1: Fundamentos de Fibra Óptica",
          topics: [
            "Principios de propagación de luz",
            "Tipos de fibra monomodo/multimodo",
            "Ventajas sobre cobre",
            "Aplicaciones FTTH/FTTB",
          ],
        },
        {
          module: "Módulo 2: Componentes y Accesorios",
          topics: [
            "Cables y estructura",
            "Conectores SC/LC/FC",
            "Adaptadores y pigtails",
            "Cajas de empalme NAP/CTO",
          ],
        },
        {
          module: "Módulo 3: Técnicas de Conectorizado",
          topics: [
            "Preparación de fibra",
            "Conectorizado mecánico",
            "Pulido y limpieza",
            "Control de calidad",
          ],
        },
        {
          module: "Módulo 4: Fusionado Profesional",
          topics: [
            "Fusionadora por arco eléctrico",
            "Preparación y alineación",
            "Parámetros de fusión",
            "Protección de empalmes",
          ],
        },
        {
          module: "Módulo 5: Medición y Certificación",
          topics: [
            "Uso de OTDR",
            "Medición de pérdidas",
            "Reflectometría",
            "Documentación y certificados",
          ],
        },
        {
          module: "Módulo 6: Instalación en Campo",
          topics: [
            "Tendido aéreo y subterráneo",
            "Entrada a edificios",
            "Canalización horizontal",
            "Normativas de seguridad",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Diagnóstico y Reparación de Computadoras",
      subtitle: "Hardware y Software - Nivel Técnico",
      icon: Monitor,
      description:
        "Formación integral en diagnóstico, reparación y mantenimiento de equipos informáticos. Incluye técnicas avanzadas de recuperación de datos y atención al cliente.",
      duration: "50 horas académicas",
      modality: "Presencial",
      schedule: "Martes y Jueves 19:00 - 22:00",
      students: "Máximo 15 estudiantes",
      investment: "$35,000 ARS",
      discount: "10% OFF hasta el 31/07",
      certification: "Certificado Oficial",
      //rating: 4.7,
      //reviews: 124,
      color: "from-purple-600 to-purple-800",
      prerequisites: "Conocimientos básicos de informática",
      objectives: [
        "Diagnosticar fallas de hardware y software",
        "Reparar componentes y motherboards",
        "Recuperar datos de discos dañados",
        "Optimizar rendimiento del sistema",
        "Brindar soporte técnico profesional",
      ],
      syllabus: [
        {
          module: "Módulo 1: Arquitectura de Computadoras",
          topics: [
            "Componentes principales",
            "Motherboard y chipsets",
            "Procesadores y memoria",
            "Almacenamiento y periféricos",
          ],
        },
        {
          module: "Módulo 2: Diagnóstico Sistemático",
          topics: [
            "Metodología de diagnóstico",
            "Herramientas de prueba",
            "Códigos de error POST",
            "Software de diagnóstico",
          ],
        },
        {
          module: "Módulo 3: Reparación de Hardware",
          topics: [
            "Soldadura básica SMD",
            "Reparación de fuentes",
            "Cambio de componentes",
            "Reballing de chips",
          ],
        },
        {
          module: "Módulo 4: Sistemas Operativos",
          topics: [
            "Instalación y configuración",
            "Drivers y actualizaciones",
            "Registro de Windows",
            "Optimización del sistema",
          ],
        },
        {
          module: "Módulo 5: Recuperación de Datos",
          topics: [
            "Clonado de discos",
            "Software de recuperación",
            "Reparación de sectores",
            "Técnicas avanzadas",
          ],
        },
        {
          module: "Módulo 6: Gestión Comercial",
          topics: [
            "Presupuestación",
            "Atención al cliente",
            "Garantías y seguimiento",
            "Marketing de servicios",
          ],
        },
      ],
    },
  ];

  const toggleExpanded = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="mt-23 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Cursos Técnicos Profesionales
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Formación presencial especializada con equipamiento profesional.
            Certificaciones oficiales respaldadas por más de 10 años de
            experiencia en el sector.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Río Cuarto, Córdoba</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Inscripciones Abiertas</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              <span>Certificación Oficial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Courses */}
        <div className="space-y-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Course Header */}
                <div
                  className={`bg-gradient-to-r ${course.color} text-white p-8`}
                >
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-2">
                            {course.title}
                          </h2>
                          <p className="text-white text-opacity-90 text-lg">
                            {course.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-white text-opacity-90 leading-relaxed">
                        {course.description}
                      </p>
                      {
                        /*
                             <div className="flex items-center mt-4 space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-current mr-1" />
                          <span className="font-semibold">{course.rating}</span>
                          <span className="text-white text-opacity-70 ml-2">
                            ({course.reviews} reseñas)
                          </span>
                        </div>
                      </div>
                        */
                      }
                   

                    </div>
                      {
                        /*
                            <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{course.modality}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{course.students}</span>
                      </div>
                    </div>


                     <div className="text-center">
                      <div className="text-3xl font-bold mb-1">
                        {course.investment}
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {course.discount}
                      </div>
                      <div className="text-sm text-white text-opacity-80">
                        {course.certification}
                      </div>
                    </div>
                        */
                      }
                  

                   
                  </div>
                </div>
              
                {/* Course Content */}
                <div className="p-8">
                  {/* Prerequisites and Objectives */}

                  {
                    /*
                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Requisitos Previos
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {course.prerequisites}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Objetivos del Curso
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {course.objectives
                          .slice(0, 3)
                          .map((objective, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {objective}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>


                  <button
                    onClick={() => toggleExpanded(course.id)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 mb-4"
                  >
                    <span className="font-semibold text-gray-700">
                      Programa Académico Detallado
                    </span>
                    {expandedCourse === course.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedCourse === course.id && (
                    <div className="mb-6 bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-6">
                        {course.syllabus.mapF((module, index) => (
                          <div key={index}>
                            <h5 className="font-semibold text-gray-800 mb-3">
                              {module.module}
                            </h5>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {module.topics.map((topic, topicIndex) => (
                                <div
                                  key={topicIndex}
                                  className="flex items-start text-sm text-gray-600"
                                >
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                    */
                  }
                  

                  

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://docs.google.com/forms/d/1cTq350mUpLVx07V10Jes9JdbDSRHLtS0jiLU0out0Q4/edit?hl=es-419"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${course.color} text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg text-center`}
                    >
                      Inscribirse al Curso
                    </a>
                    {
                      /**
                        <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                      Solicitar Información
                    </button>                       
                       */
                    }
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitás más información?
          </h2>
          <p className="text-xl mb-6 text-gray-300">
            Hablá con nuestros asesores académicos para conocer más sobre
            nuestros programas de formación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              Para más información sobre el curso o asistencia con la inscripción, podés llamarnos al 358 485 3816 o enviarnos un correo electrónico a cursos@cicloit.com. Estaremos encantados de ayudarte.
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <span>📍 CicloIT - Río Cuarto</span>
              <span>📞 (0358) 4853816</span>
              <span>✉️ cursos@cicloit.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPromotion;

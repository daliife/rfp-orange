export const servicesMock = [
  {
    id: 1,
    title: 'Mapa de empatía',
    iconPath: 'assets/img/service-icons/bulb-black.svg',
    iconCardPath: 'assets/img/service-icons/bulb-white.svg',
    description:
      'Es una herramienta de investigación que busca describir de forma precisa al público objetivo. En términos simples es ponernos en los zapatos de los consumidores para tener un conocimiento más profundo sobre ellos, su personalidad, su entorno, cómo ven el mundo, necesidades y deseos.​',
    reason:
      'Nos sirve para entender el punto de vista de los usuarios de forma más profunda respecto a necesidades o problemas sobre un producto o servicio. Nos proporciona información precisa sobre el público objetivo y ayuda a alinear los stakeholders con el equipo. El mapa de empatía es el punto de partida para la creación de arquetipos/personas.',
    phases: [
      'Definir alcance y objetivos​',
      'Preparación de materiales para la sesión​',
      'Sesión conjunta stakeholders y UX team creación mapa de empatía​',
      'Síntesis de resultados e informe',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 2,
    title: 'Diagrama de flujo',
    iconPath: 'assets/img/service-icons/bulb-black.svg',
    iconCardPath: 'assets/img/service-icons/bulb-white.svg',
    description:
      'Un diagrama de flujo nos permite visualizar los pasos que sigue un sistema o usuario para realizar una serie de tareas. Es un paso muy importante el la fase de conceptualización.',
    reason:
      'Un diagrama de flujo nos sirve para desarrollar una comprensión del proceso que ejecuta un usuario de principio a fin con el objetivo de brindar una experiencia satisfactoria. Es una parte clave en la conceptualización y ejecución de un producto/servicio. Nos proveerá el mapa por el cual los usuarios navegarán para completar sus objetivos y que define igual el contenido a crear. Además, nos ayuda a alinear los objetivos del negocio con los del cliente.',
    phases: [
      'Definición de objetivo y recopilación de datos identificados en la fase de investigación​',
      'Creación de los diagramas de flujo',
      'Validación del flujo con los stakeholders',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, 'UX Interaction Expert', null],
  },
  {
    id: 3,
    title: 'Diagrama de funcionamiento',
    iconPath: 'assets/img/service-icons/direction-black.svg',
    iconCardPath: 'assets/img/service-icons/direction-white.svg',
    description:
      'Un diagrama de funcionamiento nos permite visualizar los pasos que sigue un usuario para hacer funcionar un producto/servicio a través de una serie de tareas. Generalmente estas tareas son representadas con diagramas o dibujos.',
    reason:
      'Un diagrama de funcionamiento nos sirve para desarrollar una comprensión del proceso que ejecuta un usuario de principio a fin con el objetivo de poner en funcionamiento un producto/servicio. Es una parte clave en procesos de onboarding o montaje de complejidad media/alta para lograr la satisfacción del cliente o usuario. Nos proveerá el mapa por el cual los usuarios podrán comenzar su relación con el producto/servicio y guiará su experiencia, asegurando que será la correcta y siempre la misma.',
    phases: [
      'Definición de objetivo y recopilación de datos identificados en la fase de investigación​',
      'Creación de los diagramas de flujo',
      'Validación del flujo con los stakeholders​',
    ],
    participants: ['Equipo UX'],
    profiles: [
      'User Research Expert',
      'UX Interaction Expert',
      'Experience Design Expert',
    ],
  },
  {
    id: 4,
    title: 'Prototipado (alto y bajo nivel)',
    iconPath: 'assets/img/service-icons/direction-black.svg',
    iconCardPath: 'assets/img/service-icons/direction-white.svg',
    description:
      'Es una representación del producto/servicio que permite visualizar y probar sus funcionalidades principales. Los prototipos pueden ser de alto y bajo nivel. Bajo nivel tiende a ser hecho en papel o de forma digital pero con muy pocos detalles. Alto nivel tiene el aspecto visual y funcionamiento principal de la solución.',
    reason:
      'Nos sirve para revisar la solución con stakeholders, así como para testar de forma rápida la solución con usuarios, previo a entrar en la fase de desarrollo e invertir tiempo y dinero. Los prototipos son una parte integral del proceso de diseño que ayudan visualizar tanto el aspecto gráfico como las funcionalidades de la solución y así validar con los stakeholders.',
    phases: [
      'Creación de prototipo de solución definida​',
      'Revisión interna y con desarrollo',
      'Validación con stakeholders',
    ],
    participants: ['Equipo UX'],
    profiles: [null, 'UX Interaction Expert', null],
  },
  {
    id: 5,
    title: 'Inventario de contenido',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'Es una lista de todos los contenidos que tiene un servicio/producto. Esto incluye: texto, imágenes, documentos y aplicaciones.​',
    reason:
      'Sirve como una herramienta de análisis que permite recopilar todo el contenido de un servicio. Es esencial para tener todo el contenido documentado. Es de gran ayuda cuando se está re-haciendo la arquitectura de información de un producto/servicio, ya que, ayuda a la comprensión del original.',
    phases: [
      'Recopilación y documentación del contenido​',
      'Análisis',
      'Identificación puntos críticos y propuesta de mejoras',
    ],
    participants: ['Equipo UX'],
    profiles: [null, 'UX Interaction Expert', null],
  },
  {
    id: 6,
    title: 'Escenarios',
    iconPath: 'assets/img/service-icons/bulb-black.svg',
    iconCardPath: 'assets/img/service-icons/bulb-white.svg',
    description:
      'Es una herramienta que sirve para describir de forma textual o visual escenarios de los usuarios para los que estamos diseñando (User Personas). Un escenario está compuesto por un usuario quien está ejecutando una serie de acciones con un producto/servicio con el fin de completar un objetivo en concreto en un contexto específico.',
    reason:
      'Plantear posibles escenarios de uso sirve para definir objetivos de los usuarios. Los escenarios toman en cuenta sus necesidades y esto nos sirve para capturar momentos críticos en su interacción con el producto/servicio. También nos permite formalizar/conceptualizar ideas que hayan sido creadas durante la fase de ideación.',
    phases: [
      'Recolección de datos de los usuarios​',
      'Definición de variables de los usuarios',
      'Preparación y ejecución de la sesión con el equipo UX​',
      'Síntesis de resultados e informe',
    ],
    participants: ['Equipo UX'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 7,
    title: 'Evaluación heurística',
    iconPath: 'assets/img/service-icons/direction-black.svg',
    iconCardPath: 'assets/img/service-icons/direction-white.svg',
    description:
      'Es un proceso de investigación en el que expertos en usabilidad utilizan un set de reglas para determinar si una experiencia de interacción cumple o no con los principios heurísticos de establecidos, generalmente, los parámetros heurísticos Nielsen-Molich.​',
    reason:
      'La evaluación heurística tiene como propósito detectar problemas de usabilidad que puedan impedir que los usuarios interactúen de forma satisfactoria con un producto/servicio e identificar posibles soluciones. Con el resultado de esta evaluación heurística se determina claramente los puntos a mejorar de la experiencia.',
    phases: [
      'Definir objetivos del test y heurística a aplicar',
      'Ejecución del test por los evaluadores expertos​',
      'Análisis de los resultados',
      'Informe con problemas identificados y propuestas de mejora',
    ],
    participants: ['Equipo UX'],
    profiles: ['User Research Expert', 'UX Interaction Expert', null],
  },
  {
    id: 8,
    title: 'Wireframes',
    iconPath: 'assets/img/service-icons/direction-black.svg',
    iconCardPath: 'assets/img/service-icons/direction-white.svg',
    description:
      'Es una representación visual del diagrama de flujo, donde se presenta de una forma muy sencilla la estructura y el contenido de un producto o servicio digital. En los wireframes no se utilizan ni colores, tipografía, ni cualquier elemento gráfico. Lo importante es centrarse en la funcionalidad y contenido del producto/servicio.',
    reason:
      'Esta actividad es esencial para definir el contenido, funcionamiento y el diseño estructural del producto/servicio. Es una parte crítica del proceso de diseño. Es muy útil en la fase de conceptualización ya que permite el alineamiento de los stakeholders con el equipo para validar las decisiones de diseño.',
    phases: [
      'Recopilar el diagrama de flujo creado y los objetivos del producto/servicio',
      'Creación de wireframes',
      'Revisión interna y con desarrolladores',
      'Validación con stakeholders',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, 'UX Interaction Expert', null],
  },
  {
    id: 9,
    title: 'Customer journey map',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'Es una actividad de investigación donde se crea una representación detallada del proceso o etapas por el que pasa un consumidor para completar una tarea con un producto/servicio. En este mapa se recopilan las interacciones, canales y elementos por los que atraviesan los usuarios desde un punto a otro en el servicio, así como las emociones que se viven al pasar por ellas.​',
    reason:
      'Sirve para identificar los puntos de dolor de los usuarios, sus necesidades y motivaciones cuando intentan completar una tarea con el servicio.  Nos ayuda a crear empatía con la experiencia de los usuarios y también nos permite identificar insights sobre su comportamiento a la hora de cumplir sus objetivos.',
    phases: [
      'Recopilación de datos obtenidos de los usuarios y stakeholders',
      'Creación de Customer Journey Map',
      'Identificar puntos críticos​',
      'Informe de resultados/compartir resultados',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: ['User Research Expert', null, null],
  },
  {
    id: 10,
    title: 'Árbol de contenido',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'Es la representación gráfica de la estructura de navegación de un producto o servicio, mediante la cual se puede observar de forma general y esquemática qué información se ofrecerá al usuario y cómo está distribuida.',
    reason:
      'Esta herramienta nos permite definir la estructura del contenido que tendrá la solución. Nos permite ver fácilmente la jerarquización de cada apartado y sub-apartado, este proceso es muy efectivo para comprobar el tamaño y complejidad del proyecto.',
    phases: [
      'Recopilación de datos',
      'Jerarquización y creación de árbol de contenidos​',
      'Validación con stakeholders',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, 'UX Interaction Expert', null],
  },
  {
    id: 11,
    title: 'Mapa de navegación',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'Es un diagrama jerárquico que muestra la estructura de un producto o servicio. Se podría considerar como el primer paso para distribuir, organizar y jerarquizar el contenido de un producto o servicio digital.',
    reason:
      'Esta herramienta nos provee una visión completa de la solución, esto nos permite tomar mejores decisiones de diseño. Nos ayuda a definir la taxonomía del contenido, ayudando a distinguir la distribución del mismo y la relación entre sus partes.',
    phases: [
      'Recopilación de información​',
      'Creación de mapa de contenidos​',
      'Validación con stakeholders​',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, 'UX Interaction Expert', null],
  },
  {
    id: 12,
    title: 'Diseño visual',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'Es una disciplina clave dentro de la metodología design thinking que estudia los sistemas de información, con el objeto de convertir los datos en formas visuales, teniendo en cuenta los procesos perceptivos. En esta actividad se detalla el layout y look and feel de un producto/servicio.​',
    reason:
      'El diseño visual es importante para representar valores de la marca y ganar la confianza de los consumidores. Es la primera impresión que tienen los usuarios del servicio con el potencial de convertir a visitantes en compradores y usuarios.',
    phases: [
      'Recopilación de wireframes y solución definida',
      'Creación diseño visual de la solución​',
      'Revisión interna​',
      'Validación con stakeholders',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, 'UX Interaction Expert', 'Experience Design Expert'],
  },
  {
    id: 13,
    title: 'Seguimiento de proyecto agile',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'El seguimiento de proyecto agile comprende todas las ceremonias esenciales para el buen funcionamiento de un proyecto agile: Dailys, sprint planning, demo y retrospectiva, su preparación, celebración y registro.​',
    reason:
      'El seguimiento de un proyecto Agile sirve para gestionar y liderar proyectos en los que se quiere ir realizando pruebas sobre el desarrollo de un producto o servicio, entregando prototipos con valor en cada uno de los sprints e ir iterando sobre ellos.',
    phases: [
      'Sprint planning, en lo que se define a realizar en cada sprint',
      'Dailys o reuniones diarias para detectar bloqueos y hacer seguimiento​',
      'Demos con aporte de valor a la finalización de cada sprint​',
      'Retrospectivas de equipo al acabar cada sprint para mejorar el proceso',
    ],
    participants: ['Equipo UX'],
    profiles: [null, null, 'Experience Design Expert'],
  },
  {
    id: 14,
    title: 'Diseño de comunicaciones',
    iconPath: 'assets/img/service-icons/speaker-black.svg',
    iconCardPath: 'assets/img/service-icons/speaker-white.svg',
    description:
      'Es una herramienta de investigación que busca describir de forma precisa al público objetivo. En términos simples es ponernos en los zapatos de los consumidores para tener un conocimiento más profundo sobre ellos, su personalidad, su entorno, cómo ven el mundo, necesidades y deseos.​',
    reason:
      'Nos sirve para entender el punto de vista de los usuarios de forma más profunda respecto a necesidades o problemas sobre un producto o servicio. Nos proporciona información precisa sobre el público objetivo y ayuda a alinear los stakeholders con el equipo. El mapa de empatía es el punto de partida para la creación de arquetipos/personas.',
    phases: [
      'Definir alcance y objetivos​',
      'Preparación de materiales para la sesión​',
      'Sesión conjunta stakeholders y UX team creación mapa de empatía​',
      'Síntesis de resultados e informe',
    ],
    participants: ['Equipo UX', 'Stakeholders', 'Usuarios'],
    profiles: [
      'User Research Expert',
      'UX Interaction Expert',
      'Experience Design Expert',
    ],
  },
  {
    id: 15,
    title: 'Investigación cualitativa',
    iconPath: 'assets/img/service-icons/message-black.svg',
    iconCardPath: 'assets/img/service-icons/message-white.svg',
    description:
      'Es un método de estudio que se basa en la recopilación de datos para descubrir detalles que ayudan a explicar el comportamiento humano. Transmite la riqueza de los pensamientos y experiencias de las personas en un contexto determinado.​',
    reason:
      'Nos sirve para comprender el por qué, cómo o de qué manera subyacente se da una determinada acción o comportamiento y así tomar mejores decisiones sobre el diseño de la solución. Cabe destacar la importancia de hacer este tipo de actividades de forma remota, se deben tomar las consideraciones necesarias para obtener los mismos niveles de calidad que realizándolas de forma presencial.',
    phases: [
      'Diseño de la investigación',
      'Elaboración de guion entrevista/focus',
      'Captación de usuarios y preparación del entorno virtual​',
      'Análisis e Informe de resultados',
    ],
    participants: ['Equipo UX', 'Stakeholders', 'Usuarios'],
    profiles: ['User Research Expert', null, null],
  },
  {
    id: 16,
    title: 'Blueprint',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'Es un diagrama que sirve para la comprensión integral de un servicio, sus recursos, procesos subyacentes, visibles y no visibles para los usuarios que lo hacen posible. A diferencia del customer journey, el blueprint no solo se enfoca en la experiencia del usuario, sino en todos los actores que intervienen en un servicio y así tener una profundización del sistema.',
    reason:
      'El centrarse en una comprensión más amplia del servicio proporciona beneficios estratégicos para la empresa. Nos permite identificar puntos débiles dentro del ecosistema, al igual que oportunidades de optimización de los procesos. Es un punto importante en relevancia a las decisiones de diseño.',
    phases: [
      'Recolección de datos de los usuarios y servicio/producto',
      'Creación de Blueprint​',
      'Revisión interna​',
      'Validación con stakeholders',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 17,
    title: 'Especificaciones funcionales y de diseño',
    iconPath: 'assets/img/service-icons/pencil-black.svg',
    iconCardPath: 'assets/img/service-icons/pencil-white.svg',
    description:
      'Las especificaciones funcionales y de diseño es la descripción analítica de como debe ser comportarse el producto o servicio a nivel de funcionamiento, interacción y diseño. Son aclaraciones de como deben ser los diferentes estados de cada de las funcionalidades y su estética.',
    reason:
      'Las especificaciones funcionales y de diseño sirven para que tanto stakeholders como equipo de desarrollo conozca el comportamiento a nivel funcional y de diseño del producto que se está definiendo, tanto como para alineamiento y definición como para el hecho en si de desarrollarlo.',
    phases: [
      'Recopilación de wireframes y solución definida',
      'Documentación y especificación de todos los estados y comportamientos',
      'Revisión interna y con desarrollo',
      'Validación con stakeholders',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, 'UX Interaction Expert', 'Experience Design Expert'],
  },
  {
    id: 18,
    title: 'Manual de uso de producto',
    iconPath: 'assets/img/service-icons/speaker-black.svg',
    iconCardPath: 'assets/img/service-icons/speaker-white.svg',
    description:
      'El manual de uso de un producto es una descripción detallada del mismo, así como de los pasos o tareas a realizar para poder hacer uso del mismo. Generalmente consta de diagrama de las partes o piezas con su descripción, ya sea un producto digital o físico y posteriormente una explicación detallada de como llevar a cabo cada funcionalidad o función que permita.​',
    reason:
      'El manual de uso de producto sirve para explicar a los usuarios cómo es y como se usa un producto de forma que resuelva todas las dudas que pueda tener a la hora de usarlo.',
    phases: [
      'Recopilación de datos sobre el producto y sus funcionalidades de forma detallada',
      'Redacción del manual y de las infografías que puedan necesitarse para completarlo​',
      'Validación del flujo con los stakeholders',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, null, 'Experience Design Expert'],
  },
  {
    id: 19,
    title: 'Generación de sitios web y campaña',
    iconPath: 'assets/img/service-icons/speaker-black.svg',
    iconCardPath: 'assets/img/service-icons/speaker-white.svg',
    description:
      'Es una herramienta de investigación que busca describir de forma precisa al público objetivo. En términos simples es ponernos en los zapatos de los consumidores para tener un conocimiento más profundo sobre ellos, su personalidad, su entorno, cómo ven el mundo, necesidades y deseos.​',
    reason:
      'Nos sirve para entender el punto de vista de los usuarios de forma más profunda respecto a necesidades o problemas sobre un producto o servicio. Nos proporciona información precisa sobre el público objetivo y ayuda a alinear los stakeholders con el equipo. El mapa de empatía es el punto de partida para la creación de arquetipos/personas.',
    phases: [
      'Definir alcance y objetivos​',
      'Preparación de materiales para la sesión​',
      'Sesión conjunta stakeholders y UX team creación mapa de empatía​',
      'Síntesis de resultados e informe',
    ],
    participants: ['Equipo UX', 'Stakeholders', 'Usuarios'],
    profiles: [
      'User Research Expert',
      'UX Interaction Expert',
      'Experience Design Expert',
    ],
  },
  {
    id: 20,
    title: 'Investigación cuantitativa',
    iconPath: 'assets/img/service-icons/chart-black.svg',
    iconCardPath: 'assets/img/service-icons/chart-white.svg',
    description:
      'Esta metodología de investigación se utiliza para probar teorías sobre comportamientos y actitudes de los usuarios basadas en evidencia numérica y estadística. Es una investigación más estructurada, objetiva y ayuda a reducir el sesgo de investigación.​',
    reason:
      'Nos sirve para confirmar o descartar teorías o hipótesis que tenemos sobre la solución del servicio/producto.  Este tipo de investigación nos permite entender el “qué”, “dónde” y “cuándo” de las necesidades y problemas de los usuarios.',
    phases: [
      'Diseño de la investigación y elaboración de cuestionario',
      'Programación y pilotaje de cuestionarios y seguimiento de encuestas',
      'Tabulación de resultados​',
      'Análisis e Informe de resultados',
    ],
    participants: ['Equipo UX', 'Stakeholders', 'Usuarios'],
    profiles: ['User Research Expert', null, null],
  },
  {
    id: 21,
    title: 'Investigación etnográfica',
    iconPath: 'assets/img/service-icons/profile-black.svg',
    iconCardPath: 'assets/img/service-icons/profile-white.svg',
    description:
      'Es un método de investigación cualitativa por el que se aprende el contexto real de los usuarios. Permite interpretar el día a día de los consumidores enfocándose en lo que hace y no solo lo que dice. Busca entender códigos culturales o “shortcuts” que rodean a un producto/servicio determinado.​',
    reason:
      'La etnografía nos permite investigar los pensamientos del consumidor sobre cosas más allá del producto/servicio, nos permite conocer a la persona de manera más personal, sus creencias, personalidad, biografía, juicios, prejuicios, cómo se comunica, lo que dice y lo que hace. Nos ayuda a ver realmente cómo los usuarios piensan y qué asocian a un determinado producto/servicio.',
    phases: [
      'Diseño de la investigación y guion​',
      'Ejecución de la investigación',
      'Análisis de resultados',
      'Informe de resultados',
    ],
    participants: ['Equipo UX', 'Stakeholders', 'Usuarios'],
    profiles: ['User Research Expert', null, null],
  },
  {
    id: 22,
    title: 'Coordinación de proyectos',
    iconPath: 'assets/img/service-icons/watch-black.svg',
    iconCardPath: 'assets/img/service-icons/watch-white.svg',
    description:
      'La coordinación  de proyectos es el conjunto de actividades necesarias para saber que el proyecto va bien encaminado y está obteniendo los resultados esperados a través de los recursos disponibles​',
    reason:
      'La coordinación de proyectos sirve para saber si estamos realizando las actividades y obteniendo los resultados esperados con las horas y recursos necesarios sin excedernos en ninguno de ellos.',
    phases: [
      'Inventario de dispositivos y material​',
      'Dashboard de servicio',
      'Captación de público objetivo, gratificación y gestión de espacios',
      'Reuniones de seguimiento semanales y controller',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: [null, null, 'Experience Design Expert'],
  },
  {
    id: 23,
    title: 'Generación fases MVP',
    iconPath: 'assets/img/service-icons/pin-black.svg',
    iconCardPath: 'assets/img/service-icons/pin-white.svg',
    description:
      'Es una actividad que nos permite lanzar un producto/servicio con el mínimo de funciones posible. Está pensado para trabajar con el bluce construir-medir-aprender en cada nueva iteración.​',
    reason:
      'Nos sirve para que aprender información relevante con el lanzamiento de un producto limitado y que uso le dan los usuarios sin invertir mucho dinero. El objetivo es testear las hipótesis que tenemos sobre la visión del producto e ir iterando sobre el feedback obtenido.',
    phases: [
      'Definir una serie de hipótesis que queremos comprobar (aprender)',
      'Definición de métricas para comprobación de hipótesis (medir)​',
      'Diseño y construcción del MVP',
      'Lanzamiento de MVP, análisis e iteración',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 24,
    title: 'Espacios para la cocreación y concepturalización de servicios',
    iconPath: 'assets/img/service-icons/3d-black.svg',
    iconCardPath: 'assets/img/service-icons/3d-white.svg',
    description:
      'El espacio para talleres de conceptualización es importante, ya que en el se definen las condiciones necesarias para asegurar resultados de calidad. El enfoque remote-first es esencial, ya que, debemos asegurarnos que la sesión se pueda realizar en este espacio digital.​',
    reason:
      'Los workshops son sesiones de tiempo limitado, para asegurar resultados de calidad el espacio en que se realicen debe estar optimizado y preparado. En las sesiones remotas debemos asegurarnos no solo de que el software está actualizado, sino también de qué tan familiarizados están los asistentes con la metodología y la tecnología y en las sesiones presenciales que nada en la sala pueda desviar de los objetivos y que todo aporte para facilitar la sesión.',
    phases: [
      'Preparación espacio para la sesión',
      'Revisar posibles imprevistos y prepararse acorde',
      'Ejecución de la sesión',
    ],
    participants: ['Equipo UX'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 25,
    title: 'Acompañamiento y cultura centrada en el usuario',
    iconPath: 'assets/img/service-icons/profile-check-black.svg',
    iconCardPath: 'assets/img/service-icons/profile-check-white.svg',
    description:
      'Es importante no solo el esfuerzo como equipo sino también la evangelización en cuanto a trabajo. Para mejorar la cultura lo mejor es tener sesiones de presentaciones, donde se exponen “Best practices”, conocimientos de competencias específicas y referencias en UX.​',
    reason:
      'Todo esto sirve para mejorar la cultura de trabajo y modelo de relación en la ejecución de proyectos. Mientras la cultura vaya mejorando, de la misma forma la calidad del trabajo aumentará, por eso la consultoría sobre el desarrollo de la cultura de UX es de mucha importancia. Esto simplifica además la comunicación entre stakeholders y equipo UX.',
    phases: [
      'Preparación y definición de sesiones​',
      'Elaboración de guía de presentación UX​',
      'Ejecución de las presentaciones',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 26,
    title: 'Tests de ergonomía y usabilidad',
    iconPath: 'assets/img/service-icons/lab-black.svg',
    iconCardPath: 'assets/img/service-icons/lab-white.svg',
    description:
      'Es una prueba de usabilidad correspondiente a la investigación cualitativa donde se observa a los usuarios mientras navegan por un flujo determinado del producto/servicio. Normalmente, durante el test, los participantes tienen que completar una serie de tareas mientras los observadores miran, escuchan y toman notas.​',
    reason:
      'Nos sirve para validar flujos de usuario en la experiencia y decisiones tomadas, al igual que entender comportamientos y preferencias de los usuarios, identificar problemas de interacción y oportunidades de mejoras. Crea empatía con los stakeholders sobre cómo los usuarios realmente utilizan su producto/servicio.',
    phases: [
      'Diseño del test, guion y captación de usuarios',
      'Ejecución del test​',
      'Análisis de resultados',
      'Informe de resultados',
    ],
    participants: ['Equipo UX', 'Stakeholders', 'Usuarios'],
    profiles: ['User Research Expert', 'UX Interaction Expert', null],
  },
  {
    id: 27,
    title: 'Capacidades de dinamización',
    iconPath: 'assets/img/service-icons/box-black.svg',
    iconCardPath: 'assets/img/service-icons/box-white.svg',
    description:
      'Es una sesión colaborativa de la metodología design thinking cuyo objetivo es la resolución de problemas y definir caminos a tomar en en un desafío en particular durante el ciclo de diseño. La dinamización como tal se refiere al rol de facilitador que adopta quien lleve la sesión, usualmente un perfil de Experience Design o User Research.​',
    reason:
      'Los talleres sirven para dar respuestas a problemas específicos durante el ciclo de diseño. El diseño colaborativo con diferentes perfiles de distintas áreas de conocimiento en un espacio limitado de tiempo permite la creación de un espacio creativo donde los participantes pueden llegar a ideas valiosas que sean accionables para el producto/servicio.',
    phases: [
      'Definir objetivo de la sesión​',
      'Preparación de sesión y dinámica',
      'Ejecución de la sesión​',
      'Informe de resultados',
    ],
    participants: ['Equipo UX', 'Stakeholders', 'Usuarios'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 28,
    title: 'Dinamización de talleres de creatividad',
    iconPath: 'assets/img/service-icons/rocket-black.svg',
    iconCardPath: 'assets/img/service-icons/rocket-white.svg',
    description:
      'Los workshops o talleres de creatividad son una serie de actividades de conceptualización donde se utiliza la metodología de co-creación junto a los stakeholders para crear propuestas de solución de los productos/servicios.  Luego estas propuestas se definen y se validan como una solución concreta.​',
    reason:
      'Es importante que las fases de conceptualización se realicen con los stakeholders, ya que, tienen el contexto real del negocio y servicio. Para asegurar buenos resultados se necesitan perfiles interdisciplinarios desde el equipo de UX que brinden diversas perspectivas y dominio de su área. De esta forma generamos ideas en las sesiones que luego se trabajan y se convierten en propuestas de la solución.',
    phases: [
      'Definición objetivo de la sesión',
      'Preparación de la guía y dinámicas',
      'Ejecución de taller',
      'Informe de resultados',
    ],
    participants: ['Equipo UX', 'Stakeholders'],
    profiles: ['User Research Expert', null, 'Experience Design Expert'],
  },
  {
    id: 29,
    title: 'Optimización de comunicación, organización y productividad',
    iconPath: 'assets/img/service-icons/share-black.svg',
    iconCardPath: 'assets/img/service-icons/share-white.svg',
    description:
      'De cara a remote-first es más importante que nunca la comunicación, es esencial que haya un constante flujo de información entre los stakeholders y el equipo de UX. Hacemos énfasis en utilizar herramientas remotas que simplifiquen esta necesidad y hacemos sesiones para fomentar las mejores prácticas cuando se refiere a remote-first.​',
    reason:
      'Es importante fomentar las “best practices” cuando hablamos de trabajar en equipo, especialmente en entorno remote-first. Para obtener resultados de calidad, debemos velar por una excelente comunicación, organización y productividad dentro del equipo, especialmente pensando en cómo mejorar estos aspectos cuando trabaja el equipo completo en remoto.',
    phases: [
      'Preparación documentos mejores prácticas​',
      'Tomar medidas para asegurar la productividad del equipo​',
      'Revisar con el equipo qué mejoras podrían implementarse a lo largo del proyecto​',
    ],
    participants: ['Equipo UX'],
    profiles: [null, null, 'Experience Design Expert'],
  },
];

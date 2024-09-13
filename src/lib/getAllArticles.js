const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Jeen Ai',
    site: 'https://jeen.ai',
    description:
      'I am part of a dynamic development team focused on delivering cutting-edge business intelligence solutions to clients across various industries. My role involves independently managing projects, utilizing the latest AI tools such as OpenAI and GenAI, and applying my expertise in Python, Node.js, React, and PostgreSQL to develop scalable, secure, and high-performance systems. Our clientele spans sectors like Telecom, High Tech, Banking, Finance, Insurance, Retail, and Trade, where we aim to enhance operational efficiency through efficient, reliable, and user-friendly technology-oriented solutions. This position demands continuous learning, adaptability, and handling a diverse array of projects, emphasizing my dedication to leveraging the newest technologies to achieve outstanding project outcomes.',
    date: '2024-01-15',
    key: '1',
  },
  {
    title: 'Full Stack Developer',
    company: 'IDF Intelligence Unit',
    site:'',
    description:
      'Actively contributed to, mentored and led the transition to new technologies such as Golang, Node.js, React, Redux.js, Docker, Kubernetes, AWS, and MongoDB, adhering to micro-services architecture and Agile methodology. My expertise spans a range of languages and technologies including Vue.js, TypeScript, Redis, Azure and many more, with a track record of excellence recognized by a certification from the intelligence corps. In my service i\'ve worked on two main projects, \"Drive\" which is a system that manages and stores classified military files like the known system \'google drive\' and \"Transfers" which is a system that manages and transfers classified military files between calssified networks much like google \'analystics\'.',
    date: '2020-10-13',
    key: '2',
  },
  // {
  //   title: 'Drive',
  //   company: 'IDF Intelligence Unit',
  //   description:
  //   'This system manages and stores classified military files like the known system "google drive". Actively contributed to the development of drive, Utilized Golang as the primary language along with technologies such as gRPC, Protobuf, vue.js, Docker, Kubernetes, Helm, azure, AWS, Express, TypeScript, Azure and MongoDB. Spearheaded transition to new technologies, including Node.js, React, Redux.js, Redis, RabbitMQ and AWS. The codebase followed the architecture style of micro-services and Agile methodology Recieved a certification of excellence for award winning system in the intelligence corps.',
  //   date: '2021-04-01',
  //   key: '3',
  // },
  // {
  //   title: 'Transfers',
  //   company: 'IDF Intelligence Unit',
  //   description:
  //   'This system manages and transfers classified military files between calssified networks. Played a key leadership role in the development and implementation of the system. The codebase followed the architecture style of micro-services and Agile methodology and levraged Node.js as the primary language, along with a variety of technologies including React.js, Docker, Kubernetes, Redux, AWS, Express, TypeScript, MongoDB, and Redis.',
  //   date: '2022-07-03',
  //   key: '4',
  // },
]

export async function getAllExperiences() {
  return experiences
    .filter(experience => experience.date) // Filter out experiences without a date
    .sort((a, z) => new Date(z.date) - new Date(a.date));
}
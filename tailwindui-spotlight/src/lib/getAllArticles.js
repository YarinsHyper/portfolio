const articles = [
  {
    title: 'Drive',
    company: 'IDF Intelligence Unit',
    description:
      'This system manages and stores classified military files like the known system "google drive". Actively contributed to the development of drive, Utilized Golang as the primary language along with technologies such as gRPC, Protobuf, vue.js, Docker, Kubernetes, Helm, azure, AWS, Express, TypeScript, Azure and MongoDB. Spearheaded transition to new technologies, including Node.js, React, Redux.js, Redis, RabbitMQ and AWS. The codebase followed the architecture style of micro-services and Agile methodology Recieved a certification of excellence for award winning system in the intelligence corps.',
    date: '2021-04-01',
    key: '1',
  },
  {
    title: 'Transfers',
    company: 'IDF Intelligence Unit',
    description:
      ' This system manages and transfers classified military files between calssified networks. Played a key leadership role in the development and implementation of the system. The codebase followed the architecture style of micro-services and Agile methodology and levraged Node.js as the primary language, along with a variety of technologies including React.js, Docker, Kubernetes, Redux, AWS, Express, TypeScript, MongoDB, and Redis.',
    date: '2022-07-03',
    key: '2',
  },
]

export async function getAllArticles() {
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

const articles = [
  {
    title: 'Business Insider - Sarting A Career In Blockchain',
    description: "I got my start in crypto by a rather unconventional route and almost no work experience - now I'm a lead engineer. Here's why I think the downturn is one of the best times to land a job in Web3.",
    date: '2022-08-09',
    url: 'https://www.businessinsider.com/crypto-web3-how-to-get-a-job-with-no-experience-2022-9',
    key: '1'
  },
  {
    title: 'Introducing Gelato Relay: A Fast & Reliable Multichain Transaction API',
    description: 'Gelato Relay is a new service built on top of the Gelato Network, which helps web3 application and infrastructure developers to use a simple API in order to get arbitrary transactions mined fast, cost-effectively and reliably on behalf of their users or protocol.',
    date: '2022-06-03',
    url: 'https://medium.com/gelato-network/introducing-gelato-relay-a-fast-reliable-multichain-transaction-api-5e85e86b45c8',
    key: '2'
  },
  {
    title: 'Gelato Automate Logs',
    description: 'Gelato Automate is an app for you to create and manage automation tasks for your smart contracts.',
    date: '2022-05-16',
    url: 'https://medium.com/gelato-network/gelato-automate-logs-1fb3b1a85ec6',
    key: '3'
  },
  {
    title: 'Contextualizing Information With Data Visualization',
    description: 'The ability to bring context to a dataset is critical, but even more so is the ability to represent that context in the most accurate and most effective way possible.',
    date: '2021-07-13',
    url: 'https://wewritecode.com/contextualizing-information-with-data-visualization/',
    key: '4'
  },
  {
    title: '$42,000/yr Passive Income with Helium Hotspot',
    description: 'Recently, I got my hands on a Helium hotspot, and I wanted to see what this thing does and if it’s actually a viable source of passive income. Helium is a blockchain project that uses hotspots to create a peer-to-peer wireless network where IoT devices can send data to and from the internet.',
    date: '2021-05-06',
    url: 'https://medium.com/@guavatech/3-200-yr-passive-income-with-helium-hotspot-e300bb11832b',
    key: '5'
  }
]

export async function getAllArticles() {
  // let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
  //   cwd: path.join(process.cwd(), 'src/pages/articles'),
  // })

  // let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

/*
 If you're edditing this file and want to use the value in the code then you have to import it in site metadata hook

 ./src/hooks/useSiteMetadata.js
 */

module.exports = {
  title: 'MedVision',
  description: 'democratizing AI in medicine',
  author: 'Medvision.io',
  image: '/medvision.png',
  siteUrl: 'https://medvision.io',
  copyright: 'MedVision © All rights reserved.',
  postsPerPage: 6,
  googleAnalyticsId: '',
  twitter: 'https://twitter.com/medvision_io',
  github: 'https://github.com/medvision-io',
  linkedin: 'https://www.linkedin.com/company/79372805/',
  facebook: 'https://www.facebook.com/Medvisionio-100510102291328',
  instagram: '',
  rss: '/rss.xml',
  blogPage: {
    title: 'Blog',
    subTitle: '',
  },
  productsPage: {
    title: 'Our products',
    subTitle: '',
  },
  contactPage: {
    title: 'Get in touch',
    subTitle: '',
  },
  home: {
    title: 'MedVision',
    subTitle: 'Democratization of AI for medical imagining',
    productsTitle:
      'Support your diagnosis with machine learning solutions for medical imaging.',
    productsDesc:
      'Use one of the models provided by our partners. Verify that your decision is consistent with the predictions of the machine learning model. Use a visualization tool to understand the reasoning behind the model.',
    perks: [
      {
        title: 'Built For Speed',
        description:
          'By using GatsbyJS, the Barcadia site is super-fast out of the box',
        image: '/logos/gatsby-logo.svg',
      },
      {
        title: 'Built For Content',
        description:
          'Contentful helps you edit your application with ease as your business expands',
        image: '/logos/gatsby-logo.svg',
      },
      {
        title: 'Built For Security',
        description:
          'A static site reduces your chance of a security exposure through injection',
        image: '/logos/gatsby-logo.svg',
      },
    ],
  },
};

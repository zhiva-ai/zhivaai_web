/*
 If you're edditing this file and want to use the value in the code then you have to import it in site metadata hook

 ./src/hooks/useSiteMetadata.js
 */

module.exports = {
  title: 'ZhivaAI',
  description: 'Powering AI for radiology',
  author: 'ZhivaAI',
  image: '/medvision.png',
  siteUrl: 'https://zhiva.org',
  copyright: 'ZhivaAI © All rights reserved.',
  postsPerPage: 6,
  GTag: 'G-S28PSG7HTG',
  twitter: 'https://twitter.com/zhiva_ai',
  github: 'https://github.com/zhiva-ai',
  linkedin: 'https://www.linkedin.com/company/zhiva-ai',
  facebook: 'https://www.facebook.com/Zhivaai-101835685680869',
  instagram: 'https://www.instagram.com/zhiva.ai',
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
  mediaPage: {
    title: 'For Media',
    subTitle: '',
  },
  partners: [
    {
      title: 'Smarter Diagnostics',
      subtitle: 'Smarter Achilles MRI',
      descriptions:
        ['The world’s first pilot Achilles tendon screening study organized jointly by Smarter Diagnostics and Gamma Medical Center!', '"Our mission is to improve injury prevention and the recovery after sports traumas by providing state-of-the-art AI solutions for data analysis."'],
      avatar: '/avatars/smd/smd_logo.png',
      image: '/avatars/smd/smd_img.jpg',
      social: {
        demo: 'https://demo.smarterdiagnostics.com/',
        www: 'https://www.smarterdiagnostics.com/',
        linkedin: 'https://www.linkedin.com/company/smarter-diagnostics/',
        email: 'info@smarterdiagnostics.com',
        facebook: '',
        github: '',
        instagram: '',
        medium: '',
        snapchat: '',
        skype: '',
        twitch: '',
        twitter: '',
        whatsapp: '',
        youtube: '',
      }
    },
    {
      title: 'Cancer Center',
      descriptions:
        ['AI platform for radiology and pathology diagnostics, focused on prostate imaging.', '"We strive to provide physicians around the world with state-of-the-art tools to support them in the process of detecting and classifying malignancies. Our AI is trained using multiple modalities, providing comprehensive assistance in the cancer diagnosis process."'],
      avatar: '/avatars/cc/cc_logo.png',
      image: '/avatars/cc/cc_img.jpg',
      social: {
        demo: 'https://pathoplatform.cancercenter.eu/',
        www: 'https://cancercenter.ai/',
        linkedin: '',
        email: 'info@cancercenter.ai',
        facebook: '',
        github: '',
        instagram: '',
        medium: '',
        snapchat: '',
        skype: '',
        twitch: '',
        twitter: 'https://twitter.com/CancerCenterAi',
        whatsapp: '',
        youtube: 'https://www.youtube.com/channel/UCg15E1Oj9ugJ-ifuVcL4mjA',
      }
    },
  ],
  team: [
    {
      name: 'Piotr Mazurek',
      title: 'Chief Executive Officer',
      image: '/team/piotr.jpg',
      email: 'piotr.mazurek@zhiva.org',
      facebook: '',
      github: 'https://github.com/tugot17',
      instagram: '',
      linkedin: 'https://www.linkedin.com/in/piotr-mazurek-155032164/',
      medium: '',
      snapchat: '',
      skype: '',
      twitch: '',
      twitter: '',
      whatsapp: '',
      www: 'https://tugot17.github.io/data-science-blog/',
      youtube: '',
    },
    {
      name: 'Kemal Erdem',
      title: 'Chief Technology Officer',
      image: '/team/kemal.jpg',
      email: 'kemal.erdem@zhiva.org',
      facebook: '',
      github: 'https://github.com/burnpiro',
      instagram: '',
      linkedin: 'https://www.linkedin.com/in/kemal-erdem-74837580/',
      medium: '',
      snapchat: '',
      skype: '',
      twitch: '',
      twitter: 'https://twitter.com/burnpiro',
      whatsapp: '',
      www: 'https://erdem.pl',
      youtube: '',
    },
  ],
  home: {
    title: 'ZhivaAI',
    subTitle: 'Powering AI for radiology',
    productsTitle:
      'Software platform for fast and easy deployment of AI models for radiology. ',
    productsDesc:
      'Use our platform to integrate various AI solutions into your radiology workflow. Consolidate multiple AI models into one convenient tool. Provide radiologists with a tool that improves their productivity and reduces costs.',
    perks: [
      {
        title: 'AI model integration',
        description:
          'Our platform is a one-stop-shop for cutting-edge, clinically validated AI models for radiology. A wide range of products empowers doctors in various high-value clinical scenarios.',
        image: '/logos/ai.svg',
      },
      {
        title: 'A smooth experience',
        description:
          'Zhiva is available for deployment in-cloud and on-premise and comes with a zero-footprint DICOM viewer, which enables seamless integration into current workflows.',
        image: '/logos/cloud-data.svg',
      },
      {
        title: 'Share results with doctors or patients',
        description:
          'Sharing both images and AI results with other clinicians is as simple as a single click. You can send these results to your patients as well.',
        image: '/logos/share.svg',
      },
    ],
  },
};

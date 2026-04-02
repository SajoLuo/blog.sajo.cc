export const siteConfig = {
  title: 'HomoLab',
  seoTitle: 'Sajo的博客 | HomoLab Inc.',
  description: '幻想与垃圾的集中地.',
  keywords: 'HomoLab, Sajo的博客, Sajo, Homo, Apple, iPhone',
  author: 'Sajo',
  email: 'me@sajo.cc',
  url: 'https://blog.sajo.cc',

  headerImg: 'https://img.sajo.cc/title.png',

  sidebar: {
    aboutDescription: '不再年轻。',
    avatar: 'https://img.sajo.cc/avatar-by.jpg',
  },

  social: {
    rss: true,
    weibo: 'homolive',
    github: 'SajoLuo',
  },

  pagination: {
    pageSize: 10,
  },

  featuredTags: true,
  featuredTagMinCount: 0,

  friends: [
    { title: '显卡', href: 'https://xianka.luobotou.org/' },
    { title: 'Yk2eR0', href: 'https://www.yk2er0.fun/' },
    { title: '龙🐲', href: 'https://juejin.im/user/5cb0cd1d6fb9a0688a6804c2' },
    { title: '阵雨', href: 'https://zhengyua.cn' },
  ],
} as const;

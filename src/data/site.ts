// `import.meta.env.SITE` refleja el valor de `site` en astro.config.mjs,
// por lo que el dominio se cambia en un solo lugar (o con SITE_URL).
const siteUrl = import.meta.env.SITE ?? 'https://sabor-latino-web.vercel.app'

export const site = {
  name: 'Sabor Latino Villavicencio',
  url: siteUrl,
  phoneDisplay: '+57 311 651 7431',
  whatsapp: '573116517431',
  address: 'Calle 4 No 17-92 Vizcaya, Villavicencio',
  maps: 'https://maps.app.goo.gl/Y5D9pdoWR34punui7?g_st=ac',
  social: {
    instagram: 'https://www.instagram.com/saborlatino_villavicencio/',
    facebook: 'https://www.facebook.com/share/1Ds68EoaG3/',
    tiktok: 'https://www.tiktok.com/@saborlatino_villavo?_r=1&_t=ZS-96MTmFaV1sG',
  },
} as const

export const wa = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

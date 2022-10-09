export const Routes = {
  home: '/' ,
  homeWithAnchor: (anchor: string) => `/#${ anchor }`,
  clients: '/clients',
  techStack: '/tech-stack',
  webs: '/web',
  mobiles: '/mobile',
  design: (id: number) => `/design/${ id }`,
  designs: '/design',
  projects: '/project',
  digitalArtwork: (id: number) => `/digital-artwork/${ id }`,
  digitalArtworks: '/digital-artwork',
  contact: '/#contact-me',
}
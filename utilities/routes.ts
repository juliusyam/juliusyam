export const Routes = {
  home: '/' ,
  homeWithAnchor: (anchor: string) => `/#${ anchor }`,
  clients: '/clients',
  techStack: '/tech-stack',
  webs: '/web',
  mobiles: '/mobile',
  designs: '/design',
  experiments: '/experiment',
  digitalArtwork: (id: number) => `/digital-artwork/${ id }`,
  digitalArtworks: '/digital-artwork',
  contact: '/#contact-me',
}
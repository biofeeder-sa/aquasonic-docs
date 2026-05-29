import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const base = '/aquasonic-docs';

export default defineConfig({
  site: 'https://biofeeder-sa.github.io',
  base,

  integrations: [
    starlight({
      title: 'Aquasonic Docs',
      description: 'Documentación técnica del sistema Aquasonic — biofeeder-sa',

      favicon: '/favicon/favicon.ico',

      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${base}/favicon/favicon-32x32.png`,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${base}/favicon/favicon-16x16.png`,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${base}/favicon/apple-touch-icon.png`,
          },
        },
        {
          tag: 'link',
          attrs: { rel: 'manifest', href: `${base}/favicon/site.webmanifest` },
        },
      ],

      logo: {
        src: './src/assets/images/logo/aquasonic-logo.avif',
        alt: 'Aquasonic Docs',
        replacesTitle: true,
      },

      customCss: ['./src/styles/aquasonic.css'],

      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },

      social: [
        {
          icon: 'instagram',
          label: 'Instagram — @aquasonic.ec',
          href: 'https://www.instagram.com/aquasonic.ec/',
        },
        {
          icon: 'youtube',
          label: 'YouTube — biofeeder4674',
          href: 'https://www.youtube.com/@biofeeder4674',
        },
      ],

      editLink: {
        baseUrl: 'https://github.com/biofeeder-sa/aquasonic-docs/edit/main/',
      },

      lastUpdated: true,

      sidebar: [
        {
          label: 'Inicio',
          link: '/',
        },
        {
          label: 'Guías de Inicio Rápido',
          autogenerate: { directory: 'guias' },
        },
        {
          label: 'Componentes',
          collapsed: false,
          items: [
            {
              label: 'Dashboard de Camaroneras',
              items: [
                { label: 'Descripción general', link: '/componentes/dashboard-camaroneras/' },
                { label: 'Card', link: '/componentes/dashboard-camaroneras/card/' },
              ],
            },
            {
              label: 'Dashboard de Camaronera',
              items: [
                { label: 'Descripción general', link: '/componentes/dashboard-camaronera/' },
                { label: 'Tabla', link: '/componentes/dashboard-camaronera/tabla/' },
                { label: 'Mapa', link: '/componentes/dashboard-camaronera/mapa/' },
              ],
            },
            {
              label: 'Dashboard de Piscina',
              items: [
                { label: 'Descripción general', link: '/componentes/dashboard-piscina/' },
                { label: 'KPI', link: '/componentes/dashboard-piscina/kpi/' },
                { label: 'Gráfico Semanal', link: '/componentes/dashboard-piscina/grafico-semanal/' },
                { label: 'Zonas (Unidades Centrales)', link: '/componentes/dashboard-piscina/zonas/' },
                { label: 'Gráfico de Ciclo', link: '/componentes/dashboard-piscina/grafico-ciclo/' },
                {
                  label: 'Tabla de Ciclos',
                  items: [
                    { label: 'Descripción general', link: '/componentes/dashboard-piscina/tabla-ciclos/' },
                    { label: 'Semanal', link: '/componentes/dashboard-piscina/tabla-ciclos/semanal/' },
                    { label: 'Diario', link: '/componentes/dashboard-piscina/tabla-ciclos/diario/' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Changelog',
          link: '/changelog',
        },
      ],
    }),
  ],
});

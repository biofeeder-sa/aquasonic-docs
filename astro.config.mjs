import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://biofeeder-sa.github.io',
  base: '/aquasonic-docs',

  integrations: [
    starlight({
      title: 'Aquasonic Docs',
      description: 'Documentación técnica del sistema Aquasonic — biofeeder-sa',

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
          icon: 'github',
          label: 'GitHub — biofeeder-sa/aquasonic',
          href: 'https://github.com/biofeeder-sa/aquasonic',
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

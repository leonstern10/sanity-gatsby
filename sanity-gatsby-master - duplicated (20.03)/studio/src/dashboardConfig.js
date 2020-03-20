export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e73d47ac2458b17bd992e71',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-yfdo8jzc',
                  apiId: '7fd90e2e-0851-4c39-bc63-269d8f094c44'
                },
                {
                  buildHookId: '5e73d47abfdf89e43db1b16e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-vtqcim6p',
                  apiId: 'e8e33c55-69e6-43f2-9c6e-93be717bd05f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leonstern10/sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-web-vtqcim6p.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

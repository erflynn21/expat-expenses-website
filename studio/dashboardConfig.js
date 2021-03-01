export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '603c3df8d579f136c07c7278',
                  title: 'Sanity Studio',
                  name: 'expat-expenses-website-studio',
                  apiId: '7d9c22ca-9242-4c2e-8fee-1cdb4b2d0bd7'
                },
                {
                  buildHookId: '603c3df8d579f13cbc7c6f80',
                  title: 'Blog Website',
                  name: 'expat-expenses-website',
                  apiId: '67265f0e-32ed-477d-889d-5f0368681d7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erflynn21/expat-expenses-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://expat-expenses-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

module.exports = {
  flags: {
    DEV_SSR: false
  },
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {}
  },
  plugins: [
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-beauty',
      options: {
        sources: {
          local: true
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'ประตูบานเฟี้นมไม้ พร้อมติดตั้ง',
    name: 'FlexiiDoors',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}

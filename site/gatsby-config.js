module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        // trackingId: 'G-L78N927DYB'
        trackingId: '311270522'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {
        // Theme options goes here
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Code. Money. Travel.',
    name: 'Personal Blog',
    description: 'Talk about coding, investment, money management, and interesting place.',
    address: 'Bekasi, Jawa Barat',
    email: 'iqbalhamdani27@gmail.com',
    phone: '+62 821 4555 1404',
    siteUrl: "https://iqbalhamdani.id",

    referral: [
      {
        "label": "Bibit",
        "name": "iqbalhamdani",
        "url": "http://bit.ly/bibitreferral1"
      },
      {
        "label": "Pluang",
        "name": "MUHA147466",
        "url": "https://pluang.onelink.me/jTjO/referral"
      },
      {
        "label": "Ajaib",
        "name": "miqb508",
        "url": "https://referral.ajaib.co.id/TZDF"
      },
      {
        "label": "Gotrade",
        "name": "718216",
        "url": "https://heygo.trade/app"
      },
    ],

    //Site Social Media Links
    social: [
      {
        "name": "Github",
        "url": "https://github.com/miqbalhamdani"
      },
      {
        "name": "Linkedin",
        "url": "https://www.linkedin.com/in/iqbalhamdani/"
      },
      {
        "name": "Instagram",
        "url": "https://www.instagram.com/m.iqbal.hamdani/"
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/'
          },
          {
            name: 'About Us',
            slug: '/'
          },
          {
            name: 'Contact Us',
            slug: '/'
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

module.exports = {
  siteUrl: 'https://rohiniinvisiblegrills.com/',
  generateRobotsTxt: true,
  exclude: ['/404', '/500', '/_*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}

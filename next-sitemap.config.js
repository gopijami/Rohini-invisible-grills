module.exports = {
  siteUrl: 'https://rohini-invisible-grills.com',
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

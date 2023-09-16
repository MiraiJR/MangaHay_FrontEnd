export default function handler(req: any, res: any) {
  const robotsTxtContent = `
    User-agent: *
    Disallow: /private-directory/
    Disallow: /another-private-directory/
    Allow: /
    Sitemap: https://mangahay.top/sitemap.xml
  `;

  res.setHeader('Content-Type', 'text/plain');
  res.send(robotsTxtContent);
}

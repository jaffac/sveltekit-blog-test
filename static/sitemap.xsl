<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <style>
          body { font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { text-align: left; border-bottom: 2px solid #eee; padding: 10px; }
          td { border-bottom: 1px solid #eee; padding: 10px; }
          tr:hover { background: #f9f9f9; }
          a { color: #0070f3; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <p>This is an XML Sitemap, meant for consumption by search engines.</p>
        <table>
          <tr><th>URL</th><th>Last Modified</th><th>Priority</th></tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
              <td><xsl:value-of select="s:lastmod"/></td>
              <td><xsl:value-of select="s:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
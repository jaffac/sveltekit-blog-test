<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 2rem; background: #fff; color: #111; max-width: 800px; margin: 0 auto; line-height: 1.6; }
          .header { border-bottom: 2px solid #eee; margin-bottom: 2rem; padding-bottom: 1rem; }
          h1 { margin: 0; font-size: 1.75rem; }
          .description { color: #666; margin-top: 0.5rem; }
          .item { margin-bottom: 2.5rem; }
          .item h2 { margin: 0 0 0.5rem 0; font-size: 1.25rem; }
          .item a { color: #0070f3; text-decoration: none; font-weight: 600; }
          .item a:hover { text-decoration: underline; }
          .meta { font-size: 0.85rem; color: #888; margin-bottom: 0.5rem; }
          .info-box { background: #f4f4f4; padding: 1rem; border-radius: 8px; font-size: 0.9rem; margin-bottom: 2rem; border: 1px solid #ddd; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="description"><xsl:value-of select="/rss/channel/description"/></p>
        </div>

        <div class="info-box">
          <strong>What is this?</strong> This is an RSS feed. To subscribe, copy the URL from your browser's address bar into your news reader app (like Feedly, NetNewsWire, or Reeder).
        </div>

        <xsl:for-each select="/rss/channel/item">
          <div class="item">
            <div class="meta">
              Published on <xsl:value-of select="pubDate"/>
            </div>
            <h2>
              <a href="{link}"><xsl:value-of select="title"/></a>
            </h2>
            <p><xsl:value-of select="description"/></p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
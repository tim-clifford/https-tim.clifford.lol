import fs from 'fs';
import moment from 'moment';
import { getAllPosts, convertMarkdownToHtml } from './lib/blog.js';

async function getBlog() {
  const posts = getAllPosts([
    'title',
    'excerpt',
    'content',
    'createdAt',
    'updatedAt',
    'slug',
  ]);

  for (const post of posts) {
    post.content = await convertMarkdownToHtml(post.content || '');
    post.content = post.content
      .replaceAll('href="/', 'href="https://tim.clifford.lol/')
      .replaceAll('src="/', 'src="https://tim.clifford.lol/');
  }

  return posts;
}

function getPages() {
  const pages = ['blog', 'dracula'];
  return pages;
}

async function buildSitemap() {
  try {
    const posts = await getBlog();
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${getPages().map(page => {
      return `<url>
        <loc>https://tim.clifford.lol/${page}</loc>
        <lastmod>${moment().format('YYYY-MM-DD')}</lastmod>
      </url>`;
    }).join(' ')}
    ${posts.map(post => {
      return `<url>
        <loc>https://tim.clifford.lol/blog/${post.slug}</loc>
        <lastmod>${post.updatedAt}</lastmod>
      </url>`;
    }).join(' ')}
  </urlset>`;

    fs.writeFileSync('public/sitemap.xml', xml);
  }
  catch (e) {
    console.error(e);
  }
}

buildSitemap();

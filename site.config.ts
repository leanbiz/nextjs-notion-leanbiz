import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'LeanBiz-VN-a85a29ad62cb4d7fac270e9f7bde4eab',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'LeanBiz - Kinh doanh tinh gọn 4.0',
  domain: 'leanbiz.vn',
  author: 'leanbiz',

  // open graph metadata (optional)
  description: 'LeanBiz - Kinh doanh tinh gọn 4.0',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://nextjs-notion-leanbiz-e071rezlv-leanbiz.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Faebf7e2f-d3a5-4442-ac43-ce96d6eeedfc%252Fleanbiz-logo-square.png%3Ftable%3Dblock%26id%3Da85a29ad-62cb-4d7f-ac27-0e9f7bde4eab%26cache%3Dv2&w=3840&q=75',
  defaultPageCover: 'https://nextjs-notion-leanbiz-e071rezlv-leanbiz.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1557804506-669a67965ba0%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&w=3840&q=75',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'Projects',
  //     pageId: 'Tiktok-e83a9fe6018545f08214e027ca3a97ff'
  //   },
  //   {
  //     title: 'Tiktok',
  //     pageId: 'Tiktok-e83a9fe6018545f08214e027ca3a97ff'
  //   }
  // ]
})

import { IHTMLTag } from "vite-plugin-html-config"


export const APP_INFO = {
 name: "Devzery API Builder",
 shortDescription: "Helps build APIs",
 description:
   "Helps you create APIs, manage APIs, and test APIs. It is a fast, reliable, and secure API testing tool.",
 keywords:
   "API, API Builder, API Manager, API Tester, API Testing, API Development, API Design, API Documentation, API Mocking, API Monitoring, API Proxy, API Gateway, API Security, API Automation, API Integration, API Collaboration, API Lifecycle, API Lifecycle Management, API Lifecycle Automation, API Lifecycle Collaboration, API Lifecycle Integration, API Lifecycle Monitoring, API Lifecycle Security, API Lifecycle Documentation, API Lifecycle Mocking, API Lifecycle Testing, API Lifecycle Manager, API Lifecycle Builder, API Lifecycle Design, API Lifecycle Development, API Lifecycle Proxy, API Lifecycle Gateway, API Lifecycle Automation, API Lifecycle Integration, API Lifecycle Collaboration, API Lifecycle Monitoring, API Lifecycle Security, API Lifecycle Documentation, API Lifecycle Mocking, API Lifecycle Testing, API Lifecycle Manager, API Lifecycle Builder, API Lifecycle Design, API Lifecycle Development, API Lifecycle Proxy, API Lifecycle Gateway",
 app: {
   background: "#080808",
   lightThemeColor: "#ffffff",
   darkThemeColor: "#080808",
 },
 social: {
   twitter: "@hoppscotch_io",
 },
} as const


export const META_TAGS = (env: Record<string, string>): IHTMLTag[] => [
 {
   name: "keywords",
   content: APP_INFO.keywords,
 },
 {
   name: "X-UA-Compatible",
   content: "IE=edge, chrome=1",
 },
 {
   name: "name",
   content: `${APP_INFO.name} • ${APP_INFO.shortDescription}`,
 },
 {
   name: "description",
   content: APP_INFO.description,
 },
 {
   name: "image",
   content: `${env.VITE_BASE_URL}/banner.png`,
 },
 // Open Graph tags
 {
   name: "og:title",
   content: `${APP_INFO.name} • ${APP_INFO.shortDescription}`,
 },
 {
   name: "og:description",
   content: APP_INFO.description,
 },
 {
   name: "og:image",
   content: `${env.VITE_BASE_URL}/banner.png`,
 },
 // Twitter tags
 {
   name: "twitter:card",
   content: "summary_large_image",
 },
 {
   name: "twitter:site",
   content: APP_INFO.social.twitter,
 },
 {
   name: "twitter:creator",
   content: APP_INFO.social.twitter,
 },
 {
   name: "twitter:title",
   content: `${APP_INFO.name} • ${APP_INFO.shortDescription}`,
 },
 {
   name: "twitter:description",
   content: APP_INFO.description,
 },
 {
   name: "twitter:image",
   content: `${env.VITE_BASE_URL}/banner.png`,
 },
 // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
 {
   name: "application-name",
   content: APP_INFO.name,
 },
 // Windows phone tile icon
 {
   name: "msapplication-TileImage",
   content: `${env.VITE_BASE_URL}/icon.png`,
 },
 {
   name: "msapplication-TileColor",
   content: APP_INFO.app.background,
 },
 {
   name: "msapplication-tap-highlight",
   content: "no",
 },
 // iOS Safari
 {
   name: "apple-mobile-web-app-title",
   content: APP_INFO.name,
 },
 {
   name: "apple-mobile-web-app-capable",
   content: "yes",
 },
 {
   name: "apple-mobile-web-app-status-bar-style",
   content: "black-translucent",
 },
 // PWA
 {
   name: "theme-color",
   content: APP_INFO.app.darkThemeColor,
   media: "(prefers-color-scheme: dark)",
 },
 {
   name: "theme-color",
   content: APP_INFO.app.lightThemeColor,
   media: "(prefers-color-scheme: light)",
 },
 {
   name: "supported-color-schemes",
   content: "light dark",
 },
 {
   name: "mask-icon",
   content: "/icon.png",
   color: APP_INFO.app.background,
 },
]

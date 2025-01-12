// .vitepress/config.ts
import process from "node:process";
import { BiDirectionalLinks } from "file:///D:/Dev/Nolebase/node_modules/.pnpm/@nolebase+markdown-it-bi-directional-links@2.12.0_markdown-it@14.1.0/node_modules/@nolebase/markdown-it-bi-directional-links/dist/index.mjs";
import { UnlazyImages } from "file:///D:/Dev/Nolebase/node_modules/.pnpm/@nolebase+markdown-it-unlazy-img@2.12.0_@types+node@22.10.1_jiti@2.4.2_less@4.2.1_markdown-it_rf5ju7ec476krswxsoagamlg6a/node_modules/@nolebase/markdown-it-unlazy-img/dist/index.mjs";
import { InlineLinkPreviewElementTransform } from "file:///D:/Dev/Nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.12.0_@algolia+client-search@5.15.0_@types+no_5sxzcsego6z4kn4rcyonbishfq/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
import { transformHeadMeta } from "file:///D:/Dev/Nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-meta@2.12.0_@algolia+client-search@5.15.0_@types+node@22.10.1_less_gtcsdgdurnluv6iet4ty5hamlm/node_modules/@nolebase/vitepress-plugin-meta/dist/vitepress/index.mjs";
import { calculateSidebar } from "file:///D:/Dev/Nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-sidebar@2.12.0/node_modules/@nolebase/vitepress-plugin-sidebar/dist/index.mjs";
import MarkdownItFootnote from "file:///D:/Dev/Nolebase/node_modules/.pnpm/markdown-it-footnote@4.0.0/node_modules/markdown-it-footnote/index.mjs";
import MarkdownItMathjax3 from "file:///D:/Dev/Nolebase/node_modules/.pnpm/markdown-it-mathjax3@4.3.2/node_modules/markdown-it-mathjax3/index.js";
import { defineConfig } from "file:///D:/Dev/Nolebase/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.15.0_@types+node@22.10.1_less@4.2.1_markdown-it-math_ntaecqtxfd3yuchkb7y6viqjma/node_modules/vitepress/dist/node/index.js";

// scripts/utils.ts
var getAvatarUrlByGithubName = (name) => `https://github.com/${name}.png`;

// metadata/index.ts
var siteName = "VacuoleNote";
var siteDescription = "\u8BB0\u5F55\u56DE\u5FC6\uFF0C\u77E5\u8BC6\u548C\u7545\u60F3\u7684\u5730\u65B9";
var githubRepoLink = "https://github.com/VacuolePaoo/nolebase";
var discordLink = "https://disboard.org/笔记/server/1273078781241987134";
var plainTargetDomain = "note.vacuole.top";
var targetDomain = `https://${plainTargetDomain}`;
var creators = [
  {
    name: "\u7D62\u9999\u732B",
    avatar: "",
    username: "nekomeowww",
    title: "N\xF3l\xEBbase \u539F\u59CB\u521B\u4F5C\u8005",
    desc: "\u5F00\u53D1\u8005\uFF0C\u4E13\u6CE8\u4E8E\u57FA\u7840\u8BBE\u65BD\u7EF4\u62A4\uFF0C\u6570\u636E\u5206\u6790\uFF0C\u540E\u7AEF\u3001DevOps \u5F00\u53D1",
    links: [
      { type: "github", icon: "github", link: "https://github.com/nekomeowww" },
      { type: "twitter", icon: "x", link: "https://twitter.com/ayakaneko" }
    ],
    nameAliases: ["nekomeowww", "\u7EDA\u9999\u732B", "\u7D62\u9999\u732B", "Neko Ayaka", "Ayaka Neko"],
    emailAliases: ["neko@ayaka.moe"]
  },
  {
    name: "\u7D62\u9999\u97F3",
    avatar: "",
    username: "LittleSound",
    title: "N\xF3l\xEBbase \u539F\u59CB\u521B\u4F5C\u8005",
    desc: "\u5F00\u6E90\u5F00\u53D1\u8005\uFF0C\u4E13\u6CE8\u4E8E\u524D\u7AEF\uFF0C\u4EE5\u53CA\u524D\u7AEF\u76F8\u5173\u5DE5\u5177\u5E93\u548C\u5DE5\u5177\u94FE\u5F00\u53D1",
    links: [
      { type: "github", icon: "github", link: "https://github.com/LittleSound" },
      { type: "twitter", icon: "x", link: "https://twitter.com/OikawaRizumu" }
    ],
    nameAliases: ["LittleSound", "\u7EDA\u9999\u97F3", "\u7D62\u9999\u97F3", "Rizumu Oikawa", "Rizumu Ayaka", "Ayaka Rizumu", "Rizumu"],
    emailAliases: ["rizumu@ayaka.moe", "rizumu@oqo.moe"]
  },
  {
    name: "VacuolePao",
    avatar: "",
    username: "VacuolePaoo",
    title: "VacuoleNote \u5199\u4F5C",
    desc: "\u5728\u804C\u9AD8\u4E2D\u751F\uFF0C\u4E1A\u4F59\u524D\u7AEF\u5F00\u53D1\u8005\uFF0C\u521B\u4F5CVacuoleNote\u6587\u7AE0\u5185\u5BB9",
    links: [
      { type: "github", icon: "github", link: "https://github.com/VacuolePaoo" },
      { type: "bilibili", icon: "bilibili", link: "https://space.bilibili.com/518590350" }
    ],
    nameAliases: ["LittleSound", "\u7EDA\u9999\u97F3", "\u7D62\u9999\u97F3", "Rizumu Oikawa", "Rizumu Ayaka", "Ayaka Rizumu", "Rizumu"],
    emailAliases: ["rizumu@ayaka.moe", "rizumu@oqo.moe"]
  }
].map((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username);
  return c;
});
var creatorNames = creators.map((c) => c.name);
var creatorUsernames = creators.map((c) => c.username || "");

// .vitepress/head.ts
var head_default = [
  ["meta", {
    name: "theme-color",
    content: "#ffffff"
  }],
  [
    "link",
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    }
  ],
  [
    "link",
    {
      rel: "icon",
      href: "/logo.svg",
      type: "image/svg+xml"
    }
  ],
  [
    "link",
    {
      rel: "alternate icon",
      href: "/favicon.ico",
      type: "image/png",
      sizes: "16x16"
    }
  ],
  ["meta", {
    name: "author",
    content: creatorNames.join(", ")
  }],
  [
    "meta",
    {
      name: "keywords",
      content: ["markdown", "knowledge-base", "\u77E5\u8BC6\u5E93", "vitepress", "obsidian", "notebook", "notes", ...creatorUsernames].join(", ")
    }
  ],
  ["meta", {
    property: "og:title",
    content: siteName
  }],
  [
    "meta",
    {
      property: "og:image",
      content: `${targetDomain}/og.png`
    }
  ],
  ["meta", {
    property: "og:description",
    content: siteDescription
  }],
  ["meta", {
    property: "og:site_name",
    content: siteName
  }],
  ["meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }],
  ["meta", {
    name: "twitter:creator",
    content: creatorUsernames.join(", ")
  }],
  [
    "meta",
    {
      name: "twitter:image",
      content: `${targetDomain}/og.png`
    }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#927baf"
    }
  ],
  ["link", {
    rel: "manifest",
    href: "/site.webmanifest"
  }],
  ["meta", {
    name: "msapplication-TileColor",
    content: "#603cba"
  }],
  // Proxying Plausible through Netlify | Plausible docs
  // https://plausible.io/docs/proxy/guides/netlify
  ["script", { "defer": "true", "data-domain": "nolebase.ayaka.io", "data-api": "/api/v1/page-external-data/submit", "src": "/assets/page-external-data/js/script.js" }]
];

// .vitepress/config.ts
var config_default = defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ["src", "poster"],
        source: ["src"],
        img: ["src"],
        image: ["xlink:href", "href"],
        use: ["xlink:href", "href"],
        NolebaseUnlazyImg: ["src"]
      }
    }
  },
  title: siteName,
  description: siteDescription,
  ignoreDeadLinks: true,
  head: head_default,
  locales: {
    root: {
      lang: "/笔记",
      label: "\u4E2D\u6587",
      dir: "/笔记",
      link: "/笔记",
      themeConfig: {
        nav: [
          { text: "\u4E3B\u9875", link: "/笔记/" },
          { text: "\u7B14\u8BB0", link: "//\u7B14\u8BB0/" },
          // { text: '编目 Catalog', link: '/笔记/编目 Catalog/' },
          { text: "\u6700\u8FD1\u66F4\u65B0", link: "/笔记/toc" }
        ],
        socialLinks: [
          { icon: "github", link: githubRepoLink },
          { icon: "discord", link: discordLink }
        ],
        darkModeSwitchLabel: "\u5207\u6362\u4E3B\u9898",
        outline: { label: "\u9875\u9762\u5927\u7EB2", level: "deep" },
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: "\u7F16\u8F91\u672C\u9875\u9762"
        },
        sidebar: calculateSidebar([
          { folderName: "/\u7B14\u8BB0", separate: true },
          { folderName: "/笔记/\u7F16\u76EE Catalog", separate: true }
        ], "/笔记"),
        footer: {
          message: '<b>VacuolePao</b> \u7528 <span style="color: #e25555;">&#9829;</span> \u64B0\u5199',
          copyright: '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> \xA9 2022-PRESENT N\xF3l\xEBbase \u7684\u521B\u4F5C\u8005\u4EEC'
        },
        search: {
          provider: "local",
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: "\u641C\u7D22\u6587\u6863",
                    buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
                  },
                  modal: {
                    noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                    resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                    footer: {
                      selectText: "\u9009\u62E9",
                      navigateText: "\u5207\u6362"
                    }
                  }
                }
              }
            },
            // Add title ang tags field in frontmatter to search
            // You can exclude a page from search by adding search: false to the page's frontmatter.
            _render(src, env, md) {
              let html = md.render(src, env);
              let tagsPart = "";
              let headingPart = "";
              let contentPart = "";
              let fullContent = "";
              const sortContent = () => [headingPart, tagsPart, contentPart];
              let { frontmatter, content } = env;
              if (!frontmatter)
                return html;
              if (frontmatter.search === false)
                return "";
              contentPart = content ||= src;
              const headingMatch = content.match(/^# .*/m);
              const hasHeading = !!(headingMatch && headingMatch[0] && headingMatch.index !== void 0);
              if (hasHeading) {
                const headingEnd = headingMatch.index + headingMatch[0].length;
                headingPart = content.slice(0, headingEnd);
                contentPart = content.slice(headingEnd);
              } else if (frontmatter.title) {
                headingPart = `# ${frontmatter.title}`;
              }
              const tags = frontmatter.tags;
              if (tags && Array.isArray(tags) && tags.length)
                tagsPart = `Tags: #${tags.join(", #")}`;
              fullContent = sortContent().filter(Boolean).join("\n\n");
              html = md.render(fullContent, env);
              return html;
            }
          }
        }
      }
    }
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "one-dark-pro"
    },
    math: true,
    config: (md) => {
      md.use(MarkdownItFootnote);
      md.use(MarkdownItMathjax3);
      md.use(BiDirectionalLinks({
        dir: process.cwd()
      }));
      md.use(UnlazyImages(), {
        imgElementTag: "NolebaseUnlazyImg"
      });
      md.use(InlineLinkPreviewElementTransform);
    }
  },
  async transformHead(context) {
    let head = [...context.head];
    const returnedHead = await transformHeadMeta()(head, context);
    if (typeof returnedHead !== "undefined")
      head = returnedHead;
    return head;
  }
  // async buildEnd(siteConfig) {
  //   await buildEndGenerateOpenGraphImages({
  //     baseUrl: targetDomain,
  //     category: {
  //       byLevel: 2,
  //     },
  //   })(siteConfig)
  // },
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAic2NyaXB0cy91dGlscy50cyIsICJtZXRhZGF0YS9pbmRleC50cyIsICIudml0ZXByZXNzL2hlYWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXZcXFxcTm9sZWJhc2VcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGV2XFxcXE5vbGViYXNlXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXYvTm9sZWJhc2UvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXHJcbmltcG9ydCB7IEJpRGlyZWN0aW9uYWxMaW5rcyB9IGZyb20gJ0Bub2xlYmFzZS9tYXJrZG93bi1pdC1iaS1kaXJlY3Rpb25hbC1saW5rcydcclxuaW1wb3J0IHsgVW5sYXp5SW1hZ2VzIH0gZnJvbSAnQG5vbGViYXNlL21hcmtkb3duLWl0LXVubGF6eS1pbWcnXHJcbmltcG9ydCB7IElubGluZUxpbmtQcmV2aWV3RWxlbWVudFRyYW5zZm9ybSB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWlubGluZS1saW5rLXByZXZpZXcvbWFya2Rvd24taXQnXHJcblxyXG5pbXBvcnQgeyB0cmFuc2Zvcm1IZWFkTWV0YSB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLW1ldGEnXHJcbmltcG9ydCB7IGNhbGN1bGF0ZVNpZGViYXIgfSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1zaWRlYmFyJ1xyXG4vLyBpbXBvcnQgeyBidWlsZEVuZEdlbmVyYXRlT3BlbkdyYXBoSW1hZ2VzIH0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4tb2ctaW1hZ2Uvdml0ZXByZXNzJ1xyXG5pbXBvcnQgTWFya2Rvd25JdEZvb3Rub3RlIGZyb20gJ21hcmtkb3duLWl0LWZvb3Rub3RlJ1xyXG5pbXBvcnQgTWFya2Rvd25JdE1hdGhqYXgzIGZyb20gJ21hcmtkb3duLWl0LW1hdGhqYXgzJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG5pbXBvcnQgeyBkaXNjb3JkTGluaywgZ2l0aHViUmVwb0xpbmssIHNpdGVEZXNjcmlwdGlvbiwgc2l0ZU5hbWUgfSBmcm9tICcuLi9tZXRhZGF0YSdcclxuaW1wb3J0IGhlYWQgZnJvbSAnLi9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICB2dWU6IHtcclxuICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczoge1xyXG4gICAgICAgIHZpZGVvOiBbJ3NyYycsICdwb3N0ZXInXSxcclxuICAgICAgICBzb3VyY2U6IFsnc3JjJ10sXHJcbiAgICAgICAgaW1nOiBbJ3NyYyddLFxyXG4gICAgICAgIGltYWdlOiBbJ3hsaW5rOmhyZWYnLCAnaHJlZiddLFxyXG4gICAgICAgIHVzZTogWyd4bGluazpocmVmJywgJ2hyZWYnXSxcclxuICAgICAgICBOb2xlYmFzZVVubGF6eUltZzogWydzcmMnXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZTogc2l0ZU5hbWUsXHJcbiAgZGVzY3JpcHRpb246IHNpdGVEZXNjcmlwdGlvbixcclxuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXHJcbiAgaGVhZCxcclxuICBsb2NhbGVzOiB7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGxhbmc6ICd6aC1DTicsXHJcbiAgICAgIGxhYmVsOiAnXHU0RTJEXHU2NTg3JyxcclxuICAgICAgZGlyOiAnL3poLUNOJyxcclxuICAgICAgbGluazogJy96aC1DTicsXHJcbiAgICAgIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAgICAgbmF2OiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTRFM0JcdTk4NzUnLCBsaW5rOiAnL3poLUNOLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1N0IxNFx1OEJCMCcsIGxpbms6ICcvL1x1N0IxNFx1OEJCMC8nIH0sXHJcbiAgICAgICAgICAvLyB7IHRleHQ6ICdcdTdGMTZcdTc2RUUgQ2F0YWxvZycsIGxpbms6ICcvemgtQ04vXHU3RjE2XHU3NkVFIENhdGFsb2cvJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwJywgbGluazogJy96aC1DTi90b2MnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogZ2l0aHViUmVwb0xpbmsgfSxcclxuICAgICAgICAgIHsgaWNvbjogJ2Rpc2NvcmQnLCBsaW5rOiBkaXNjb3JkTGluayB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NTIwN1x1NjM2Mlx1NEUzQlx1OTg5OCcsXHJcbiAgICAgICAgb3V0bGluZTogeyBsYWJlbDogJ1x1OTg3NVx1OTc2Mlx1NTkyN1x1N0VCMicsIGxldmVsOiAnZGVlcCcgfSxcclxuICAgICAgICBlZGl0TGluazoge1xyXG4gICAgICAgICAgcGF0dGVybjogYCR7Z2l0aHViUmVwb0xpbmt9L3RyZWUvbWFpbi86cGF0aGAsXHJcbiAgICAgICAgICB0ZXh0OiAnXHU3RjE2XHU4RjkxXHU2NzJDXHU5ODc1XHU5NzYyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpZGViYXI6IGNhbGN1bGF0ZVNpZGViYXIoW1xyXG4gICAgICAgICAgeyBmb2xkZXJOYW1lOiAnL1x1N0IxNFx1OEJCMCcsIHNlcGFyYXRlOiB0cnVlIH0sXHJcbiAgICAgICAgICB7IGZvbGRlck5hbWU6ICd6aC1DTi9cdTdGMTZcdTc2RUUgQ2F0YWxvZycsIHNlcGFyYXRlOiB0cnVlIH0sXHJcbiAgICAgICAgXSwgJ3poLUNOJyksXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnPGI+VmFjdW9sZVBhbzwvYj4gXHU3NTI4IDxzcGFuIHN0eWxlPVwiY29sb3I6ICNlMjU1NTU7XCI+JiM5ODI5Ozwvc3Bhbj4gXHU2NEIwXHU1MTk5JyxcclxuICAgICAgICAgIGNvcHlyaWdodDpcclxuICAgICAgICAnPGEgY2xhc3M9XCJmb290ZXItY2MtbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvNC4wL1wiPkNDIEJZLVNBIDQuMDwvYT4gXHUwMEE5IDIwMjItUFJFU0VOVCBOXHUwMEYzbFx1MDBFQmJhc2UgXHU3Njg0XHU1MjFCXHU0RjVDXHU4MDA1XHU0RUVDJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcclxuICAgICAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHRpdGxlIGFuZyB0YWdzIGZpZWxkIGluIGZyb250bWF0dGVyIHRvIHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIGV4Y2x1ZGUgYSBwYWdlIGZyb20gc2VhcmNoIGJ5IGFkZGluZyBzZWFyY2g6IGZhbHNlIHRvIHRoZSBwYWdlJ3MgZnJvbnRtYXR0ZXIuXHJcbiAgICAgICAgICAgIF9yZW5kZXIoc3JjLCBlbnYsIG1kKSB7XHJcbiAgICAgICAgICAgICAgLy8gd2l0aG91dCBgbWQucmVuZGVyKHNyYywgZW52KWAsIHRoZSBzb21lIGluZm9ybWF0aW9uIHdpbGwgYmUgbWlzc2luZyBmcm9tIHRoZSBlbnYuXHJcbiAgICAgICAgICAgICAgbGV0IGh0bWwgPSBtZC5yZW5kZXIoc3JjLCBlbnYpXHJcbiAgICAgICAgICAgICAgbGV0IHRhZ3NQYXJ0ID0gJydcclxuICAgICAgICAgICAgICBsZXQgaGVhZGluZ1BhcnQgPSAnJ1xyXG4gICAgICAgICAgICAgIGxldCBjb250ZW50UGFydCA9ICcnXHJcbiAgICAgICAgICAgICAgbGV0IGZ1bGxDb250ZW50ID0gJydcclxuICAgICAgICAgICAgICBjb25zdCBzb3J0Q29udGVudCA9ICgpID0+IFtoZWFkaW5nUGFydCwgdGFnc1BhcnQsIGNvbnRlbnRQYXJ0XSBhcyBjb25zdFxyXG4gICAgICAgICAgICAgIGxldCB7IGZyb250bWF0dGVyLCBjb250ZW50IH0gPSBlbnZcclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFmcm9udG1hdHRlcilcclxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sXHJcblxyXG4gICAgICAgICAgICAgIGlmIChmcm9udG1hdHRlci5zZWFyY2ggPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnXHJcblxyXG4gICAgICAgICAgICAgIGNvbnRlbnRQYXJ0ID0gY29udGVudCB8fD0gc3JjXHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGhlYWRpbmdNYXRjaCA9IGNvbnRlbnQubWF0Y2goL14jIC4qL20pXHJcbiAgICAgICAgICAgICAgY29uc3QgaGFzSGVhZGluZyA9ICEhKGhlYWRpbmdNYXRjaCAmJiBoZWFkaW5nTWF0Y2hbMF0gJiYgaGVhZGluZ01hdGNoLmluZGV4ICE9PSB1bmRlZmluZWQpXHJcblxyXG4gICAgICAgICAgICAgIGlmIChoYXNIZWFkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkaW5nRW5kID0gaGVhZGluZ01hdGNoLmluZGV4ISArIGhlYWRpbmdNYXRjaFswXS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIGhlYWRpbmdQYXJ0ID0gY29udGVudC5zbGljZSgwLCBoZWFkaW5nRW5kKVxyXG4gICAgICAgICAgICAgICAgY29udGVudFBhcnQgPSBjb250ZW50LnNsaWNlKGhlYWRpbmdFbmQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKGZyb250bWF0dGVyLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nUGFydCA9IGAjICR7ZnJvbnRtYXR0ZXIudGl0bGV9YFxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgdGFncyA9IGZyb250bWF0dGVyLnRhZ3NcclxuICAgICAgICAgICAgICBpZiAodGFncyAmJiBBcnJheS5pc0FycmF5KHRhZ3MpICYmIHRhZ3MubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGFnc1BhcnQgPSBgVGFnczogIyR7dGFncy5qb2luKCcsICMnKX1gXHJcblxyXG4gICAgICAgICAgICAgIGZ1bGxDb250ZW50ID0gc29ydENvbnRlbnQoKS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuXFxuJylcclxuXHJcbiAgICAgICAgICAgICAgaHRtbCA9IG1kLnJlbmRlcihmdWxsQ29udGVudCwgZW52KVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gaHRtbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICB0aGVtZToge1xyXG4gICAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXHJcbiAgICAgIGRhcms6ICdvbmUtZGFyay1wcm8nLFxyXG4gICAgfSxcclxuICAgIG1hdGg6IHRydWUsXHJcbiAgICBjb25maWc6IChtZCkgPT4ge1xyXG4gICAgICBtZC51c2UoTWFya2Rvd25JdEZvb3Rub3RlKVxyXG4gICAgICBtZC51c2UoTWFya2Rvd25JdE1hdGhqYXgzKVxyXG4gICAgICBtZC51c2UoQmlEaXJlY3Rpb25hbExpbmtzKHtcclxuICAgICAgICBkaXI6IHByb2Nlc3MuY3dkKCksXHJcbiAgICAgIH0pKVxyXG4gICAgICBtZC51c2UoVW5sYXp5SW1hZ2VzKCksIHtcclxuICAgICAgICBpbWdFbGVtZW50VGFnOiAnTm9sZWJhc2VVbmxhenlJbWcnLFxyXG4gICAgICB9KVxyXG4gICAgICBtZC51c2UoSW5saW5lTGlua1ByZXZpZXdFbGVtZW50VHJhbnNmb3JtKVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFzeW5jIHRyYW5zZm9ybUhlYWQoY29udGV4dCkge1xyXG4gICAgbGV0IGhlYWQgPSBbLi4uY29udGV4dC5oZWFkXVxyXG5cclxuICAgIGNvbnN0IHJldHVybmVkSGVhZCA9IGF3YWl0IHRyYW5zZm9ybUhlYWRNZXRhKCkoaGVhZCwgY29udGV4dClcclxuICAgIGlmICh0eXBlb2YgcmV0dXJuZWRIZWFkICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgaGVhZCA9IHJldHVybmVkSGVhZFxyXG5cclxuICAgIHJldHVybiBoZWFkXHJcbiAgfSxcclxuICAvLyBhc3luYyBidWlsZEVuZChzaXRlQ29uZmlnKSB7XHJcbiAgLy8gICBhd2FpdCBidWlsZEVuZEdlbmVyYXRlT3BlbkdyYXBoSW1hZ2VzKHtcclxuICAvLyAgICAgYmFzZVVybDogdGFyZ2V0RG9tYWluLFxyXG4gIC8vICAgICBjYXRlZ29yeToge1xyXG4gIC8vICAgICAgIGJ5TGV2ZWw6IDIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KShzaXRlQ29uZmlnKVxyXG4gIC8vIH0sXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcRGV2XFxcXE5vbGViYXNlXFxcXHNjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERldlxcXFxOb2xlYmFzZVxcXFxzY3JpcHRzXFxcXHV0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXYvTm9sZWJhc2Uvc2NyaXB0cy91dGlscy50c1wiO2V4cG9ydCBjb25zdCBnZXRBdmF0YXJVcmxCeUdpdGh1Yk5hbWUgPSAobmFtZTogc3RyaW5nKSA9PiBgaHR0cHM6Ly9naXRodWIuY29tLyR7bmFtZX0ucG5nYFxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXERldlxcXFxOb2xlYmFzZVxcXFxtZXRhZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGV2XFxcXE5vbGViYXNlXFxcXG1ldGFkYXRhXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXYvTm9sZWJhc2UvbWV0YWRhdGEvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IENyZWF0b3IgfSBmcm9tICcuLi9zY3JpcHRzL3R5cGVzL21ldGFkYXRhJ1xyXG5pbXBvcnQgeyBnZXRBdmF0YXJVcmxCeUdpdGh1Yk5hbWUgfSBmcm9tICcuLi9zY3JpcHRzL3V0aWxzJ1xyXG5cclxuLyoqIFx1NjU4N1x1NjcyQyAqL1xyXG5leHBvcnQgY29uc3Qgc2l0ZU5hbWUgPSAnVmFjdW9sZU5vdGUnXHJcbmV4cG9ydCBjb25zdCBzaXRlU2hvcnROYW1lID0gJ1Zub3RlJ1xyXG5leHBvcnQgY29uc3Qgc2l0ZURlc2NyaXB0aW9uID0gJ1x1OEJCMFx1NUY1NVx1NTZERVx1NUZDNlx1RkYwQ1x1NzdFNVx1OEJDNlx1NTQ4Q1x1NzU0NVx1NjBGM1x1NzY4NFx1NTczMFx1NjVCOSdcclxuXHJcbi8qKiBcdTY1ODdcdTY4NjNcdTYyNDBcdTU3MjhcdTc2RUVcdTVGNTUgKi9cclxuZXhwb3J0IGNvbnN0IGluY2x1ZGUgPSBbJ1x1N0IxNFx1OEJCMCcsICdcdTc1MUZcdTZEM0InXVxyXG5cclxuLyoqIFJlcG8gKi9cclxuZXhwb3J0IGNvbnN0IGdpdGh1YlJlcG9MaW5rID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9WYWN1b2xlUGFvby9ub2xlYmFzZSdcclxuLyoqIERpc2NvcmQgKi9cclxuZXhwb3J0IGNvbnN0IGRpc2NvcmRMaW5rID0gJ2h0dHBzOi8vZGlzYm9hcmQub3JnL3poLWNuL3NlcnZlci8xMjczMDc4NzgxMjQxOTg3MTM0J1xyXG5cclxuLyoqIFx1NjVFMFx1NTM0Rlx1OEJBRVx1NTI0RFx1N0YwMFx1NTdERlx1NTQwRCAqL1xyXG5leHBvcnQgY29uc3QgcGxhaW5UYXJnZXREb21haW4gPSAnbm90ZS52YWN1b2xlLnRvcCdcclxuLyoqIFx1NUI4Q1x1NjU3NFx1NTdERlx1NTQwRCAqL1xyXG5leHBvcnQgY29uc3QgdGFyZ2V0RG9tYWluID0gYGh0dHBzOi8vJHtwbGFpblRhcmdldERvbWFpbn1gXHJcblxyXG4vKiogXHU1MjFCXHU0RjVDXHU4MDA1ICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdG9yczogQ3JlYXRvcltdID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdcdTdENjJcdTk5OTlcdTczMkInLFxyXG4gICAgYXZhdGFyOiAnJyxcclxuICAgIHVzZXJuYW1lOiAnbmVrb21lb3d3dycsXHJcbiAgICB0aXRsZTogJ05cdTAwRjNsXHUwMEVCYmFzZSBcdTUzOUZcdTU5Q0JcdTUyMUJcdTRGNUNcdTgwMDUnLFxyXG4gICAgZGVzYzogJ1x1NUYwMFx1NTNEMVx1ODAwNVx1RkYwQ1x1NEUxM1x1NkNFOFx1NEU4RVx1NTdGQVx1Nzg0MFx1OEJCRVx1NjVCRFx1N0VGNFx1NjJBNFx1RkYwQ1x1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFx1RkYwQ1x1NTQwRVx1N0FFRlx1MzAwMURldk9wcyBcdTVGMDBcdTUzRDEnLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgeyB0eXBlOiAnZ2l0aHViJywgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbmVrb21lb3d3dycgfSxcclxuICAgICAgeyB0eXBlOiAndHdpdHRlcicsIGljb246ICd4JywgbGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20vYXlha2FuZWtvJyB9LFxyXG4gICAgXSxcclxuICAgIG5hbWVBbGlhc2VzOiBbJ25la29tZW93d3cnLCAnXHU3RURBXHU5OTk5XHU3MzJCJywgJ1x1N0Q2Mlx1OTk5OVx1NzMyQicsICdOZWtvIEF5YWthJywgJ0F5YWthIE5la28nXSxcclxuICAgIGVtYWlsQWxpYXNlczogWyduZWtvQGF5YWthLm1vZSddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1x1N0Q2Mlx1OTk5OVx1OTdGMycsXHJcbiAgICBhdmF0YXI6ICcnLFxyXG4gICAgdXNlcm5hbWU6ICdMaXR0bGVTb3VuZCcsXHJcbiAgICB0aXRsZTogJ05cdTAwRjNsXHUwMEVCYmFzZSBcdTUzOUZcdTU5Q0JcdTUyMUJcdTRGNUNcdTgwMDUnLFxyXG4gICAgZGVzYzogJ1x1NUYwMFx1NkU5MFx1NUYwMFx1NTNEMVx1ODAwNVx1RkYwQ1x1NEUxM1x1NkNFOFx1NEU4RVx1NTI0RFx1N0FFRlx1RkYwQ1x1NEVFNVx1NTNDQVx1NTI0RFx1N0FFRlx1NzZGOFx1NTE3M1x1NURFNVx1NTE3N1x1NUU5M1x1NTQ4Q1x1NURFNVx1NTE3N1x1OTRGRVx1NUYwMFx1NTNEMScsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IHR5cGU6ICdnaXRodWInLCBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9MaXR0bGVTb3VuZCcgfSxcclxuICAgICAgeyB0eXBlOiAndHdpdHRlcicsIGljb246ICd4JywgbGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20vT2lrYXdhUml6dW11JyB9LFxyXG4gICAgXSxcclxuICAgIG5hbWVBbGlhc2VzOiBbJ0xpdHRsZVNvdW5kJywgJ1x1N0VEQVx1OTk5OVx1OTdGMycsICdcdTdENjJcdTk5OTlcdTk3RjMnLCAnUml6dW11IE9pa2F3YScsICdSaXp1bXUgQXlha2EnLCAnQXlha2EgUml6dW11JywgJ1JpenVtdSddLFxyXG4gICAgZW1haWxBbGlhc2VzOiBbJ3JpenVtdUBheWFrYS5tb2UnLCAncml6dW11QG9xby5tb2UnXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdWYWN1b2xlUGFvJyxcclxuICAgIGF2YXRhcjogJycsXHJcbiAgICB1c2VybmFtZTogJ1ZhY3VvbGVQYW9vJyxcclxuICAgIHRpdGxlOiAnVmFjdW9sZU5vdGUgXHU1MTk5XHU0RjVDJyxcclxuICAgIGRlc2M6ICdcdTU3MjhcdTgwNENcdTlBRDhcdTRFMkRcdTc1MUZcdUZGMENcdTRFMUFcdTRGNTlcdTUyNERcdTdBRUZcdTVGMDBcdTUzRDFcdTgwMDVcdUZGMENcdTUyMUJcdTRGNUNWYWN1b2xlTm90ZVx1NjU4N1x1N0FFMFx1NTE4NVx1NUJCOScsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IHR5cGU6ICdnaXRodWInLCBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WYWN1b2xlUGFvbycgfSxcclxuICAgICAgeyB0eXBlOiAnYmlsaWJpbGknLCBpY29uOiAnYmlsaWJpbGknLCBsaW5rOiAnaHR0cHM6Ly9zcGFjZS5iaWxpYmlsaS5jb20vNTE4NTkwMzUwJyB9LFxyXG4gICAgXSxcclxuICAgIG5hbWVBbGlhc2VzOiBbJ0xpdHRsZVNvdW5kJywgJ1x1N0VEQVx1OTk5OVx1OTdGMycsICdcdTdENjJcdTk5OTlcdTk3RjMnLCAnUml6dW11IE9pa2F3YScsICdSaXp1bXUgQXlha2EnLCAnQXlha2EgUml6dW11JywgJ1JpenVtdSddLFxyXG4gICAgZW1haWxBbGlhc2VzOiBbJ3JpenVtdUBheWFrYS5tb2UnLCAncml6dW11QG9xby5tb2UnXSxcclxuICB9LFxyXG5dLm1hcDxDcmVhdG9yPigoYykgPT4ge1xyXG4gIGMuYXZhdGFyID0gYy5hdmF0YXIgfHwgZ2V0QXZhdGFyVXJsQnlHaXRodWJOYW1lKGMudXNlcm5hbWUpXHJcbiAgcmV0dXJuIGMgYXMgQ3JlYXRvclxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0b3JOYW1lcyA9IGNyZWF0b3JzLm1hcChjID0+IGMubmFtZSlcclxuZXhwb3J0IGNvbnN0IGNyZWF0b3JVc2VybmFtZXMgPSBjcmVhdG9ycy5tYXAoYyA9PiBjLnVzZXJuYW1lIHx8ICcnKVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXERldlxcXFxOb2xlYmFzZVxcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEZXZcXFxcTm9sZWJhc2VcXFxcLnZpdGVwcmVzc1xcXFxoZWFkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXYvTm9sZWJhc2UvLnZpdGVwcmVzcy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgeyBjcmVhdG9yTmFtZXMsIGNyZWF0b3JVc2VybmFtZXMsIHNpdGVEZXNjcmlwdGlvbiwgc2l0ZU5hbWUsIHRhcmdldERvbWFpbiB9IGZyb20gJy4uL21ldGFkYXRhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIFsnbWV0YScsIHtcclxuICAgIG5hbWU6ICd0aGVtZS1jb2xvcicsXHJcbiAgICBjb250ZW50OiAnI2ZmZmZmZicsXHJcbiAgfV0sXHJcbiAgW1xyXG4gICAgJ2xpbmsnLFxyXG4gICAge1xyXG4gICAgICByZWw6ICdhcHBsZS10b3VjaC1pY29uJyxcclxuICAgICAgaHJlZjogJy9hcHBsZS10b3VjaC1pY29uLnBuZycsXHJcbiAgICAgIHNpemVzOiAnMTgweDE4MCcsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgJ2xpbmsnLFxyXG4gICAge1xyXG4gICAgICByZWw6ICdpY29uJyxcclxuICAgICAgaHJlZjogJy9sb2dvLnN2ZycsXHJcbiAgICAgIHR5cGU6ICdpbWFnZS9zdmcreG1sJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICAnbGluaycsXHJcbiAgICB7XHJcbiAgICAgIHJlbDogJ2FsdGVybmF0ZSBpY29uJyxcclxuICAgICAgaHJlZjogJy9mYXZpY29uLmljbycsXHJcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICBzaXplczogJzE2eDE2JyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBbJ21ldGEnLCB7XHJcbiAgICBuYW1lOiAnYXV0aG9yJyxcclxuICAgIGNvbnRlbnQ6IGNyZWF0b3JOYW1lcy5qb2luKCcsICcpLFxyXG4gIH1dLFxyXG4gIFtcclxuICAgICdtZXRhJyxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2tleXdvcmRzJyxcclxuICAgICAgY29udGVudDpcclxuICAgICAgICAgIFsnbWFya2Rvd24nLCAna25vd2xlZGdlLWJhc2UnLCAnXHU3N0U1XHU4QkM2XHU1RTkzJywgJ3ZpdGVwcmVzcycsICdvYnNpZGlhbicsICdub3RlYm9vaycsICdub3RlcycsIC4uLmNyZWF0b3JVc2VybmFtZXNdLmpvaW4oJywgJyksXHJcbiAgICB9LFxyXG4gIF0sXHJcblxyXG4gIFsnbWV0YScsIHtcclxuICAgIHByb3BlcnR5OiAnb2c6dGl0bGUnLFxyXG4gICAgY29udGVudDogc2l0ZU5hbWUsXHJcbiAgfV0sXHJcbiAgW1xyXG4gICAgJ21ldGEnLFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogJ29nOmltYWdlJyxcclxuICAgICAgY29udGVudDogYCR7dGFyZ2V0RG9tYWlufS9vZy5wbmdgLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFsnbWV0YScsIHtcclxuICAgIHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLFxyXG4gICAgY29udGVudDogc2l0ZURlc2NyaXB0aW9uLFxyXG4gIH1dLFxyXG4gIFsnbWV0YScsIHtcclxuICAgIHByb3BlcnR5OiAnb2c6c2l0ZV9uYW1lJyxcclxuICAgIGNvbnRlbnQ6IHNpdGVOYW1lLFxyXG4gIH1dLFxyXG5cclxuICBbJ21ldGEnLCB7XHJcbiAgICBuYW1lOiAndHdpdHRlcjpjYXJkJyxcclxuICAgIGNvbnRlbnQ6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcclxuICB9XSxcclxuICBbJ21ldGEnLCB7XHJcbiAgICBuYW1lOiAndHdpdHRlcjpjcmVhdG9yJyxcclxuICAgIGNvbnRlbnQ6IGNyZWF0b3JVc2VybmFtZXMuam9pbignLCAnKSxcclxuICB9XSxcclxuICBbXHJcbiAgICAnbWV0YScsXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd0d2l0dGVyOmltYWdlJyxcclxuICAgICAgY29udGVudDogYCR7dGFyZ2V0RG9tYWlufS9vZy5wbmdgLFxyXG4gICAgfSxcclxuICBdLFxyXG5cclxuICBbXHJcbiAgICAnbGluaycsXHJcbiAgICB7XHJcbiAgICAgIHJlbDogJ21hc2staWNvbicsXHJcbiAgICAgIGhyZWY6ICcvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyxcclxuICAgICAgY29sb3I6ICcjOTI3YmFmJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBbJ2xpbmsnLCB7XHJcbiAgICByZWw6ICdtYW5pZmVzdCcsXHJcbiAgICBocmVmOiAnL3NpdGUud2VibWFuaWZlc3QnLFxyXG4gIH1dLFxyXG4gIFsnbWV0YScsIHtcclxuICAgIG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicsXHJcbiAgICBjb250ZW50OiAnIzYwM2NiYScsXHJcbiAgfV0sXHJcbiAgLy8gUHJveHlpbmcgUGxhdXNpYmxlIHRocm91Z2ggTmV0bGlmeSB8IFBsYXVzaWJsZSBkb2NzXHJcbiAgLy8gaHR0cHM6Ly9wbGF1c2libGUuaW8vZG9jcy9wcm94eS9ndWlkZXMvbmV0bGlmeVxyXG4gIFsnc2NyaXB0JywgeyAnZGVmZXInOiAndHJ1ZScsICdkYXRhLWRvbWFpbic6ICdub2xlYmFzZS5heWFrYS5pbycsICdkYXRhLWFwaSc6ICcvYXBpL3YxL3BhZ2UtZXh0ZXJuYWwtZGF0YS9zdWJtaXQnLCAnc3JjJzogJy9hc3NldHMvcGFnZS1leHRlcm5hbC1kYXRhL2pzL3NjcmlwdC5qcycgfV0sXHJcbl0gc2F0aXNmaWVzIEhlYWRDb25maWdbXVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThQLE9BQU8sYUFBYTtBQUNsUixTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHlDQUF5QztBQUVsRCxTQUFTLHlCQUF5QjtBQUNsQyxTQUFTLHdCQUF3QjtBQUVqQyxPQUFPLHdCQUF3QjtBQUMvQixPQUFPLHdCQUF3QjtBQUMvQixTQUFT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

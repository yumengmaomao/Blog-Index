/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "个人项目",
    sites: [
      {
        title: "Alist",
        description: "一个多功能网盘集合",
        url: "http://Alist.rkcat.top",
        icon: "https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg",
      },
      {
        title: "NextChat",
        description: "智能响应你的问题",
        url: "https://gpt.rkcat.top/",
        icon: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/ChatGPTNextWeb/ChatGPT-Next-Web/main/public/android-chrome-512x512.png",
      },
      {
        title: "哔哩哔哩录播姬",
        description: "一个自动录制bilibili直播间，并保存的应用",
        url: "https://bilibli.rkcat.top",
        icon: "https://mirror.ghproxy.com/https://github.com/BililiveRecorder/BililiveRecorder/blob/dev/.github/assets/logo.svg",
      },
      {
        title: "IT工具集",
        description: "包含了加密，解密，生成等多种功能的网页",
        url: "https://it-tools.tech/",
        icon: "https://mirror.ghproxy.com/https://github.com/CorentinTh/it-tools/blob/main/public/android-chrome-512x512.png",
      },
    ],
  },
  {
    title: "示例分类2",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "EsunR-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "http://blog.rkcat.top",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "萌ICP备20240906号",
  ICP_URL: "https://icp.gov.moe/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Yumeng Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;

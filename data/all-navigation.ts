/* eslint-disable camelcase */

export type ShopifyMenu = {
  id: number;
  title: string;
  handle: string;
  created_at: string;
  updated_at: string;
  items: ShopifyMenuItem[];
};

export type ShopifyMenuItem = {
  id: number;
  title: string;
  subject: string;
  subject_id: number | null;
  subject_params: string | null;
  type: string;
  items: ShopifyMenuItem[];
};

export const navigationData: ShopifyMenu = {
  id: 192091390102,
  title: "New: Main Navigation",
  handle: "new-main-navigation",
  created_at: "2021-12-26T05:40:10-06:00",
  updated_at: "2022-01-30T15:46:15-06:00",
  items: [
    {
      id: 446989172886,
      title: "Trending \u0026 Specials",
      subject: "#",
      subject_id: null,
      subject_params: null,
      type: "http",
      items: [
        {
          id: 444975906966,
          title: "Just Arrived",
          subject: "just-arrived",
          subject_id: 272108159126,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 444975841430,
          title: "New",
          subject: "new",
          subject_id: 79502147636,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 444975874198,
          title: "Best Sellers",
          subject: "best-sellers",
          subject_id: 429063181,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 444976300182,
          title: "Sale",
          subject: "sale",
          subject_id: 794656794,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 444976332950,
          title: "End Of Bolt",
          subject: "end-of-bolt",
          subject_id: 4293656602,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 446951129238,
          title: "Pre-Order",
          subject: "pre-order",
          subject_id: 31962759220,
          subject_params: null,
          type: "collection",
          items: [],
        },
      ],
    },
    {
      id: 446989205654,
      title: "Departments",
      subject: "#",
      subject_id: null,
      subject_params: null,
      type: "http",
      items: [
        {
          id: 444972040342,
          title: "Yardage",
          subject: "yardage",
          subject_id: 433322893,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 444975972502,
          title: "Precuts",
          subject: "precut-quilting-fabric",
          subject_id: 426259469,
          subject_params: null,
          type: "collection",
          items: [
            {
              id: 444976005270,
              title: "All Precut Fabric",
              subject: "precut-quilting-fabric",
              subject_id: 426259469,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 444976038038,
              title: "2????? Fabric Strips",
              subject: "two-and-a-half-inch-strips",
              subject_id: 426056013,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 444976070806,
              title: "5??? Fabric Squares",
              subject: "five-inch-squares",
              subject_id: 426056653,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 444976103574,
              title: "10??? Fabric Squares",
              subject: "ten-inch-squares",
              subject_id: 426056717,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 444976136342,
              title: "Fat Quarter Bundles",
              subject: "fat-quarter-bundles",
              subject_id: 426268621,
              subject_params: null,
              type: "collection",
              items: [],
            },
          ],
        },
        {
          id: 444975939734,
          title: "Kits",
          subject: "quilt-kits",
          subject_id: 426279949,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 444976169110,
          title: "Panels",
          subject: "panels",
          subject_id: 434457805,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 444976201878,
          title: "Notions",
          subject: "quilting-notions",
          subject_id: 4067786778,
          subject_params: null,
          type: "collection",
          items: [
            {
              id: 446951096470,
              title: "All Notions",
              subject: "quilting-notions",
              subject_id: 4067786778,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446989598870,
              title: "Patterns \u0026 Books",
              subject: "quilt-patterns-books",
              subject_id: 4242472986,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 444976267414,
              title: "Thread",
              subject: "thread",
              subject_id: 40014479412,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 444976595094,
              title: "Cutting Tools",
              subject: "cutting-tools",
              subject_id: 18069749797,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 444976627862,
              title: "Rulers",
              subject: "rulers",
              subject_id: 18071126053,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446989631638,
              title: "Gifts",
              subject: "gifts",
              subject_id: 276939112598,
              subject_params: null,
              type: "collection",
              items: [],
            },
          ],
        },
        {
          id: 446989664406,
          title: "Wide Backing",
          subject: "quilt-backing-and-wide-fabric",
          subject_id: 73754116148,
          subject_params: null,
          type: "collection",
          items: [],
        },
        {
          id: 447015649430,
          title: "Gift Cards",
          subject: "gift-card",
          subject_id: 1458375065652,
          subject_params: null,
          type: "product",
          items: [],
        },
      ],
    },
    {
      id: 444976365718,
      title: "Shop By",
      subject: "brands-and-designers",
      subject_id: 7215448116,
      subject_params: null,
      type: "page",
      items: [
        {
          id: 444976398486,
          title: "Colors",
          subject: "shop-by-color",
          subject_id: 82082398358,
          subject_params: null,
          type: "page",
          items: [],
        },
        {
          id: 444976431254,
          title: "Themes",
          subject: "themes",
          subject_id: 20254490676,
          subject_params: null,
          type: "page",
          items: [
            {
              id: 446990090390,
              title: "All Themes",
              subject: "themes",
              subject_id: 20254490676,
              subject_params: null,
              type: "page",
              items: [],
            },
            {
              id: 446990024854,
              title: "Batik",
              subject: "batik",
              subject_id: 161168916532,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446989959318,
              title: "Christmas",
              subject: "christmas",
              subject_id: 428722701,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446989992086,
              title: "Halloween",
              subject: "halloween",
              subject_id: 430158861,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446990057622,
              title: "Solids",
              subject: "solids",
              subject_id: 430157197,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446990123158,
              title: "Florals",
              subject: "floral",
              subject_id: 430156493,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446990155926,
              title: "Kids \u0026 Baby",
              subject: "kids-baby",
              subject_id: 430157389,
              subject_params: null,
              type: "collection",
              items: [],
            },
          ],
        },
        {
          id: 444976496790,
          title: "Designers",
          subject: "featured-designers",
          subject_id: 20212973620,
          subject_params: null,
          type: "page",
          items: [],
        },
        {
          id: 444976529558,
          title: "Fabric Collections",
          subject: "fabric-collections",
          subject_id: 20213006388,
          subject_params: null,
          type: "page",
          items: [],
        },
        {
          id: 444976562326,
          title: "Brands",
          subject: "featured-brands",
          subject_id: 20209008692,
          subject_params: null,
          type: "page",
          items: [
            {
              id: 446989828246,
              title: "All Brands",
              subject: "featured-brands",
              subject_id: 20209008692,
              subject_params: null,
              type: "page",
              items: [],
            },
            {
              id: 446989861014,
              title: "Moda Fabrics",
              subject: "moda-fabrics",
              subject_id: 427194253,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446989893782,
              title: "Free Spirit Fabrics",
              subject: "free-spirit-fabrics",
              subject_id: 428719821,
              subject_params: null,
              type: "collection",
              items: [],
            },
            {
              id: 446989926550,
              title: "Hoffman Fabrics",
              subject: "hoffman-fabrics",
              subject_id: 428719565,
              subject_params: null,
              type: "collection",
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 446990352534,
      title: "Inspiration \u0026 Ideas",
      subject: "#",
      subject_id: null,
      subject_params: null,
      type: "http",
      items: [
        {
          id: 446990385302,
          title: "MFQS Blog",
          subject: "fabric-university",
          subject_id: 99476429,
          subject_params: null,
          type: "blog",
          items: [],
        },
        {
          id: 446990418070,
          title: "Free Patterns",
          subject: "free-patterns",
          subject_id: 270681276566,
          subject_params: null,
          type: "collection",
          items: [],
        },
      ],
    },
    {
      id: 446989238422,
      title: "Account \u0026 Orders",
      subject: "#",
      subject_id: null,
      subject_params: null,
      type: "http",
      items: [
        {
          id: 446989271190,
          title: "Your Account",
          subject: "/account",
          subject_id: null,
          subject_params: null,
          type: "http",
          items: [],
        },
        {
          id: 446989369494,
          title: "Rewards",
          subject: "rewards-and-referrals",
          subject_id: 48805838900,
          subject_params: null,
          type: "page",
          items: [],
        },
        {
          id: 446989303958,
          title: "Contact",
          subject: "contact",
          subject_id: 220133965,
          subject_params: null,
          type: "page",
          items: [],
        },
        {
          id: 446989402262,
          title: "Your Orders",
          subject: "/account/orders",
          subject_id: null,
          subject_params: null,
          type: "http",
          items: [],
        },
      ],
    },
  ],
};

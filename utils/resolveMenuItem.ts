import { ShopifyMenuItem } from "../data/all-navigation";

export const resolveMenuItem = (item: ShopifyMenuItem): string => {
  switch (item.type) {
    case "product":
      return `/products/${item.subject}`;

    case "collection":
      return `/collections/${item.subject}`;

    case "page":
      return `/pages/${item.subject}`;

    case "search":
      return `/search`;

    case "blog":
      return `/blogs/${item.subject}`;

    case "article":
      // HACK TO MAKE ARTICLES WORK
      return `/blogs/fabric-university/${item.subject}`;

    case "frontpage":
      return "/";

    case "http":
      return `${item.subject}`;

    default:
      throw new Error("Not supported menu item type");
  }
};

export const resolveCurrentMenuItem = (
  item: ShopifyMenuItem,
  currentPath: string
): boolean => {
  const resolvedPath = resolveMenuItem(item);
  if (resolvedPath === currentPath) {
    return true;
  }

  if (item.items && item.items.length > 0) {
    for (const subItem of item.items) {
      if (resolveCurrentMenuItem(subItem, currentPath)) {
        return true;
      }
    }
  }

  return false;
};

// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere
import React, { useContext } from "react";

import type { PageContextBuiltIn } from "vite-plugin-ssr";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";

export type PageContextInit = {
  url: string;
} & PageContextCustom;

type PageContextCustom = {
  initialServerCookies: ServerCookies;
};

export type PageContext = PageContextBuiltIn & PageContextCustom;

export type ServerCookies = {
  [key: string]: string;
};

export type PageProps = Record<string, unknown>;

export type ServerPageContextBase = {
  apolloInitialState: any;
  statusCodeOverwrite: number | null;
};

export type ClientPageContextBase = {
  apolloInitialState: any;
  pageProps: PageProps;
  routeParams: PageContextBuiltIn["routeParams"];
  urlParsed: PageContextBuiltIn["urlParsed"];
  initialServerCookies: ServerCookies;
};

export type ClientPageContext = PageContextBuiltInClient &
  ClientPageContextBase;

export type RouteContext = {
  url: string;
  pageContext: PageContextBuiltIn;
};

export type RouteResolver =
  | {
      routeParams: {
        /*Shopify handle (product, collection, etc.) */
        handle?: string;
        customerId?: string;
        resetToken?: string;
        activateToken?: string;
        /* Search query */
        query?: string;
      };
      precedence?: number;
    }
  | false;


const Context = React.createContext<PageContext | ClientPageContext>(
  undefined as any
);

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: PageContext | ClientPageContext;
  children: React.ReactNode;
}) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

export const usePageContext = () => {
  const pageContext = useContext(Context);
  return pageContext;
};

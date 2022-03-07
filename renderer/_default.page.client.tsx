import ReactDOM from 'react-dom'
import React from 'react'
import { getPage } from 'vite-plugin-ssr/client'
import { PageShell } from './PageShell'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { useClientRouter } from "vite-plugin-ssr/client/router";

// hydrate()

// async function hydrate() {
//   // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
//   // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
//   const pageContext = await getPage<PageContextBuiltInClient & PageContext>()
//   const { Page, pageProps } = pageContext
//   ReactDOM.hydrate(
//     <PageShell pageContext={pageContext}>
//       <Page {...pageProps} />
//     </PageShell>,
//     document.getElementById('page-view'),
//   )
// }

const { hydrationPromise } = useClientRouter({
  async render(pageContext: any) {
    // `pageContext.isHydration` is set by `vite-plugin-ssr` and is `true` when the page
    // is already rendered to HTML.
    const { Page, pageProps } = pageContext;


    const app = (
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    );
    const container = document.getElementById("page-view");

    if (pageContext.isHydration) {
      // When we render the first page. (Since we do SSR, the first page is already
      // rendered to HTML and we merely have to hydrate it.)
      ReactDOM.hydrate(app, container);
    } else {
      // When the user navigates to a new page.
      ReactDOM.render(app, container);
    }
  },

  // If `ensureHydration: true` then `vite-plugin-ssr` ensures that the first render is always
  // a hydration. I.e. the first `render()` call is never interrupted — even if the user clicks
  // on a link. Default value: `false`.
  // If we use Vue, we set `ensureHydration: true` to avoid "Hydration Mismatch" errors.
  // If we use React, we leave `ensureHydration: false` for a slight performance boost.
  ensureHydration: true,

  // Prefetch `<a>` links when they appear in the user's viewport.
  // We can override individual links: `<a data-prefetch="true" href="/some-link" />`.
  // Default value: `false`.
  prefetchLinks: true,

  
});

hydrationPromise.then(() => {
  // console.log("Hydration finished; page is now interactive.");
});

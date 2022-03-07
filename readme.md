# Client Side Routing Bug with Headless UI

# Problem: When you click a link in the headlessUI navigation menu a full page refresh happens vs client side routing.

# Steps to Reproduce.

1. yarn install && yarn dev
2. Click About Page https://d.pr/i/5FjZpM
3. Notice there is no spinner at the top of the tab https://d.pr/i/ALbxsE aka its doing client side routing.
4. Go back to home
5. Click Open Nav - https://d.pr/i/Qm0rxS
6. Click "Hello, Click me to do a full page navigation" - https://d.pr/i/kx3Wkt
7. Notice that the tab gets a spinner because its doing a full page Navigation vs the client side routing. - https://d.pr/i/madLrm
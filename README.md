# Headless testing

## Storyblok

1. Create [Storyblok](storyblok.com) account and space
2. Get a Token from Settings -> Access Tokens
3. Create `.env.local` file in `apps/storyblok` and put your Token there: `REACT_APP_PREVIEW_TOKEN=YOUR_TOKEN`
4. Create a Hero blok in Storyblok to match the `apps/storyblok/components/sections/Hero/index.js` fields
5. `npm i`
6. `npm run dev`
7. Follow [this guide](https://www.storyblok.com/faq/setup-dev-server-https-proxy) to be able to use Visual Editor

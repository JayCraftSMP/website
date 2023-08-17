import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "JayCraft",
      social: {
        youtube: "https://www.youtube.com/channel/UCGmZHw7yD5EdaEx_1i5ylRQ",
        twitter: "https://twitter.com/JayCraftSMP",
        github: "https://github.com/JayCraftSMP",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Getting started",
              link: "/guides/getting_started/",
            },
            {
              label: "Becoming a member",
              link: "/guides/become_a_member",
            },
            {
              label: "Rules",
              link: "/guides/rules",
            },
            {
              label: "FAQ",
              link: "/guides/faq",
            },
          ],
        },
      ],
    }),
    react(),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});

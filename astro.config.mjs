import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Kiboom Docs",
            social: {
                github: "https://github.com/lajbel/juicy-beat",
            },
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        {
                            label: "Introduction",
                            link: "/guides/introduction/",
                        },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
        }),
    ],
});

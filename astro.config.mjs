import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
    site: "https://kiboom.lajbel.com/",
    integrations: [
        starlight({
            plugins: [
                // Generate the documentation.
                starlightTypeDoc({
                    entryPoints: [
                        "../kiboom/docs.json",
                    ],
                    typeDoc: {
                        plugin: [
                            "typedoc-plugin-merge-modules",
                        ],
                        mergeModulesRenameDefaults: false,
                        mergeModulesMergeMode: "project",
                        entryPointStrategy: "merge",
                    },
                    tsconfig: "../kiboom/tsconfig.json",
                    includeTag: "internalDoNotUse",
                }),
            ],
            title: "Docs",
            logo: {
                src: "./src/assets/kiboomlogo.png",
                replacesTitle: true,
            },

            customCss: [
                "./src/styles/custom.css",
            ],
            social: {
                github: "https://github.com/lajbel/kiboom",
                discord: "https://kaboomjs.com/discord",
            },
            sidebar: [
                {
                    label: "Getting Started",
                    link: "/start/",
                },
                {
                    label: "Installation",
                    link: "/install/",
                },
                {
                    label: "Object Makers",
                    autogenerate: {
                        collapsed: false,
                        directory: "objects",
                    },
                },
                {
                    label: "Reference Docs",
                    link: "https://ref.kiboom.lajbel.com",
                    attrs: {
                        target: "_blank",
                    },
                    badge: {
                        text: "External",
                        variant: "tip",
                    },
                },
            ],
        }),
    ],
});

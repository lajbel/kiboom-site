import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
    site: "https://kiboom.lajbel.com/",
    integrations: [
        starlight({
            components: {
                Hero: "./src/components/Hero.astro",
            },
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
                        mergeModulesRenameDefaults: false,
                        mergeModulesMergeMode: "project",
                        entryPointStrategy: "merge",
                        categorizeByGroup: true,
                        parametersFormat: "table",
                        propertiesFormat: "list",
                        enumMembersFormat: "table",
                        typeDeclarationFormat: "table",
                        excludePrivate: true,
                        excludeProtected: true,
                        useCodeBlocks: false,
                    },
                    tsconfig: "../kiboom/tsconfig.json",
                    includeTag: "internalDoNotUse",
                    sidebar: {
                        label: "API Reference",
                        collapsed: true,
                    },
                }),
            ],
            title: "Docs",
            logo: {
                src: "./src/assets/kiboom.png",
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
                    ...typeDocSidebarGroup,
                },
            ],
        }),
    ],
});

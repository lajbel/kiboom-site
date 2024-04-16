import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

let kaboomDoc = {
    "Vec2": "https://kaboomjs.com/#Vec2",
    "GameObj": "https://kaboomjs.com/#GameObj",
    "Anchor": "https://kaboomjs.com/#Anchor",
    "TextAlign": "https://kaboomjs.com/#TextAlign",
    "ColorComp": "https://kaboomjs.com/#ColorComp",
    "SpriteComp": "https://kaboomjs.com/#SpriteComp",
    "PosComp": "https://kaboomjs.com/#PosComp",
    "ScaleComp": "https://kaboomjs.com/#ScaleComp",
    "AnchorComp": "https://kaboomjs.com/#AnchorComp",
    "RotateComp": "https://kaboomjs.com/#RotateComp",
    "OpacityComp": "https://kaboomjs.com/#OpacityComp",
    "KaboomCtx": "https://kaboomjs.com/",
    "ZComp": "https://kaboomjs.com/#ZComp",
};

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
                        "../kiboom/dist/global.d.ts",
                        "../kiboom/dist/kiboom.d.ts",
                    ],
                    typeDoc: {
                        plugin: [
                            "typedoc-plugin-merge-modules",
                        ],
                        /** Merge Modules */
                        mergeModulesRenameDefaults: false,
                        mergeModulesMergeMode: "project",

                        /** TypeDoc */
                        categorizeByGroup: true,
                        parametersFormat: "table",
                        propertiesFormat: "table",
                        enumMembersFormat: "table",
                        typeDeclarationFormat: "table",
                        excludePrivate: true,
                        excludeProtected: true,
                        expandObjects: true,
                        externalSymbolLinkMappings: {
                            kaboom: kaboomDoc,
                        },
                        groupOrder: [
                            "Functions",
                        ],
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

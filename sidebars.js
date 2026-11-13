/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  productsSidebar: [
    {
      type: "category",
      label: "Products",
      link: { type: "doc", id: "products/index" },
      items: [
        {
          type: "category",
          label: "IRIV PiControl",
          link: { type: "doc", id: "products/iriv-picontrol/index" },
          items: [
            "products/iriv-picontrol/getting-started",
            "products/iriv-picontrol/cm5-version",
            "products/iriv-picontrol/hardware-layout",
            "products/iriv-picontrol/internal-board-layout",
            "products/iriv-picontrol/terminal-1",
            "products/iriv-picontrol/terminal-2",
            "products/iriv-picontrol/interfaces-and-mapping",
            "products/iriv-picontrol/software-configuration",
            "products/iriv-picontrol/programming-reference",
            "products/iriv-picontrol/troubleshooting",
            "products/iriv-picontrol/tutorials",
            "products/iriv-picontrol/downloads",

            // Move Node-RED to the bottom
            {
              type: "category",
              label: "Node-RED Documentation",
              link: { type: "doc", id: "products/iriv-picontrol/node-red/index" },
              items: [
                "products/iriv-picontrol/node-red/install",
                "products/iriv-picontrol/node-red/first-flow",
                "products/iriv-picontrol/node-red/example-flows",
                "products/iriv-picontrol/node-red/industrial-use-cases",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "IRIV IO Controller",
          link: { type: "doc", id: "products/iriv-io-controller/index" },
          items: [
            "products/iriv-io-controller/getting-started",
            "products/iriv-io-controller/mqtt-gateway",
            "products/iriv-io-controller/hardware-layout",
            "products/iriv-io-controller/internal-board-layout",
            "products/iriv-io-controller/io-reference",
            "products/iriv-io-controller/interfaces-and-functions",
            "products/iriv-io-controller/software-support",
            "products/iriv-io-controller/tutorials",
            "products/iriv-io-controller/troubleshooting",
            "products/iriv-io-controller/downloads",
          ],
        },
        {
          type: "category",
          label: "IRIV SmartHub CM5",
          link: { type: "doc", id: "products/iriv-smarthub-cm5/index" },
          items: [
            "products/iriv-smarthub-cm5/getting-started",
            "products/iriv-smarthub-cm5/hardware-layout",
            "products/iriv-smarthub-cm5/interfaces-and-mapping",
            "products/iriv-smarthub-cm5/software-setup",
            "products/iriv-smarthub-cm5/troubleshooting",
            "products/iriv-smarthub-cm5/tutorials",
            "products/iriv-smarthub-cm5/downloads",
          ],
        },
        {
          type: "category",
          label: "IRIV EdgeAI CM5",
          link: { type: "doc", id: "products/iriv-edgeai-cm5/index" },
          items: [
            "products/iriv-edgeai-cm5/getting-started",
            "products/iriv-edgeai-cm5/hardware-layout",
            "products/iriv-edgeai-cm5/ai-quickstart",
            "products/iriv-edgeai-cm5/interfaces-and-mapping",
            "products/iriv-edgeai-cm5/io-reference",
            "products/iriv-edgeai-cm5/software-setup",
            "products/iriv-edgeai-cm5/troubleshooting",
            "products/iriv-edgeai-cm5/tutorials",
            "products/iriv-edgeai-cm5/downloads",
            {
              type: "category",
              label: "IRIV EdgeAI Studio",
              link: { type: "doc", id: "products/iriv-edgeai-cm5/edgeai-studio/index" },
              items: [
                "products/iriv-edgeai-cm5/edgeai-studio/getting-started",
                {
                  type: "category",
                  label: "User Manual",
                  items: [
                    "products/iriv-edgeai-cm5/edgeai-studio/connect-and-sign-in",
                    "products/iriv-edgeai-cm5/edgeai-studio/main-screen-and-updates",
                    "products/iriv-edgeai-cm5/edgeai-studio/create-a-system",
                    "products/iriv-edgeai-cm5/edgeai-studio/ai-models",
                    "products/iriv-edgeai-cm5/edgeai-studio/camera-setup",
                    "products/iriv-edgeai-cm5/edgeai-studio/workflow",
                    "products/iriv-edgeai-cm5/edgeai-studio/run-and-dashboard",
                    "products/iriv-edgeai-cm5/edgeai-studio/analytics-and-footage",
                    "products/iriv-edgeai-cm5/edgeai-studio/database-and-dataset",
                    "products/iriv-edgeai-cm5/edgeai-studio/performance",
                    {
                      type: "category",
                      label: "Settings",
                      items: [
                        "products/iriv-edgeai-cm5/edgeai-studio/settings/accounts",
                        "products/iriv-edgeai-cm5/edgeai-studio/settings/system-and-data-retention",
                        "products/iriv-edgeai-cm5/edgeai-studio/settings/board-io-and-front-panel",
                        "products/iriv-edgeai-cm5/edgeai-studio/settings/network",
                        "products/iriv-edgeai-cm5/edgeai-studio/settings/email-telegram-mqtt",
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Tutorials",
                  items: [
                    "products/iriv-edgeai-cm5/edgeai-studio/tutorials/people-counting",
                    "products/iriv-edgeai-cm5/edgeai-studio/tutorials/object-detection",
                    "products/iriv-edgeai-cm5/edgeai-studio/tutorials/restricted-zone",
                    "products/iriv-edgeai-cm5/edgeai-studio/tutorials/smart-parking",
                  ],
                },
                "products/iriv-edgeai-cm5/edgeai-studio/troubleshooting",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Kits & Solutions",
      link: { type: "doc", id: "kits/index" },
      items: [
        "kits/iriv-edgeai-safety-box-kit",
        "kits/iriv-picontrol-agribox",
        "kits/iriv-picontrol-industry40-training",
        "kits/iriv-edgeai-vision-training",
      ],
    },
  ],
};

export default sidebars;

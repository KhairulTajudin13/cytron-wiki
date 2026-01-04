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
  tutorialSidebar: [
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
            "products/iriv-picontrol/hardware-layout",
            "products/iriv-picontrol/internal-board-layout",
            "products/iriv-picontrol/terminal-1",
            "products/iriv-picontrol/terminal-2",
            "products/iriv-picontrol/interfaces-and-mapping",
            "products/iriv-picontrol/software-configuration",
            "products/iriv-picontrol/programming-reference",
            "products/iriv-picontrol/troubleshooting",
            "products/iriv-picontrol/downloads",

            // Move Node-RED to the bottom
            {
              type: "category",
              label: "Node-RED Documentation",
              link: { type: "doc", id: "products/iriv-picontrol/node-red/index" },
              items: [
                "products/iriv-picontrol/node-red/install",
                "products/iriv-picontrol/node-red/first-flow",
                "products/iriv-picontrol/node-red/industrial-use-cases",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;

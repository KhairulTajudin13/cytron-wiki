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
      label: "Platforms",
      items: [
        {
          type: "category",
          label: "IRIV PiControl",
          link: { type: "doc", id: "platforms/iriv-picontrol/index" },
          items: [
            "platforms/iriv-picontrol/getting-started",
            "platforms/iriv-picontrol/hardware-layout",
            "platforms/iriv-picontrol/internal-board-layout",
            "platforms/iriv-picontrol/terminal-1",
            "platforms/iriv-picontrol/terminal-2",
            "platforms/iriv-picontrol/interfaces-and-mapping",
            "platforms/iriv-picontrol/software-configuration",
            "platforms/iriv-picontrol/programming-reference",
            "platforms/iriv-picontrol/troubleshooting",
            "platforms/iriv-picontrol/downloads",

            // Move Node-RED to the bottom
            {
              type: "category",
              label: "Node-RED Documentation",
              link: { type: "doc", id: "platforms/iriv-picontrol/node-red/index" },
              items: [
                "platforms/iriv-picontrol/node-red/install",
                "platforms/iriv-picontrol/node-red/first-flow",
                "platforms/iriv-picontrol/node-red/industrial-use-cases",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;

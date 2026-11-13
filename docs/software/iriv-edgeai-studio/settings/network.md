---
title: "IRIV EdgeAI Studio Network"
sidebar_label: "Network"
sidebar_position: 4
description: "IRIV EdgeAI Studio network settings: Wi-Fi and hotspot, fixed IP on Ethernet, dashboard port, device name (.local) and HTTPS certificates."
---

# Network

Wi-Fi, hotspot, Ethernet addresses, the dashboard port, the device name and HTTPS.

## Wi-Fi and Hotspot

Go to **Settings > Network**. The top of the page has two cards.

1. **Wi-Fi Connection** - Switch Wi-Fi on to join your site's Wi-Fi network instead of using the device hotspot.

    - **Status** - shows the current mode, e.g. Off · device hotspot is on.

    - **No restart** - the switch happens straight away, with no reboot.

    ![Wi-Fi switch](/img/software/iriv-edgeai-studio/image27.webp)

2. **Device Hotspot** - The device broadcasts its own Wi-Fi so a computer or phone can connect to it directly. A new device starts with its hotspot on.

    - **Network Name** - the name computers and phones see when connecting.
    - **Password** - at least 8 characters. Change the default password on first setup.
    - **Save Hotspot Settings / Turn Off Hotspot** - save the new name and password, or switch the hotspot off.

    ![Hotspot name and password](/img/software/iriv-edgeai-studio/image154.webp)

    After saving, the hotspot restarts and connected devices must reconnect with the new details.

3. **Reset Hotspot Settings** - Forgets every saved Wi-Fi network and brings back the original setup hotspot (`iriv-<id>`). Ethernet is not affected.

## Fixed IP Address on Ethernet

Each Ethernet port (eth0 and eth1) has its own card. This example gives eth0 a fixed IP address.

![Ethernet card with DHCP off and a fixed IP address](/img/software/iriv-edgeai-studio/image20.webp)

1. **Obtain IP Address Automatically (DHCP)** - Switch DHCP off to set a fixed IP address. Settings for a port without a cable are applied when a cable is connected, with no reboot.

2. **IP Address and Subnet Mask** - Enter the fixed IP address and subnet mask. Test checks that no other device already uses the address.

3. **Advanced Network Settings**

    - **Default Gateway (Optional)** - leave it blank on a machine-only network (PLC, Modbus, cameras).

    - **Preferred / Alternate DNS Server** - optional; leave both blank to use the network-provided DNS.

4. **Network Routing Notice** - If the other port already has a working route to the internet, it keeps the internet and this port becomes the fallback.

5. **Save Network Settings** - Saves the settings for this port.

## Dashboard Access and Device Name

Scroll down to the second Ethernet port, Dashboard Access and Device Name.

![Second Ethernet port, Dashboard Access and Device Name](/img/software/iriv-edgeai-studio/image124.webp)

1. **Ethernet Connection 2 (eth1)**

    - **Internet** - this badge marks the port that carries the internet.

    - **You Are Connected Through This Port** - changing this port may drop the page you are using.

    - **DHCP** - on by default; shows the current lease and the DNS servers in use.

2. **Dashboard Access**

    - **Standard Web Access (Port 80)** - one address for the dashboard and its systems, with no port number.

    - **Custom Port** - lets you choose another port.

    Click **Apply Access Settings** to save the choice.

3. **Device Name** - Set a unique hostname (letters, numbers and hyphens), then click Save Device Name. It takes effect after the device restarts, and the device can then be reached at `<hostname>.local`.

:::note

Give each IRIV on the same network its own hostname. If the name is already used, the device answers on a different one instead, e.g. irivstudio-2.local.

:::

## Secure Connection (HTTPS)

Scroll down to Secure Connection (HTTPS) to encrypt the connection between your browser and the device.

![Secure Connection (HTTPS) card](/img/software/iriv-edgeai-studio/image136.webp)

1. **HTTPS Switch** - Turns HTTPS on (ports 443 and 8443). HTTP keeps working as before.

2. **Current Dashboard Addresses** - The HTTPS addresses you can open the dashboard at.

3. **Certificate Buttons**

    - **Download Root Certificate** - install it on each computer or phone to stop the browser's security warning (.cer for Windows and Android).

    - **Copy Certificate Fingerprint** - copy the fingerprint to check it before trusting the certificate.

4. **How to Trust It and Certificate Details** - Expand these for steps to trust the certificate and for its details, including the fingerprint.

5. **Redirect HTTP to HTTPS** - Sends dashboard pages opened over HTTP to the HTTPS address. Off by default; turn it on only after your computers trust the certificate.

---

**Source:** IRIV EdgeAI Studio User Manual, Rev 1.0 (Draft), Cytron.

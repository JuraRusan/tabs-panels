import * as React from "react";

import Telegram from "../icon-js/Telegram.js";
import Discord from "../icon-js/Discord.js";
import Instagram from "../icon-js/Instagram.js";
import Facebook from "../icon-js/Facebook.js";
import Steam from "../icon-js/Steam.js";

export const data_bases_messeger = [
  {
    id: 1,
    name: "Telegram Web",
    ico: <Telegram />,
    href: "https://web.telegram.org/",
  },
  {
    id: 2,
    name: "Discord Web",
    ico: <Discord />,
    href: "https://discord.com/channels/@me",
  },
  {
    id: 3,
    name: "Instagram",
    ico: <Instagram />,
    href: "https://www.instagram.com/",
  },
  {
    id: 4,
    name: "Facebook",
    ico: <Facebook />,
    href: "https://www.facebook.com/",
  },
  {
    id: 5,
    name: "Steam",
    ico: <Steam />,
    href: "https://store.steampowered.com/",
  },
];

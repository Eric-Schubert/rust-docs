import { Plugin } from '../types';

export const userPlugins: Plugin[] = [
  {
    name: "Foo",
    description: "RPG based levels and experience mod with stats and skills",
    commands: [
      { command: "/xphelp", description: "Shows all commands in chat" },
      { command: "/xpstats", description: "brings up user control panel" },
      { command: "/xpstats <player>", description: "shows full player XP profile" },
      { command: "/xpstatschat", description: "shows your level, xp, stats, and skills in chat" },
      { command: "/xptop", description: "brings up top players UI" },
      { command: "/xpaddstats <stat>", description: "level up selected stat" },
      { command: "/xpaddskill <skill>", description: "level up selected skill" },
      { command: "/xpresetstats", description: "resets all stats and refunds points" },
      { command: "/xpresetskills", description: "resets all skills and refunds points" },
      { command: "/xpliveui <0-5>", description: "Live UI Location / 0 = off" }
    ]
  },
  {
    name: "Economy",
    description: "Complete economy system with banks, shops, and trading",
    commands: [
      { command: "/balance", description: "Check your current balance" },
      { command: "/pay <player> <amount>", description: "Send money to another player" },
      { command: "/shop", description: "Open the server shop" }
    ]
  }
];
import { Plugin } from '../types';

export const adminPlugins: Plugin[] = [
  {
    name: "Xperience Admin",
    description: "Administrative controls for the Xperience plugin",
    commands: [
      { command: "/xpadmin reset <player>", description: "Reset a player's XP and stats" },
      { command: "/xpadmin setlevel <player> <level>", description: "Set a player's level" },
      { command: "/xpadmin givexp <player> <amount>", description: "Give XP to a player" },
      { command: "/xpadmin config reload", description: "Reload plugin configuration" }
    ]
  },
  {
    name: "Economy Admin",
    description: "Administrative controls for the Economy plugin",
    commands: [
      { command: "/eco give <player> <amount>", description: "Give money to a player" },
      { command: "/eco take <player> <amount>", description: "Remove money from a player" },
      { command: "/eco reset <player>", description: "Reset a player's balance" }
    ]
  }
];
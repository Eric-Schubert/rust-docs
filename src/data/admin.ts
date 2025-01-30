import { Plugin } from '../types';

export const adminPlugins: Plugin[] = [
  {
    "name": "Guarded Crate Admin",
    "description": "Administrative Befehle zur Verwaltung der Guarded Crate Plugin",
    "commands": [
      { "command": "/guardedcrate spawn <location>", "description": "Spawnt eine neue Guarded Crate an der angegebenen Position" },
      { "command": "/guardedcrate remove <crate_id>", "description": "Entfernt eine Guarded Crate anhand ihrer ID" },
      { "command": "/guardedcrate list", "description": "Listet alle aktiven Guarded Crates auf" },
      { "command": "/guardedcrate setguard <crate_id> <guard_type>", "description": "Setzt den Guard-Typ für eine bestimmte Crate" },
      { "command": "/guardedcrate config reload", "description": "Lädt die Guarded Crate Plugin-Konfiguration neu" }
    ]
  },

  {
    "name": "Xperience Admin",
    "description": "Administrative Befehle für die Xperience Plugin",
    "commands": [
      { "command": "/xpadmin reset <player>", "description": "Setzt die XP und Statistiken eines Spielers zurück" },
      { "command": "/xpadmin setlevel <player> <level>", "description": "Setzt das Level eines Spielers" },
      { "command": "/xpadmin givexp <player> <amount>", "description": "Gibt einem Spieler XP" },
      { "command": "/xpadmin config reload", "description": "Lädt die Plugin-Konfiguration neu" }
    ]
  },

  {
    "name": "Raidable Bases Admin",
    "description": "Administrative Befehle für die Raidable Bases Plugin",
    "commands": [
      { "command": "/raidablebases create <location>", "description": "Erstellt eine neue raidable Base an der angegebenen Position" },
      { "command": "/raidablebases delete <base_id>", "description": "Entfernt eine raidable Base anhand ihrer ID" },
      { "command": "/raidablebases setreward <base_id> <reward>", "description": "Setzt die Belohnung für das Raiden einer bestimmten Base" },
      { "command": "/raidablebases config reload", "description": "Lädt die Raidable Bases Plugin-Konfiguration neu" }
    ]
  },

  {
    "name": "Human NPC Admin",
    "description": "Administrative Befehle für die Human NPC Plugin",
    "commands": [
      { "command": "/humannpc spawn <type> <location>", "description": "Spawnt einen neuen NPC vom angegebenen Typ an der Position" },
      { "command": "/humannpc remove <npc_id>", "description": "Entfernt einen NPC anhand seiner ID" },
      { "command": "/humannpc setdialogue <npc_id> <dialogue>", "description": "Setzt den Dialog für einen spezifischen NPC" },
      { "command": "/humannpc list", "description": "Listet alle aktiven NPCs auf" },
      { "command": "/humannpc config reload", "description": "Lädt die Human NPC Plugin-Konfiguration neu" }
    ]
  },

  {
    "name": "Tank Commander Admin",
    "description": "Administrative Befehle für die Tank Commander Plugin",
    "commands": [
      { "command": "/tankcmd create <tank_id>", "description": "Erstellt einen neuen Tank mit der angegebenen ID" },
      { "command": "/tankcmd assign <player> <tank_id>", "description": "Weist einen Spieler einem Tank zu" },
      { "command": "/tankcmd remove <player> <tank_id>", "description": "Entfernt einen Spieler von einem Tank" },
      { "command": "/tankcmd list", "description": "Listet alle Tanks und ihre Mitglieder auf" },
      { "command": "/tankcmd config reload", "description": "Lädt die Tank Commander Plugin-Konfiguration neu" }
    ]
  }








];
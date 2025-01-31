import { Plugin } from '../types';

export const adminPlugins: Plugin[] = [

  {
    "name": "Cupboard No Decay Admin",
    "description": "Administrative Befehle zur Verwaltung des Cupboard No Decay Plugins",
    "commands": [
      { "command": "/cupboardadmin setglobaldecay <zeit>", "description": "Setzt die globale Verfallszeit für alle Lagerhäuser" },
      { "command": "/cupboardadmin reset <player>", "description": "Setzt den No Decay Schutz für einen bestimmten Spieler zurück" },
      { "command": "/cupboardadmin list", "description": "Listet alle Spieler mit aktivem No Decay Schutz auf" },
      { "command": "/cupboardadmin config reload", "description": "Lädt die Cupboard No Decay Plugin-Konfiguration neu" }
    ]
  },

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
    "name": "NPC Loadouts Admin",
    "description": "Administrative Befehle für die NPC Loadouts Plugin",
    "commands": [
      { "command": "/npcloadouts add <npc_id> <loadout>", "description": "Fügt ein Loadout zu einem bestimmten NPC hinzu" },
      { "command": "/npcloadouts remove <npc_id>", "description": "Entfernt das Loadout eines bestimmten NPCs" },
      { "command": "/npcloadouts spawn <type> <location>", "description": "Spawnt einen neuen NPC vom angegebenen Typ an der Position" },
      { "command": "/npcloadouts setbehavior <npc_id> <behavior>", "description": "Setzt das Verhalten für einen bestimmten NPC" },
      { "command": "/npcloadouts config reload", "description": "Lädt die NPC Loadouts Plugin-Konfiguration neu" }
    ]
  },

  {
    "name": "Better Loot Admin",
    "description": "Administrative Befehle für die Better Loot Plugin",
    "commands": [
      { "command": "/betterloot configure", "description": "Öffnet die Konfigurationsdatei für Better Loot" },
      { "command": "/betterloot reload", "description": "Lädt die Better Loot Plugin-Konfiguration neu" },
      { "command": "/betterloot addtype <loot_type> <parameters>", "description": "Fügt einen neuen Loot-Typ hinzu" },
      { "command": "/betterloot removetype <loot_type>", "description": "Entfernt einen bestehenden Loot-Typ" }
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
    "name": "Night Zombies Admin",
    "description": "Administrative Befehle für die Night Zombies Plugin",
    "commands": [
      { "command": "/nightzombies configure", "description": "Öffnet die Konfigurationsdatei für Night Zombies" },
      { "command": "/nightzombies reset", "description": "Setzt alle Night Zombies Einstellungen auf Standard zurück" },
      { "command": "/nightzombies spawnall", "description": "Spawnt Zombies an allen konfigurierten Positionen" },
      { "command": "/nightzombies config reload", "description": "Lädt die Night Zombies Plugin-Konfiguration neu" }
    ]
  },

  {
    "name": "Auto Deposit Admin",
    "description": "Administrative Befehle für die Auto Deposit Plugin",
    "commands": [
      { "command": "/autodeposit setlimit <amount>", "description": "Setzt das Einzahlungs-Limit für Ressourcen" },
      { "command": "/autodeposit reload", "description": "Lädt die Auto Deposit Plugin-Konfiguration neu" },
      { "command": "/autodeposit reset <player>", "description": "Setzt die Auto Deposit Einstellungen eines Spielers zurück" },
      { "command": "/autodeposit configure", "description": "Öffnet die Konfigurationsdatei für Auto Deposit" }
    ]
  },

  {
    "name": "Permission Manager Admin",
    "description": "Administrative Befehle für das Permission Manager Plugin.",
    "commands": [
      {
        "command": "/perms data",
        "description": "Backup und Wiederherstellung von Berechtigungen und/oder Gruppen - lokale Datendatei und/oder SQL."
      },
      {
        "command": "/perms",
        "description": "Öffnet die GUI-Spieler-Liste, sodass ein Spieler ausgewählt werden kann."
      },
      {
        "command": "/perms player",
        "description": "Öffnet die GUI-Spieler-Liste, sodass ein Spieler ausgewählt werden kann."
      },
      {
        "command": "/perms group",
        "description": "Öffnet die GUI-Gruppen-Liste, sodass eine Gruppe ausgewählt werden kann."
      },
      {
        "command": "/perms player <playername>",
        "description": "Öffnet die Berechtigungs-GUI für den angegebenen Spieler."
      },
      {
        "command": "/perms group <groupname>",
        "description": "Öffnet die Berechtigungs-GUI für die angegebene Gruppe."
      }
    ]
  },

  {
    "name": "Remover Tool Admin",
    "description": "Administrative Befehle für das Remover Tool Plugin, das das Entfernen unerwünschter Entitäten, Gegenstände oder Strukturen im Spiel ermöglicht.",
    "commands": [
      {
        "command": "/remover help",
        "description": "Zeigt alle verfügbaren Remover Tool Befehle an."
      },
      {
        "command": "/remover remove <entity>",
        "description": "Entfernt eine bestimmte Entität aus der Spielwelt."
      },
      {
        "command": "/remover removeall <entity>",
        "description": "Entfernt alle Entitäten eines bestimmten Typs aus der Spielwelt."
      },
      {
        "command": "/remover radius <entity> <radius>",
        "description": "Entfernt Entitäten eines bestimmten Typs innerhalb eines angegebenen Radius."
      },
      {
        "command": "/remover config reload",
        "description": "Lädt die Remover Tool Plugin-Konfiguration neu."
      },
      {
        "command": "/remover list",
        "description": "Listet alle derzeit entfernbare Entitätstypen auf."
      },
      {
        "command": "/remover undo",
        "description": "Hebt die letzte entfernte Entität oder Aktion rückgängig auf."
      }
    ]
  }





];
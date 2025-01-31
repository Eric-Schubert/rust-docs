import { Plugin } from '../types';

export const userPlugins: Plugin[] = [
  {
    "name": "Cupboard No Decay",
    "description": "Verhindert den Verfall von Lagerhäusern (Cupboards) im Spiel, um sicherzustellen, dass sie dauerhaft bestehen bleiben.",
    "commands": [
      { "command": "/cupboardnodisable", "description": "Deaktiviert den No Decay Schutz für das nächste Lagerhaus" },
      { "command": "/cupboardnoset <zeit>", "description": "Setzt die Verfallszeit für Lagerhäuser auf die angegebene Zeit" },
      { "command": "/cupboardnomessage", "description": "Schaltet Benachrichtigungen über den No Decay Schutz ein oder aus" },
      { "command": "/cupboardhelp", "description": "Zeigt alle verfügbaren Cupboard No Decay Befehle an" }
    ]
  },

  {
    "name": "Guarded Crate",
    "description": "Verwaltet die Guarded Crates im Spiel und ermöglicht es Spielern, geschützte Kisten zu finden und zu öffnen.",
    "commands": [
      { "command": "/opencrate", "description": "Öffnet eine Guarded Crate in deiner Nähe" },
      { "command": "/crateinfo <crate_id>", "description": "Zeigt Informationen über eine spezifische Crate an" },
      { "command": "/cratehelp", "description": "Zeigt alle verfügbaren Guarded Crate Befehle an" }
    ]
  },

  {
    "name": "Xperience",
    "description": "RPG basiertes Levels- und Erfahrungsmod mit Statistiken und Fähigkeiten",
    "commands": [
      { "command": "/xphelp", "description": "Zeigt alle Befehle im Chat an" },
      { "command": "/xpstats", "description": "Öffnet das Benutzerkontrollpanel" },
      { "command": "/xpstats <player>", "description": "Zeigt das vollständige XP-Profil eines Spielers an" },
      { "command": "/xpstatschat", "description": "Zeigt dein Level, XP, Statistiken und Fähigkeiten im Chat an" },
      { "command": "/xptop", "description": "Öffnet die UI der Top-Spieler" },
      { "command": "/xpaddstats <stat>", "description": "Erhöht die ausgewählte Statistik" },
      { "command": "/xpaddskill <skill>", "description": "Erhöht die ausgewählte Fähigkeit" },
      { "command": "/xpresetstats", "description": "Setzt alle Statistiken zurück und erstattet Punkte" },
      { "command": "/xpresetskills", "description": "Setzt alle Fähigkeiten zurück und erstattet Punkte" },
      { "command": "/xpliveui <0-5>", "description": "Position der Live UI festlegen / 0 = aus" }
    ]
  },

  {
    "name": "Raidable Bases",
    "description": "Verwaltet raidable Bases im Spiel und erlaubt Spielern, Basen zu raiden und zu kontrollieren.",
    "commands": [
      { "command": "/raidablebases list", "description": "Listet alle raidable Bases auf" },
      { "command": "/raidablebases join <base_id>", "description": "Tritt einem Raid auf eine Base bei" },
      { "command": "/raidablebases status <base_id>", "description": "Zeigt den aktuellen Status einer Base an" },
      { "command": "/raidablebases help", "description": "Zeigt alle verfügbaren Raidable Bases Befehle an" }
    ]
  },

  {
    "name": "NPC Loadouts",
    "description": "Ermöglicht das Anpassen und Verwalten der Ausrüstungen von NPCs im Spiel.",
    "commands": [
      { "command": "/npcloadouts interact", "description": "Interagiert mit einem NPC-Loadout in deiner Nähe" },
      { "command": "/npcloadouts list", "description": "Listet alle verfügbaren NPC-Loadouts auf" },
      { "command": "/npcloadouts help", "description": "Zeigt alle verfügbaren NPC Loadouts Befehle an" }
    ]
  },

  {
    "name": "Better Loot",
    "description": "Verbessert die Loot-Systeme im Spiel, um vielfältigere und interessantere Beute zu ermöglichen.",
    "commands": [
      { "command": "/betterloot spawnloot <location>", "description": "Spawnt eine verbesserte Loot-Kiste an der angegebenen Position" },
      { "command": "/betterloot setspawnrate <rate>", "description": "Setzt die Spawnrate für verbesserte Loot-Kisten" },
      { "command": "/betterloot lootlist", "description": "Listet alle verfügbaren Loot-Typen auf" },
      { "command": "/betterloot help", "description": "Zeigt alle verfügbaren Better Loot Befehle an" }
    ]
  },

  {
    "name": "Human NPC",
    "description": "Ermöglicht Spielern die Interaktion mit menschlichen NPCs im Spiel.",
    "commands": [
      { "command": "/humannpc interact", "description": "Interagiert mit einem NPC in deiner Nähe" },
      { "command": "/humannpc list", "description": "Listet alle NPCs in deiner Nähe auf" },
      { "command": "/humannpc help", "description": "Zeigt alle verfügbaren Human NPC Befehle an" }
    ]
  },

  {
    "name": "Night Zombies",
    "description": "Verwalte die Erscheinung und das Verhalten von Zombies bei Nacht im Spiel.",
    "commands": [
      { "command": "/nightzombies spawn", "description": "Spawnt Zombies an definierten Positionen" },
      { "command": "/nightzombies stop", "description": "Stoppt das Spawnen von Zombies bei Nacht" },
      { "command": "/nightzombies setdifficulty <level>", "description": "Setzt die Schwierigkeit für Zombies" },
      { "command": "/nightzombies help", "description": "Zeigt alle verfügbaren Night Zombies Befehle an" }
    ]
  },

  {
    "name": "Auto Deposit",
    "description": "Automatisiert das Einzahlen von Ressourcen und Gegenständen in die Lagerkiste des Spielers.",
    "commands": [
      { "command": "/autodeposit enable", "description": "Aktiviert die Auto Deposit Funktion" },
      { "command": "/autodeposit disable", "description": "Deaktiviert die Auto Deposit Funktion" },
      { "command": "/autodeposit status", "description": "Zeigt den aktuellen Status der Auto Deposit Funktion an" },
      { "command": "/autodeposit help", "description": "Zeigt alle verfügbaren Auto Deposit Befehle an" }
    ]
  },





];
import { Plugin } from '../types';

export const userPlugins: Plugin[] = [
  {
    "name": "Guarded Crate",
    "description": "Verwaltet die Guarded Crates im Spiel, ermöglicht es Spielern, geschützte Kisten zu finden und zu öffnen.",
    "commands": [
      { "command": "/opencrate", "description": "Öffnet eine Guarded Crate in deiner Nähe" },
      { "command": "/crateinfo <crate_id>", "description": "Zeigt Informationen über eine spezifische Crate an" },
      { "command": "/cratehelp", "description": "Zeigt alle verfügbaren Guarded Crate Befehle" }
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
    "description": "Verwaltet raidable Bases im Spiel, erlaubt Spielern, Basen zu raiden und zu kontrollieren.",
    "commands": [
      { "command": "/raidablebases list", "description": "Listet alle raidable Bases auf" },
      { "command": "/raidablebases join <base_id>", "description": "Tritt einer Raids auf eine Base bei" },
      { "command": "/raidablebases status <base_id>", "description": "Zeigt den aktuellen Status einer Base an" },
      { "command": "/raidablebases help", "description": "Zeigt alle verfügbaren Raidable Bases Befehle" }
    ]
  },

  {
    "name": "Human NPC",
    "description": "Ermöglicht Spielern die Interaktion mit menschlichen NPCs im Spiel.",
    "commands": [
      { "command": "/humannpc interact", "description": "Interagiert mit einem NPC in deiner Nähe" },
      { "command": "/humannpc list", "description": "Listet alle NPCs in deiner Nähe auf" },
      { "command": "/humannpc help", "description": "Zeigt alle verfügbaren Human NPC Befehle" }
    ]
  },

  {
    "name": "Tank Commander",
    "description": "Verwaltet die Teilnahme und den Status der Spieler in den Tank-Teams.",
    "commands": [
      { "command": "/tankcmd join", "description": "Tritt einem Tank-Team bei" },
      { "command": "/tankcmd leave", "description": "Verlasse dein aktuelles Tank-Team" },
      { "command": "/tankcmd status", "description": "Zeigt den Status deines Tank-Teams an" },
      { "command": "/tankcmd help", "description": "Zeigt alle verfügbaren Tank Commander Befehle" }
    ]
  },

];
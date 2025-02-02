import { Plugin } from '../types';

export const userPlugins: Plugin[] = [
  {
    "name": "Kits",
    "description": "Ermöglicht Spielern das Öffnen des Kit-Menüs, das Beanspruchen von Kits und das Umschalten der automatischen Kit-Vergabe beim Spawn.",
    "commands": [
      {
        "command": "/kit",
        "description": "Öffnet das Kit-Menü."
      },
      {
        "command": "/kit <name>",
        "description": "Beansprucht das angegebene Kit, sofern verfügbar."
      },
      {
        "command": "/kit autokit",
        "description": "Ermöglicht dem Spieler das Umschalten, ob er beim Respawn automatisch Kits erhält (muss in der Config aktiviert sein)."
      }
    ]
  },

  {
    "name": "Xperience",
    "description": "RPG-basiertes Level- und Erfahrungssystem mit Statistiken, Fähigkeiten und Live-UI, anpassbar in der Konfiguration.",
    "commands": [
      {
        "command": "/xphelp",
        "description": "Zeigt alle verfügbaren XPerience-Spielerbefehle im Chat an."
      },
      {
        "command": "/xpstats",
        "description": "Öffnet das Benutzerkontrollpanel (zeigt Statistiken, Fähigkeiten und mehr)."
      },
      {
        "command": "/xpstats <player>",
        "description": "Zeigt das vollständige XP-Profil eines bestimmten Spielers."
      },
      {
        "command": "/xpstatschat",
        "description": "Zeigt dein Level, XP, Statistiken und Fähigkeiten im Chat an."
      },
      {
        "command": "/xptop",
        "description": "Öffnet eine UI, die die Top-Spieler basierend auf ihren XP anzeigt."
      },
      {
        "command": "/xpaddstats <stat>",
        "description": "Erhöht die angegebene Statistik (z.B. Stärke, Ausdauer usw.)."
      },
      {
        "command": "/xpaddskill <skill>",
        "description": "Erhöht die angegebene Fähigkeit (z.B. Bergbau, Holzfällerei usw.)."
      },
      {
        "command": "/xpresetstats",
        "description": "Setzt alle Statistiken zurück und erstattet die investierten Punkte."
      },
      {
        "command": "/xpresetskills",
        "description": "Setzt alle Fähigkeiten zurück und erstattet die investierten Punkte."
      },
      {
        "command": "/xpliveui <0-5>",
        "description": "Wählt die Position der Live-UI (0 = aus)."
      }
    ]
  },

  {
    "name": "Remover Tool",
    "description": "Plugin zum Entfernen unerwünschter Strukturen und Gegenstände. Einige Befehle erfordern Admin-Rechte.",
    "commands": [
      {
        "command": "/remove [time (seconds)]",
        "description": "Aktiviert/Deaktiviert das RemoverTool für eine bestimmte Zeit (in Sekunden), wenn angegeben."
      },
      {
        "command": "/remove <admin|a> [time (seconds)]",
        "description": "Admin-RemoverTool aktivieren. In diesem Modus können alle Entitäten entfernt werden."
      },
      {
        "command": "/remove all [time (seconds)]",
        "description": "Entfernt alles, was miteinander verbunden ist, beginnend dort, wo du hinsiehst. Kann bei großen Strukturen langsamer sein."
      },
      {
        "command": "/remove <structure|s> [time (seconds)]",
        "description": "Entfernt ein gesamtes Gebäude schnell, schließt jedoch keine benachbarten Gebäude oder Deployables mit ein."
      },
      {
        "command": "/remove <external|e> [time (seconds)]",
        "description": "Entfernt angrenzende High External Walls."
      },
      {
        "command": "/remove <help|h>",
        "description": "Zeigt die Hilfeseite für das RemoverTool an."
      }
    ]
  }








];
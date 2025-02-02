import {Plugin} from '../types';

export const adminPlugins: Plugin[] = [
    {
        "name": "Kits Admin",
        "description": "Administrative Befehle für das Rust Kits Plugin, um Kits zu erstellen, zu verwalten und zu konfigurieren.",
        "commands": [
            {
                "command": "/kit help",
                "description": "Zeigt das Hilfemenü mit allen verfügbaren Befehlen an."
            },
            {
                "command": "/kit list",
                "description": "Listet alle vorhandenen Kits auf."
            },
            {
                "command": "/kit add",
                "description": "Beginnt die Erstellung eines neuen Kits. Alternativ auch /kit new."
            },
            {
                "command": "/kit new",
                "description": "Beginnt die Erstellung eines neuen Kits (Synonym zu /kit add)."
            },
            {
                "command": "/kit edit <kitname>",
                "description": "Beginnt das Bearbeiten eines bereits erstellten Kits."
            },
            {
                "command": "/kit remove <kitname>",
                "description": "Löscht das angegebene Kit. Alternativ auch /kit delete <kitname>."
            },
            {
                "command": "/kit delete <kitname>",
                "description": "Löscht das angegebene Kit (Synonym zu /kit remove)."
            },
            {
                "command": "/kit give <player> <kitname>",
                "description": "Gibt einem bestimmten Spieler ein angegebenes Kit (Name oder ID)."
            },
            {
                "command": "/kit givenpc <kitname>",
                "description": "Gibt dem NPC, den du gerade anschaust, das angegebene Kit."
            },
            {
                "command": "/kit reset",
                "description": "Setzt alle Kit-Nutzungsdaten für alle Spieler zurück."
            },
            {
                "command": "/kit resetuses <player> <kitname>",
                "description": "Setzt die Nutzung des angegebenen Kits für den angegebenen Spieler zurück."
            }
        ]
    },

    {
        "name": "Guarded Crate Admin",
        "description": "Administrative Befehle zur Verwaltung und Steuerung von Guarded Crate Events.",
        "commands": [
            {
                "command": "/gcrate start <event-name|optional>",
                "description": "Startet das angegebene Event oder ein zufälliges Event, wenn kein Name angegeben wird."
            },
            {
                "command": "/gcrate here <event-name>",
                "description": "Startet das angegebene Event an deiner aktuellen Position."
            },
            {
                "command": "/gcrate position <event-name> <x, y, z>",
                "description": "Startet das angegebene Event an den spezifizierten Koordinaten."
            },
            {
                "command": "/gcrate stop",
                "description": "Stoppt alle aktuell laufenden Guarded Crate Events."
            },
            {
                "command": "/gcrate amount <event-name> <number>",
                "description": "Ändert die Anzahl der Wächter (Guards), die für das angegebene Event gespawnt werden."
            },
            {
                "command": "/gcrate loot <event-name>",
                "description": "Lege Items in dein Hauptinventar, um die Loot-Items für das angegebene Event festzulegen."
            },
            {
                "command": "/gcrate loadout <event-name>",
                "description": "Lege Items in deinen Ausrüstungs- und Gürtel-Slot, um den Loadout der Wächter für das angegebene Event festzulegen."
            }
        ]
    },

    {
        "name": "Permission Manager Admin",
        "description": "Administrative Befehle für das Permission Manager Plugin.",
        "commands": [
            {
                "command": "/perms data",
                "description": "Backup und Wiederherstellung von Berechtigungen und/oder Gruppen – lokale Datendatei und/oder SQL."
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
        "name": "Xperience Admin",
        "description": "Administrative Befehle für das XPerience-Plugin, erfordern Server-Admin-Rechte oder die Berechtigung 'xperience.admin'.",
        "commands": [
            {
                "command": "/xpresetall",
                "description": "Löscht und setzt sämtliche Spielerdaten im XPerience-System zurück."
            },
            {
                "command": "/resetalllevels",
                "description": "Setzt das Level aller Spieler auf 0 zurück."
            },
            {
                "command": "/resetallranks",
                "description": "Setzt den Rang aller Spieler auf 0 zurück."
            },
            {
                "command": "/xpreset <name|id> <playername|steamid>",
                "description": "Setzt alle Fortschritte des angegebenen Spielers auf 0 zurück."
            },
            {
                "command": "/resetlevel <playername>",
                "description": "Setzt das Level eines bestimmten Spielers auf 0."
            },
            {
                "command": "/resetrank <playername>",
                "description": "Setzt den Rang eines bestimmten Spielers auf 0."
            },
            {
                "command": "/resetharvest",
                "description": "Löscht alle Erntedaten (Harvest-Daten) im XPerience-System."
            },
            {
                "command": "/xpadminhelp",
                "description": "Zeigt eine Liste aller verfügbaren Admin-Befehle im XPerience-System an."
            },
            {
                "command": "/xpgive <name|id> <playername|steamid> <amount>",
                "description": "Gewährt dem angegebenen Spieler die angegebene Menge an Erfahrung (XP)."
            },
            {
                "command": "/xpgiveall <amount>",
                "description": "Gewährt allen Spielern die angegebene Menge an Erfahrung (XP)."
            },
            {
                "command": "/xptake <name|id> <playername|steamid> <amount>",
                "description": "Zieht einem bestimmten Spieler die angegebene Menge an Erfahrung (XP) ab."
            },
            {
                "command": "/xpconfig",
                "description": "Öffnet das Admin-Panel für XPerience-Einstellungen im Spiel."
            },
            {
                "command": "/xpfix",
                "description": "Setzt sämtliche Spieler-Daten (außer XP) zurück und berechnet Level, Punkte und Anforderungen neu."
            },
            {
                "command": "/xpexclude <name|id> <playername|steamid> <true|false>",
                "description": "Schließt den angegebenen Spieler vom XPerience-Addon aus (true) oder hebt die Ausgrenzung wieder auf (false)."
            }
        ]
    },







];
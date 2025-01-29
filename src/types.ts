export interface Command {
  command: string;
  description: string;
}

export interface Plugin {
  name: string;
  description: string;
  commands: Command[];
}
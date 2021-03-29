export interface FolderDef {
  isDirectory: boolean;
  name: string;
  children: FolderDef[];
}

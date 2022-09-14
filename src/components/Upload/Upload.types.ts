import { Dispatch, SetStateAction } from 'react';

export interface UploadProps {
  title?: string;
  maxFiles?: number;
  maxSize: number;
  accept: 'image/*, .pdf' | '.pdf' | 'image/*';
  height?: number;
  width?: number | string;
  setFiles: Dispatch<SetStateAction<FileProps[]>>;
  files: FileProps[];
  required?: 'obrigatório' | 'requerido' | boolean;
  placeholder?: string;
  tooltip?: string;
}

export interface FileProps {
  path?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: string | number;
  type?: string;
  webkitRelativePath?: string;
  conteudoBase64?: string;
  id?: string | number;
  nome?: string;
  preview?: string;
  base64?: string;
}

export interface FileBlob extends Blob {
  path?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  webkitRelativePath?: string;
  conteudoBase64?: string;
  id?: string;
  nome?: string;
  preview?: string;
  base64?: string;
  fileName?: string;
}
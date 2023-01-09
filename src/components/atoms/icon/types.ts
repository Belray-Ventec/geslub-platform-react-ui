export type iconsType =
  | 'Home'
  | 'Eye'
  | 'CaretRight'
  | 'AngleLeft'
  | 'Info'
  | 'Ellipsis'
  | 'FileArrowDown'
  | 'PenToSquare'
  | 'ShareNodes'
  | 'Add'
  | 'Document'
  | 'BookOpen'
  | 'BullHorn'
  | 'User'
  | 'Video'
  | 'CircleQuestion'
  | 'Star'
  | 'Tag'
  | 'Bars'
  | 'AngleDown'
  | 'CircleXmark'
  | 'Image'
  | 'Trash'
  | 'Check'
  | 'Seeker'
  | 'Pdf'
  | 'GeneratePdf'
  | 'Mp4'
  | 'Youtube'
  | 'Rusia'
  | 'UnitedKingdom'
  | 'Spain'
  | 'PdfSend'
  | 'CircleCheck'
  | 'Chile'
  | 'AngleUp'
  | 'Articulos'
  | 'Certificados'
  | 'Coas'
  | 'Comentarios'
  | 'Companias'
  | 'DepartamentoTecnico'
  | 'EnsayoLaboratorio'
  | 'Equipos'
  | 'Especificaciones'
  | 'InformacionTecnica'
  | 'InputActividad'
  | 'Marcas'
  | 'Marketing'
  | 'Oem'
  | 'Peligro'
  | 'ReferenciaAplicaciones'
  | 'RevistasTecnicas'
  | 'Rss'
  | 'SustitucionProducto'
  | 'TipoEquipos'
  | 'Webinars'
  | 'Calculator'
  | 'WorldFlag'
  | 'Germany'
  | 'China';

export interface IconProps {
  color?: string;
  size?: number;
  icon?: iconsType;
  onClick?: () => void;
  ariaLabel?: string;
  role?: string;
  src?: string;
  className?: string;
}

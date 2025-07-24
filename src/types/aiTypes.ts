export interface PostsByPersonas {
  id: string;
  title: string;
  descricao: string;
  imagem: string;
  personaId: string;
  hashtags: string[];
  createdAt: Date;
}
export interface PostSheduled {
  post: PostsByPersonas;
  date: string;
  time: string;
}
export interface Persona {
  id: string;
  title: string;
  short_description: string;
  nome: string;
  idade: string;
  profissao: string;
  interesses: string;
  objetivos: string;
  desafios: string;
  como_ajuda: string;
  comportamento_digital: string;
  poder_aquisitivo: string;
  localizacao: string;
  nivel_educacional: string;
  estado_civil: string;
  numero_de_filhos: string;
  preferencias_de_marca: string;
  frequencia_de_viagem: string;
  createdAt: Date;
  postsByPersonas: PostsByPersonas[];
}

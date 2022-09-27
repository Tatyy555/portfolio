interface SanityBody{
  _createdAt:string;
  _id:string;
  _rev:string;
  _updatedAt:string;
}

interface Image{
  _type:"image";
  assert:{
    _ref: string;
    _type: "reference";
  }
}

export interface Technology extends SanityBody{
  _type:"skill";
  image:Image;
  progress:number;
  title:string;
}

export interface Skill extends SanityBody{
  _type:"skill";
  image:Image;
  progress:number;
  title:string;
}

export interface Project extends SanityBody{
  title:string;
  _type:"project";
  image:Image;
  linkToBuild:string;
  summary:string;
  technologies:Technology[];
}
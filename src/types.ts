export interface WebSiteList {
  id:number,
  name:string,
  url:string,
  description:string
  webSiteUrl:string
  titleId: number;
}

export interface WebSites {
  id: number;
  title: string;
  url: string;
  
  list: WebSiteList[];
}

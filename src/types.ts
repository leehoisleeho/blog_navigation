interface WebSiteList {
  id:number,
  name:string,
  url:string,
  des:string
}

export interface WebSites {
  id: number;
  title: string;
  url: string;
  list: WebSiteList[];
}

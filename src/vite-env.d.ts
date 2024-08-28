/// <reference types="vite/client" />
declare module "@/http/api" {
  export function getTitles(): Promise<{ data: any[] }>; // 根据实际情况调整 any 类型
  export function getWebsites(): Promise<{ data: any[] }>; // 根据实际情况调整 any 类型
}

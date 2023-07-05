import {contextBridge, ipcRenderer} from "electron";

// Listening to events
export const api = {
  sendMessage:(message:string) => {
    ipcRenderer.send('message', message)
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Main', api)
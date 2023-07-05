import {app, BrowserWindow, Menu, ipcMain, screen} from 'electron';
import path from 'node:path';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
    const size = screen.getPrimaryDisplay().workAreaSize;
    const width = parseInt(String(size.width * 0.5));
    const height = parseInt(String(size.height * 0.5));
    win = new BrowserWindow({
        icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
        useContentSize: true,
        transparent: true,
        // backgroundColor: '#f6f8fa',
        frame: false,
        titleBarStyle: 'hidden',
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    if (size.width <= 1024) {
        win.maximize();
    } else {
        win.setContentSize(width, height);
        win.center();
    }

    // Test active push message to Renderer-process.
    win.webContents.on('did-finish-load', () => {
        win?.webContents.send('main-process-message', (new Date).toLocaleString())
    })

    Menu.setApplicationMenu(null);
    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL);
        win.webContents.openDevTools();
    } else {
        win.loadFile(path.join(process.env.DIST, 'index.html'));
    }

}

async function registerListeners() {
    ipcMain.on('message', (_, message) => {
        console.log(message)
        if (message === 'min-app') win?.minimize();
        if (message === 'max-app') {
            const size = screen.getPrimaryDisplay().workAreaSize;
            const width = parseInt(String(size.width * 0.6));
            const height = parseInt(String(size.height * 0.6));
            if (size.width <= 1024) {
                win?.maximize();
            } else {
                win?.setContentSize(width, height);
                win?.center();
            }
        }
        if (message === 'resize-window') {
            win?.setContentSize(800, 600);
            win?.center();
        }
        // Listening window closed
        if (message === 'close-app') win?.close();
    })
}

app.on('window-all-closed', () => {
    win = null
})

app.whenReady().then(createWindow).then(registerListeners).catch(e => console.error(e));

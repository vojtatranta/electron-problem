import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import electron from 'electron'

const Menu = electron.remote.Menu
const menuTpl = [
  {
    label: 'File',
    id: 'file',
    submenu: [
      {
        label: 'Alert it',
        onClick: () => alert('File'),
      }
    ]
  }
]

const sysMenu = Menu.buildFromTemplate(menuTpl)
console.log(Menu)
console.log(sysMenu)
console.log(Menu.setApplicationMenu(sysMenu))

ReactDOM.render(<App />, document.getElementById('root'));

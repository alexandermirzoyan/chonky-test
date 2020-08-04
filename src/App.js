import React,
{
  useState,
  useCallback,
  useMemo
} from 'react';
import logo from './logo.svg';
import './App.css';

import 'chonky/style/main.css';
import {FileBrowser, FileList, FileSearch, FileToolbar, ChonkyActions} from 'chonky';

function App() {
  const [currentFolderId, setCurrentFolderId] = useState('xXre');
  const [folderChain, setFolderChain] = useState(
    [
      {id: 'xXre', name: 'My Documents'},
      {id: 'BtrE', name: 'Websites'},
      {id: 'Asde', name: 'React'}
    ]
  );

  /*const folderChain = React.useMemo(
    () => [
      { id: 'xXre', name: 'My Documents' },
      { id: 'BtrE', name: 'Websites' },
      { id: 'Asde', name: 'React' },
    ],
    []
  );*/

  const files = [
    //null, // Will show loading animation
    {id: 'xWbZ', name: 'Instructions.txt'},
    {id: 'folderId', name: 'Tools', isDir: true},
  ];

  const fileActions = useMemo(
    () => [
      ChonkyActions.CreateFolder, // Adds a button to the toolbar
      ChonkyActions.UploadFiles, // Adds a button
      ChonkyActions.DownloadFiles, // Adds a button
      ChonkyActions.CopyFiles, // Adds a button and a shortcut: Ctrl+C
      ChonkyActions.DeleteFiles, // Adds a button and a shortcut: Delete
    ],
    []
  );

  const handleFileAction = useCallback(
    (action, data) => {
      if (data.actionId === 'open_files' && data.target.id === 'folderId') {
        console.log(folderChain);

        const {id, name} = data.target;
        setFolderChain(oldFolderChain => [...oldFolderChain, {
          id,
          name
        }]);
      }
      console.log(action);
      console.log(data);
    }
  );

  return (
    <FileBrowser
      fileActions={fileActions}
      files={files}
      folderChain={folderChain}
      onFileAction={handleFileAction}
    >
      <FileToolbar/>
      <FileSearch/>
      <FileList/>
    </FileBrowser>
  );
}

export default App;

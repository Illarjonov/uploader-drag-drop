import s from './App.module.css';
import { DragDropContextUI } from './components/drag-n-drop/drag-drop-context-UI';
import { Sidebar } from './components/sidebar/sidebar';
import { Workarea } from './components/workarea/workarea';

function App() {

  return (
    <DragDropContextUI>
      <div className={s.App}>
        <Sidebar />
        <Workarea />
      </div>
    </DragDropContextUI>
  )
}

export default App;

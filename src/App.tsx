import s from './App.module.css'
import { ContextDnD } from './components/drag-n-drop/context-DnD'
import { Sidebar } from './components/sidebar/sidebar'
import { Workarea } from './components/workarea/workarea'

function App() {

  return (
    <ContextDnD>
      <div className={s.App}>
        <Sidebar />
        <Workarea />
      </div>
    </ContextDnD>
  )
}

export default App;

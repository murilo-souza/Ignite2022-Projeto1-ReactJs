import { Header } from './components/Header'
import './global.css'
import styles from './app.module.css'
import { Sidebar } from './components/Sidebar'


export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          Posts
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt rem non placeat iusto distinctio officia aspernatur esse fugiat iste voluptate laboriosam ipsam inventore alias, veritatis nihil dolores, odio pariatur.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque rerum doloremque officiis magnam esse, molestiae eos provident tempora mollitia, harum sed quia illum molestias sint, assumenda autem hic? Consequuntur, excepturi.
        </main>
      </div>
    </div>
  )
}


import styles from './styles.module.css';
import {PencilLine} from 'phosphor-react'


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"/>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/murilo-souza.png"/>
                <strong>Murilo Souza</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil  
                </a>
            </footer>
        </aside>
    )
}
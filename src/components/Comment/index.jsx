import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';
import { Avatar } from '../Avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1
        })
    }



    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/murilo-souza.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Murilo Souza</strong>
                            <time title="11 de Maio às 8h13" dateTime='2022-13-12 18:54:44'>Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}
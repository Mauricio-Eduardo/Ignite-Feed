import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Mauricio-Eduardo.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mauricio Eduardo</strong>
                            <time title='11 de Fevereiro as 20:07h'>Cerca de 1h atrás</time> 
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        Muito bom Mauricio, parabéns!!
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
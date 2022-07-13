import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/gabrieldevloper.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria Nathalia</strong>
                            <time title="13 de julho de 2022" dateTime="2022-07-13">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom devon parabéns</p>
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
import styles from "./Post.module.css";

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/gabrieldevloper.png" />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Barret</strong>
                        <span>Backend Developer</span>
                    </div>
                </div>
                <time title="11 de Maio ás 10:53" dateTime="2022-05-11 08:13:12">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
        
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>  

                <p>👉 jane.design/doctorcare</p>   

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p> 
            </div>
        </article>
    )
}


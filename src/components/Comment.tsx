import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState, useEffect } from 'react';

// Definindo a interface para as propriedades do componente Comment
interface CommentProps {
    content: string; // Texto do comentário
    onDeleteComment: () => void; // Função chamada quando o comentário é deletado
    onLikeComment: () => void; // Função chamada quando o comentário é curtido
    commentId: number; // Identificador único do comentário
    likes: number; // Número inicial de curtidas no comentário
}

// Componente Comment para exibir um comentário com opções de curtir e deletar
export function Comment({ content, onDeleteComment, onLikeComment, commentId, likes }: CommentProps) {
    // Define o estado para a contagem de curtidas, inicializando a partir do localStorage ou do número de curtidas fornecido
    const [likeCount, setLikeCount] = useState<number>(() => {
        const savedLikes = localStorage.getItem(`likes_${commentId}`);
        return savedLikes ? Number(savedLikes) : likes;
    });

    // Salva a contagem de curtidas no localStorage sempre que ela muda
    useEffect(() => {
        localStorage.setItem(`likes_${commentId}`, JSON.stringify(likeCount));
    }, [likeCount, commentId]);

    // Função chamada quando o botão de curtir é clicado
    const handleLikeComment = () => {
        const newLikeCount = likeCount + 1;
        setLikeCount(newLikeCount);
        onLikeComment();
    };

    // Função chamada quando o botão de deletar é clicado
    const handleDeleteComment = () => {
        onDeleteComment();
    };

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                className={styles.avatar} 
                src="https://github.com/Rocketseat.png" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Usuário</strong>
                            <time 
                                title="1 de junho às 10:30" 
                                dateTime="2024-06-01 10:30:30"
                            >
                                cerca de 1h atrás
                            </time>
                        </div>
                        <button 
                            onClick={handleDeleteComment}
                            title="Delete Comment" 
                            className={styles.deleteButton}
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button 
                        onClick={handleLikeComment}
                        className={styles.applaudButton}
                    >
                        <ThumbsUp />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

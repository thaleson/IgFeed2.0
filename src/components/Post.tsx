import { format, formatDistanceToNow } from 'date-fns';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { ptBR as localePTBR } from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

// Interface para definir a estrutura do objeto Author
interface Author {
  name: string;
  avatarUrl: string;
  role: string; // Adicionei a propriedade role, que estava faltando
  id: number;
}

// Interface para definir a estrutura do objeto ContentLine
interface ContentLine {
  type: 'paragraph' | 'link';
  content: string;
}


export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: ContentLine[];
}

// Interface para definir as propriedades do componente Post
interface PostProps {
 posts:PostType
}

// Interface para definir a estrutura do objeto CommentType
interface CommentType {
  id: number;
  text: string;
  likes: number;
}

// Componente Post
export function Post({ posts }: PostProps) {
  // Estado para armazenar os comentários
  const [comments, setComments] = useState<CommentType[]>(() => {
    const savedComments = localStorage.getItem(`comments_${posts.author.id}`);
    return savedComments ? JSON.parse(savedComments) : [{ id: 1, text: "Post muito bacana, hein?", likes: 1000 }];
  });

  const [newCommentText, setNewCommentText] = useState('');

  // Efeito colateral para salvar os comentários no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem(`comments_${posts.author.id}`, JSON.stringify(comments));
  }, [comments,posts. author.id]);

  // Formatação da data de publicação
  const publishedDateFormatted = format(posts.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: localePTBR,
  });

  // Cálculo do tempo relativo desde a publicação
  const publishedDateRelativeToNow = formatDistanceToNow(posts.publishedAt, {
    locale: localePTBR,
    addSuffix: true,
  });

  // Função para lidar com a criação de um novo comentário
  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();
    if (newCommentText.trim() !== '') {
      const newComment: CommentType = {
        id: Date.now(), // Identificador único para o comentário
        text: newCommentText,
        likes: 0
      };
      setComments((prevComments: CommentType[]) => [...prevComments, newComment]);
      setNewCommentText(''); // Limpa o campo de comentário
    }
  };

  // Função para deletar um comentário
  const deleteComment = (commentId: number) => {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.id !== commentId);
    setComments(commentsWithoutDeletedOne);
  };

  // Função para curtir um comentário
  const handleLikeComment = (commentId: number) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
  };

  // Função para lidar com a invalidação do novo comentário
  const handleNewCommentInvalid = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('Esse campo é obrigatório');
  };

  // Função para lidar com a mudança do novo comentário
  const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('');
    setNewCommentText(e.target.value);
  };

  const isNewCommentEmpty = newCommentText.trim() === '';

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={posts.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{posts.author.name}</strong>
            <span>{posts.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={posts.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {posts.content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a href="https://portfolio-projetos-rho.vercel.app/">{line.content}</a>
              </p>
            );
          }
          return null;
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback:</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            content={comment.text}
            key={comment.id}
            commentId={comment.id}
            likes={comment.likes}
            onDeleteComment={() => deleteComment(comment.id)}
            onLikeComment={() => handleLikeComment(comment.id)}
          />
        ))}
      </div>
    </article>
  );
}

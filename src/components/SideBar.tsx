import { Avatar } from './Avatar';
import styles from './SiderBar.module.css';
import { PencilLine } from 'phosphor-react'; // Importa o ícone de linha de lápis da biblioteca phosphor-react

// Função que define o componente Sidebar
export function Sidebar() {
    return (
        // Elemento <aside> estilizado com a classe sidebar
        <aside className={styles.sidebar}>
            {/* Imagem de capa do perfil */}
            <img
                className={styles.cover} // Classe CSS para estilizar a imagem de capa
                src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cover Image"
            />

            {/* Div para o perfil do usuário */}
            <div className={styles.profile}>
                {/* Componente Avatar que mostra a imagem de avatar do usuário */}
                <Avatar src="https://github.com/thaleson.png" />

                {/* Nome e cargo do usuário */}
                <strong>Thaleson Silva</strong>
                <span>Dev Full Stack</span>
            </div>

            {/* Rodapé do perfil com um link para editar o perfil */}
            <footer>
                <a href="#">
                    {/* Ícone de lápis para editar */}
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

            <footer className={styles.footer}>
               <a href="https://www.linkedin.com/in/thaleson-silva-9298a0296/">Site desenvolvido por Thaleson Silva</a> 
            </footer>
        </aside>
    );
}

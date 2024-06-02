import styles from './Header.module.css'; // Importa os estilos CSS do arquivo 'Header.module.css'
import IgFeed from '../assets/ignitefeed.svg'; // Importa a imagem do logo a partir do caminho especificado

// Define e exporta o componente de Header
export function Header() {
    return (
        // Define o elemento header com a classe CSS especificada
        <header className={styles.header}>
            {/* Insere a imagem do logo com o texto alternativo */}
            <img src={IgFeed} alt="logoignite" />
        </header>
    );
}

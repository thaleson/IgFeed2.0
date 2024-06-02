import styles from './Avatar.module.css';

// Definindo a interface para as propriedades do componente Avatar
interface AvatarProps {
    hasBorder?: boolean; // Propriedade opcional para determinar se o avatar deve ter uma borda
    src: string;        // URL da imagem a ser exibida no avatar
    className?: string; // Propriedade opcional para adicionar classes CSS adicionais
}

// Componente Avatar para exibir uma imagem de avatar com opções de borda e classes adicionais
export function Avatar({ hasBorder = true, src, className }: AvatarProps) {
    // Determina a classe CSS a ser usada com base na propriedade hasBorder
    const avatarClassName = hasBorder ? styles.avatarWithBorder : styles.avatar;

    return (
        <img
            // Concatena as classes CSS do componente com as classes adicionais fornecidas
            className={`${avatarClassName} ${className}`}
            src={src} // Define a URL da imagem
        />
    );
}

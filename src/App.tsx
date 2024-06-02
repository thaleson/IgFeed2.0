// Importações dos componentes e estilos necessários
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import { Post, PostType } from "./components/Post"; // Importação da tipagem e do componente Post

import styles from './App.module.css'; // Estilos modulares do componente App
import './global.css'; // Estilos globais para toda a aplicação
// Array de posts
const posts: PostType[] = [
  // Definição de objetos de postagem com diferentes autores, conteúdos e datas de publicação
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thaleson.png",
      name: "Thaleson Silva",
      role: "Dev Full Stack and Data Scientist",
      id: 0
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.🚀' },
      { type: 'link', content: '👉 Thaleson.Dev Full Stack and Data Scientist/port<' },
    ],
    publishedAt: new Date('2024-06-01 20:20:20'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?w=826&t=st=1717342834~exp=1717343434~hmac=984409be2c1ebc5aa46d2b6d1b5543af9d5ebe94af90d52002f3d12e9679f4ff;png",
      name: "Diego Gonçalves",
      role: "Dev web",
      id: 0
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de terminar mais um projeto 🚀' },
      { type: 'link', content: '👉Diego.Devweb/doctorcare' },
    ],
    publishedAt: new Date('2024-06-02 11:20:20'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://wikipediamy.com/wp-content/uploads/2023/02/mark-zuckerberg.png",
      name: "Mark Zuckerberg",
      role: "CEO @Facebook and Instagram",
      id: 0
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Mais um project guys 🚀' },
      { type: 'link', content: '👉CEO/project' },
    ],
    publishedAt: new Date('2024-06-01 20:20:20'),
  },
  {

    id: 4,
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      role: "Software Engineer",
      id: 1
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone! 👋' },
      { type: 'paragraph', content: 'Just finished another coding project! 🚀' },
      { type: 'link', content: '👉Check it out here' },
    ],
    publishedAt: new Date('2024-06-01 14:30:00'),
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Emily Smith",
      role: "UX Designer",
      id: 2
    },
    content: [
      { type: 'paragraph', content: 'Hey guys! 👋' },
      { type: 'paragraph', content: 'Excited to share my latest design project with you! 🎨' },
      { type: 'link', content: '👉View the project details here' },
    ],
    publishedAt: new Date('2024-05-09 10:45:00'),
  },
  {
    id: 6,
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Michael Johnson",
      role: "Frontend Developer",
      id: 3
    },
    content: [
      { type: 'paragraph', content: 'Hey everyone! 👋' },
      { type: 'paragraph', content: 'Just pushed some updates to my portfolio. Check it out! 🚀' },
      { type: 'link', content: '👉Visit my portfolio' },
    ],
    publishedAt: new Date('2024-04-29 09:15:00'),
  },
  {
    id: 7,
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sophia Lee",
      role: "Graphic Designer",
      id: 4
    },
    content: [
      { type: 'paragraph', content: 'Hello friends! 👋' },
      { type: 'paragraph', content: 'Sharing some of my recent design projects. Let me know what you think! 🎨' },
      { type: 'link', content: '👉See my designs' },
    ],
    publishedAt: new Date('2024-04-29 12:30:00'),
  },
  {
    id: 8,
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Daniel Brown",
      role: "Software Developer",
      id: 5
    },
    content: [
      { type: 'paragraph', content: 'Hey everyone! 👋' },
      { type: 'paragraph', content: 'Just launched a new app! Check it out and let me know your thoughts. 📱' },
      { type: 'link', content: '👉Download the app' },
    ],
    publishedAt: new Date('2024-03-03 15:20:00'),
  },
  {
    id: 9,
    author: {
      avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Jessica Taylor",
      role: "UI Designer",
      id: 6
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone! 👋' },
      { type: 'paragraph', content: 'Sharing some of my latest UI designs. Feedback is appreciated! 💻' },
      { type: 'link', content: '👉View my designs' },
    ],
    publishedAt: new Date('2024-02-07 11:10:00'),
  },


];

// Componente principal da aplicação
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* Mapeando e renderizando os posts */}
          {posts.map(post => (
            <Post
              key={post.id} // Chave única para o componente Post
              posts={post}  // Passando os dados do post para o componente Post
            />
          ))}
        </main>
      </div>
    </div>
  );
}

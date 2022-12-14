import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './app.module.css'


const posts=[
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/murilo-souza.png",
      name: 'Murilo Souza',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifaaaaaaaaaaaaaaaaaaaaaa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-21 18:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Kathleen-Weiss.png",
      name: 'Kathleen Weiss',
      role: 'Data Scientist',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-12 18:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/murilo-souza.png",
      name: 'Murilo Souza',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-12 18:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post=>(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}


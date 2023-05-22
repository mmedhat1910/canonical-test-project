import { useState, useEffect } from 'react'
import Card from './Card'

function App() {
  const [posts, setPosts] = useState([] as any)
  useEffect(() => {
    if (posts.length > 0) return
    fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  }, [posts])


  return (
    <div className='app'>
      <div className='main row'>
        {posts.map((post: any) => (
          <div className='col-4' key={post.id}>
            <Card title={post.title.rendered} author={{
              name: post._embedded.author.find((a: any) => a.id === post.author).name,
              link: post._embedded.author.find((a: any) => a.id === post.author).link
            }} topic={post._embedded['wp:term'].map((arr: any) => {
              const topic = arr.find((t: any) => t.id === post.topic[0])
              if (topic) {
                return topic.name
              }
            }).find((name:any)=> name !== undefined)
            } date={post.date} image={post.featured_media} category={post._embedded['wp:term'].map((arr: any) => {
              const category = arr.find((t: any) => t.taxonomy === 'category')
              if (category) {
                return category.name
              }
            }).find((name: any) => name !== undefined)} link={''} />
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App

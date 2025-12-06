'use client'

import { useState, useEffect, useCallback } from 'react'
import NewPostModal from './NewPostModal'

const API_URL = 'https://site-production-c50d.up.railway.app/api'

interface Post {
  id: number
  title: string
  content: string
  author: string
}

export default function Blog() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'titleAsc'>('newest')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const postsPerPage = 6

  const loadPosts = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/posts`)
      const posts = await response.json()
      setAllPosts(posts)
    } catch (error) {
      console.error('Error loading posts:', error)
    }
  }, [])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  useEffect(() => {
    let filtered = [...allPosts]

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term) ||
          post.author.toLowerCase().includes(term)
      )
    }

    // Apply sort
    if (sortBy === 'newest') {
      filtered.sort((a, b) => b.id - a.id)
    } else if (sortBy === 'oldest') {
      filtered.sort((a, b) => a.id - b.id)
    } else if (sortBy === 'titleAsc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    setFilteredPosts(filtered)
    setCurrentPage(1)
  }, [allPosts, searchTerm, sortBy])

  const deletePost = async (id: number) => {
    if (confirm('Bu yazıyı silmek istediğinize emin misiniz?')) {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
          method: 'DELETE'
        })

        if (response.ok) {
          loadPosts()
        }
      } catch (error) {
        console.error('Error deleting post:', error)
      }
    }
  }

  const handleNewPost = async (post: { title: string; content: string; author: string }) => {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      })

      if (response.ok) {
        setIsModalOpen(false)
        loadPosts()
      }
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const postsToDisplay = filteredPosts.slice(startIndex, endIndex)
  const maxPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <>
      <section id="blog" className="section container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Yazılarım</h2>
            <p className="section-description">
              Aşağıdaki listede backend üzerinden gelen blog yazıların görünüyor.
            </p>
          </div>
          <div className="blog-controls">
            <input
              type="text"
              placeholder="Yazı ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}>
              <option value="newest">En Yeni</option>
              <option value="oldest">En Eski</option>
              <option value="titleAsc">Başlığa Göre (A-Z)</option>
            </select>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              Yeni Yazı
            </button>
          </div>
        </div>

        <div className="posts-grid">
          {postsToDisplay.length === 0 ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: 'white' }}>
              Yazı bulunamadı.
            </p>
          ) : (
            postsToDisplay.map((post) => (
              <article key={post.id} className="post-card">
                <button
                  className="delete-btn"
                  onClick={() => deletePost(post.id)}
                >
                  Sil
                </button>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <div className="author">Yazarı: {post.author}</div>
              </article>
            ))
          )}
        </div>

        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            ← Önceki
          </button>
          <span style={{ color: '#e5e7ff', fontSize: '15px', minWidth: '80px', textAlign: 'center' }}>
            Sayfa {currentPage} / {maxPages || 1}
          </span>
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(p => Math.min(maxPages, p + 1))}
            disabled={currentPage >= maxPages}
          >
            Sonraki →
          </button>
        </div>
      </section>

      <NewPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewPost}
      />
    </>
  )
}


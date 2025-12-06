'use client'

import { FormEvent } from 'react'

interface NewPostModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (post: { title: string; content: string; author: string }) => Promise<void>
}

export default function NewPostModal({ isOpen, onClose, onSubmit }: NewPostModalProps) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const author = formData.get('author') as string

    await onSubmit({ title, content, author })
    e.currentTarget.reset()
  }

  if (!isOpen) return null

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Yeni Yazı Oluştur</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Yazı Başlığı" required />
          <textarea name="content" placeholder="Yazı İçeriği" rows={5} required></textarea>
          <input type="text" name="author" placeholder="Adınız" required />
          <button type="submit">Yayınla</button>
        </form>
      </div>
    </div>
  )
}


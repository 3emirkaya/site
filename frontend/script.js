const API_URL = 'https://site-production-c50d.up.railway.app/api';

// DOM Elements
const postsDiv = document.getElementById('posts');
const modal = document.getElementById('modal');
const newPostBtn = document.getElementById('newPostBtn');
const closeBtn = document.querySelector('.close');
const postForm = document.getElementById('postForm');
const searchInput = document.getElementById('searchInput');
const sortBy = document.getElementById('sortBy');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');

// Pagination settings
let allPosts = [];
let filteredPosts = [];
let currentPage = 1;
const postsPerPage = 6;

// Event Listeners
newPostBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const newPost = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value,
    author: document.getElementById('author').value
  };
  
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    });
    
    if (response.ok) {
      postForm.reset();
      modal.classList.add('hidden');
      loadPosts();
    }
  } catch (error) {
    console.error('Error creating post:', error);
  }
});

// Search functionality
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.author.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  applySort();
  displayPosts();
});

// Sort functionality
sortBy.addEventListener('change', () => {
  currentPage = 1;
  applySort();
  displayPosts();
});

function applySort() {
  const sortValue = sortBy.value;
  if (sortValue === 'newest') {
    filteredPosts.sort((a, b) => b.id - a.id);
  } else if (sortValue === 'oldest') {
    filteredPosts.sort((a, b) => a.id - b.id);
  } else if (sortValue === 'titleAsc') {
    filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
  }
}

// Pagination
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPosts();
  }
});

nextBtn.addEventListener('click', () => {
  const maxPages = Math.ceil(filteredPosts.length / postsPerPage);
  if (currentPage < maxPages) {
    currentPage++;
    displayPosts();
  }
});

// Delete post
async function deletePost(id) {
  if (confirm('Bu yazıyı silmek istediğinize emin misiniz?')) {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        loadPosts();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }
}

// Display posts for current page
function displayPosts() {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filteredPosts.slice(startIndex, endIndex);
  
  postsDiv.innerHTML = '';
  
  if (postsToDisplay.length === 0) {
    postsDiv.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: white;">Yazı bulunamadı.</p>';
  } else {
    postsToDisplay.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'post-card';
      postCard.innerHTML = `
        <button class="delete-btn" onclick="deletePost(${post.id})">Sil</button>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <div class="author">Yazarı: ${post.author}</div>
      `;
      postsDiv.appendChild(postCard);
    });
  }
  
  // Update pagination buttons
  const maxPages = Math.ceil(filteredPosts.length / postsPerPage);
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === maxPages;
  pageInfo.textContent = `Sayfa ${currentPage} / ${maxPages || 1}`;
}

// Load posts from API
async function loadPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`);
    allPosts = await response.json();
    filteredPosts = [...allPosts];
    currentPage = 1;
    applySort();
    displayPosts();
  } catch (error) {
    console.error('Error loading posts:', error);
    postsDiv.innerHTML = '<p style="color: white;">Backend sunucusu http://localhost:5000 adresinde çalışıyor olmalı.</p>';
  }
}

// Load posts on page load
loadPosts();

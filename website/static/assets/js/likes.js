// Song Likes System
// Communicates with Cloudflare Worker API to track song likes

const API_BASE = 'https://jod-likes-api.ianmc.workers.dev';

// Safe localStorage helpers (handle private browsing, quota errors, etc.)
function getLikedSongs() {
  try {
    const data = JSON.parse(localStorage.getItem('jod-liked-songs') || '[]');
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function setLikedSongs(songs) {
  try {
    localStorage.setItem('jod-liked-songs', JSON.stringify(songs));
  } catch {
    // localStorage unavailable or quota exceeded, ignore
  }
}

async function initializeLikes() {
  const likeSection = document.querySelector('.song-like-section');
  if (!likeSection) return;

  const songId = likeSection.dataset.songId;
  const button = likeSection.querySelector('.like-button');
  const countSpan = likeSection.querySelector('.like-count');

  // Check if already liked (localStorage)
  const likedSongs = getLikedSongs();
  const hasLiked = likedSongs.includes(songId);

  if (hasLiked) {
    button.classList.add('liked');
    button.querySelector('.heart-icon').textContent = '♥';
  }

  // Fetch current count
  const count = await fetchLikeCount(songId);
  countSpan.textContent = count;

  // Handle click
  button.addEventListener('click', () => toggleLike(songId, button, countSpan));
}

async function toggleLike(songId, button, countSpan) {
  const likedSongs = getLikedSongs();
  const hasLiked = likedSongs.includes(songId);

  // Optimistic UI update
  if (hasLiked) {
    button.classList.remove('liked');
    button.querySelector('.heart-icon').textContent = '♡';
    countSpan.textContent = Math.max(0, parseInt(countSpan.textContent) - 1);
  } else {
    button.classList.add('liked');
    button.querySelector('.heart-icon').textContent = '♥';
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  }

  try {
    // API call
    const response = await fetch(`${API_BASE}/api/likes/${songId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: hasLiked ? 'unlike' : 'like' })
    });

    const data = await response.json();
    countSpan.textContent = data.count;

    // Update localStorage
    if (hasLiked) {
      setLikedSongs(likedSongs.filter(id => id !== songId));
    } else {
      setLikedSongs([...likedSongs, songId]);
    }
  } catch (err) {
    // Revert optimistic update on error
    if (hasLiked) {
      button.classList.add('liked');
      button.querySelector('.heart-icon').textContent = '♥';
    } else {
      button.classList.remove('liked');
      button.querySelector('.heart-icon').textContent = '♡';
    }
    console.error('Failed to update like:', err);
  }
}

async function fetchLikeCount(songId) {
  try {
    const response = await fetch(`${API_BASE}/api/likes/${songId}`);
    const data = await response.json();
    return data.count || 0;
  } catch {
    return 0;
  }
}

// Initialize on page load (handle both cases: script in head vs footer)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLikes);
} else {
  initializeLikes();
}

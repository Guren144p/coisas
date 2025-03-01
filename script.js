document.addEventListener('DOMContentLoaded', function() {
    const seasonSelect = document.getElementById('seasonSelect');
    const seasons = document.querySelectorAll('.serverEpisode');
    const iframes = document.getElementById('videoFrame');
    const playerPlaceholder = document.getElementById('playerPlaceholder');
  
    function updateEpisodeList() {
      const selectedSeason = seasonSelect.value;
  
      seasons.forEach(season => {
        if (season.id === 'season' + selectedSeason) {
          season.classList.remove('hidden');
          setTimeout(() => {
            season.classList.add('active');
          }, 10); 
        } else {
          season.classList.remove('active');
          setTimeout(() => {
            season.classList.add('hidden');
          }, 500); 
        }
      });
    }
  
    function loadVideo(url, episodeElement) {
      iframes.src = url;
      playerPlaceholder.style.display = 'none';
  
      document.querySelectorAll('.episode-title').forEach(episode => {
        episode.classList.remove('active-episode');
      });
  
      episodeElement.classList.add('active-episode');
    }
  
    seasonSelect.addEventListener('change', updateEpisodeList);
    document.getElementById('episode-list').addEventListener('click', function(event) {
      if (event.target.classList.contains('episode-title')) {
        const selectedDiv = event.target.parentElement;
        const videoUrl = selectedDiv.getAttribute('data-embed');
        loadVideo(videoUrl, event.target);
      }
    });
  
    updateEpisodeList();
  });
  
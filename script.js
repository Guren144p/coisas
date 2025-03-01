<script>
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
            }, 10); // Pequeno atraso para permitir que a classe "hidden" seja removida
          } else {
            season.classList.remove('active');
            setTimeout(() => {
              season.classList.add('hidden');
            }, 500); // Aguarda a transição antes de adicionar a classe "hidden"
          }
        });
      }

      function loadVideo(url) {
        iframes.src = url;
        playerPlaceholder.style.display = 'none';
      }
      
      seasonSelect.addEventListener('change', updateEpisodeList);
      document.getElementById('episode-list').addEventListener('click', function(event) {
        if (event.target.classList.contains('episode-title')) {
          const selectedDiv = event.target.parentElement;
          const videoUrl = selectedDiv.getAttribute('data-embed');
          loadVideo(videoUrl);
        }
      });

      updateEpisodeList(); // Chamada inicial para garantir que a primeira temporada esteja visível
    });
    
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

    // Remover a classe 'active-episode' de todos os episódios
    document.querySelectorAll('.episode-title').forEach(episode => {
      episode.classList.remove('active-episode');
    });

    // Adicionar a classe 'active-episode' ao episódio atual
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
  </script>

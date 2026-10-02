// Set the authorized audio file's relative URL when it is supplied.
const backgroundMusicSource = '';
const audio = document.getElementById('backgroundmusic');
const toggle = document.getElementById('musictoggle');
if (backgroundMusicSource && audio && toggle) {
  audio.src = backgroundMusicSource;
  audio.volume = 0.15;
  toggle.hidden = false;
  const showPaused = () => { toggle.textContent = '开启音乐'; toggle.setAttribute('aria-pressed', 'false'); };
  audio.addEventListener('pause', showPaused);
  audio.addEventListener('error', () => { audio.pause(); toggle.textContent = '音乐暂时无法播放'; });
  toggle.addEventListener('click', async () => {
    if (!audio.paused) { audio.pause(); return; }
    try { await audio.play(); toggle.textContent = '暂停音乐'; toggle.setAttribute('aria-pressed', 'true'); }
    catch { toggle.textContent = '点击重试音乐'; }
  });
  document.addEventListener('play', (event) => { if (event.target.tagName === 'VIDEO') audio.pause(); }, true);
}

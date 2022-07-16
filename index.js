/*/ const player = {
    audio: document.querySelector('audio'),
    data: {
      aud: 'file/Marília Mendonça & Maiara e Maraisa - Quero Você Do Jeito Que Quiser.mp4'
    },
    start: function () {
      this.audio.src = this.data.aud
    }
  }
  
  player.start() 
*/
const path = function (file) {
  return `${file}`;
};

window.addEventListener("load", player.start());

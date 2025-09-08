document.addEventListener("DOMContentLoaded", function() {
    const particlesContainer = document.querySelector('.particles-container');}
  
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${Math.random() * 100}vw`;
      particlesContainer.appendChild(particle);
  
      setTimeout(() => {
        particle.remove());
      }
      
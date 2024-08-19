const handleScroll = (target, callback, depth) => {
  const header = document.querySelector(`.${target}`);

  if (window.scrollY >= depth) {
      header.classList.add(callback);
  } else {
      header.classList.remove(callback);
  }
};

export default function(target, callback, depth){
    window.addEventListener('scroll', () => handleScroll(target, callback, depth))

  return () => {
    window.removeEventListener('scroll', () => handleScroll(target, callback, depth))
  }
}

export default function (target = null, callbackClassName){

  const element = document.querySelector(`.${target.toString()}`)

  const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle(callbackClassName, e.intersectionRatio < 1),
    { threshold: [1] }
  );

  if(!element || !observer){
    console.log('can\'t be found')
  }else{
    observer.observe(element);
  }

}
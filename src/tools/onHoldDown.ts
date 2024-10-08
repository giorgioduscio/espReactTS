export default function onHoldDown(querySelector:string, mainFunction:Function) {
  let elements = document.querySelectorAll(querySelector)
  ,   startTime =0;
  if (elements) {
    elements.forEach(element=>{
      element.addEventListener('mousedown',()=>{
        startTime = Date.now();
      });
    
      element.addEventListener('mouseup',()=>{
      const timeSpent = Date.now() - startTime;
      if (timeSpent > 1000) { // Se il pulsante è stato tenuto premuto per più di 1 secondo
        console.log('Pulsante tenuto premuto per più di 1 secondo');
        // Qui puoi inserire il codice per eseguire l'azione desiderata
        mainFunction
      }
    });

    })
  }
}
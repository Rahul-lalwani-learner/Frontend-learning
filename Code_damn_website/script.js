const typingEffect = () => {
    const text = "Our students are making waves in the tech industry! Our graduates are not just acquiring knowledge, but also practical experience through their internships and projects. This has helped them secure top positions in leading tech companies like Google, HP, Microsoft, and Apple. Our students are earning competitive salaries and thriving in their careers. We're proud of their success and grateful for the opportunity to play a small part in their journey.";
    let index = 0;
    const time = 10;
    const element = document.getElementById("typing");
    console.log(element.innerHTML);
    const type = () => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, time);
      }
    };
    
    type();
  };
  
//   typingEffect();
const myDiv = document.getElementById("Placements");
let functionExecuted = false;

myDiv.addEventListener("mouseenter", function(){
    if (!functionExecuted) {
        typingEffect();
        functionExecuted = true;
      }
});

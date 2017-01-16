import { animate, stop, Promise } from "liquid-fire";

export default function(){
  this.transition(
    this.fromRoute('sign-up'),
    this.toRoute('sign-in'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}

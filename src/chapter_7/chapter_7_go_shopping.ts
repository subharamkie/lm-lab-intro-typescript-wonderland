import { askQuestion, clear, print } from '../ui/console';
import { endAdventure,haveAdventures } from '../..';
import { beverages,morningDrink } from './chapter_7.types';
import { parseInput } from '../ui/parse_input';


export function goShopping():void {
    clear(true);
    print('Waking up, you realise you are out of milk in the real world!!');
    print(
        'Quick! Run out to get some milk now. Enjoy shopping!! 🥳'
    );
    print('Choose your morning drink: ');
	beverages.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which drink would you choose?', chooseDrink);
}
export function chooseDrink(input : string){
    const choiceOfDrink = parseInput(input);
    if(choiceOfDrink === undefined){
        print(`${input} is an invalid input 😭`);
		return endAdventure();
    }
    print(`Enjoy your ${choiceOfDrink}`);
    return askQuestion(
        'Press ENTER to re-enter Wonderland! ',
        haveAdventures
    );
    
}
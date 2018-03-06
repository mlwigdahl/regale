
import fs from 'fs';

function getInput(name) {
        if (name === undefined) {
                return `Bob is a man.  "Bob is one scary dude.  His 42 hairs are currently [bob-hair-color]."

                Bob has a value called bob-hair-color.  Bob-hair-color defaults to red;
                
                The bob-rule is:
                        if bob-hair-color is not red:
                        now bob-hair-color is red.
                   
                        The Fish of Māui. The L'an'd of the Long Cloud. Aotearoa. An entire continent of untamed wilds, 
                        and the last place on Earth where dinosaurs still roam. If only you'd come ashore under better 
                        circumstances...`
        }

        return fs.readFileSync(`./data/${name}`, 'utf8');
}

export default getInput;
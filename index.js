// npm import
import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

// user input from gitbash
const input = process.argv[2];
// pass input to franc to detect language code
const langCode = franc(input);

// check if language can be defined
if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT".red)
} else {
    // pass language code to detect language details
    const language = langs.where("3", langCode);
    // ouput language name
    console.log(`Our best guess is: ${language.name}`.green);
}

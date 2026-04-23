
import { build } from './builder.js';


import { startServer } from './server.js';

console.log("--- DÉMARRAGE DU GÉNÉRATEUR ---");

try {
    
    build(); 
    
  
    startServer(3000); 

} catch (erreur) {
    console.error("Oups, quelque chose a planté :", erreur);
}
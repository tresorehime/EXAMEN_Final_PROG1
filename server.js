import http from 'http';
import path from 'path';
import fs from 'fs';


 
export const startServer = (port = 3000) => {
    const DIST_DIR = './dist';

    // Création du serveur
    const SERVER = http.createServer((request, response) => {
       
        let filePath = request.url === '/' ? '/index.html' : request.url;
        const fullPath = path.join(process.cwd(), DIST_DIR, filePath);

        fs.readFile(fullPath, (err, content) => {
            if (err) {
                
                response.writeHead(404);
                response.end('Erreur 404 : Page introuvable ! Verifiez que le dossier /dist a bien ete genere.');
                return;
            }

        
            const EXT = path.extname(fullPath);
            const contentType = EXT === '.html' ? 'text/html' : 'text/plain';

            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content);
        });
    });

    // Démarrage du serveur 
    SERVER.listen(port, () => {
        console.log(`🌍 Serveur démarré sur http://localhost:${port}`);
        console.log(`💡 Astuce : Si tu ne vois rien, verifie que le builder a bien cree le dossier /dist`);
    });
};
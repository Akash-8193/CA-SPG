const fs = require('fs');
const path = require('path');

const replacements = {
    '#ABC5CF': '#FFE4E1',
    '#abc5cf': '#FFE4E1',
    '#010101': '#1A1A1A',
    '#A60311': '#FF3D3D',
    '#a60311': '#FF3D3D',
    '166, 3, 17': '255, 61, 61' // for rgba in globals.css
};

function fixFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            fixFiles(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;
            
            for (const [oldVal, newVal] of Object.entries(replacements)) {
                const regex = new RegExp(oldVal, 'g');
                content = content.replace(regex, newVal);
            }
            
            if (content !== original) {
                fs.writeFileSync(filePath, content);
                console.log('Fixed ' + filePath);
            }
        }
    }
}
fixFiles('./src');

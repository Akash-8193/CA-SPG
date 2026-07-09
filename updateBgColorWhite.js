const fs = require('fs');
const path = require('path');

const replacements = {
    '#EDF2F4': '#FFFFFF',
    '#edf2f4': '#FFFFFF'
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
                const regex = new RegExp(oldVal, 'gi');
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

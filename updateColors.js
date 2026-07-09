const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            fixFiles(filePath);
        } else if (filePath.endsWith('.tsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;
            
            // Fix trailing slashes first
            content = content.replace(/bg-deep-navy\/\s/g, 'bg-deep-navy/10 ');
            content = content.replace(/bg-deep-navy\/'/g, "bg-deep-navy/10'");
            content = content.replace(/bg-deep-navy\/\"/g, 'bg-deep-navy/10"');
            content = content.replace(/text-deep-navy\/\s/g, 'text-deep-navy/50 ');
            content = content.replace(/text-deep-navy\/\"/g, 'text-deep-navy/50"');
            content = content.replace(/border-deep-navy\/\s/g, 'border-deep-navy/20 ');
            content = content.replace(/border-deep-navy\/\"/g, 'border-deep-navy/20"');
            
            // Replace semantic names with EXACT hex codes the user provided
            content = content.replace(/bg-warm-white/g, 'bg-[#ABC5CF]');
            content = content.replace(/from-warm-white/g, 'from-[#ABC5CF]');
            content = content.replace(/via-warm-white/g, 'via-[#ABC5CF]');
            content = content.replace(/to-warm-white/g, 'to-[#ABC5CF]');
            
            content = content.replace(/text-deep-navy/g, 'text-[#010101]');
            content = content.replace(/bg-deep-navy/g, 'bg-[#010101]');
            content = content.replace(/border-deep-navy/g, 'border-[#010101]');
            content = content.replace(/from-deep-navy/g, 'from-[#010101]');
            content = content.replace(/via-deep-navy/g, 'via-[#010101]');
            
            content = content.replace(/text-luxury-gold/g, 'text-[#A60311]');
            content = content.replace(/bg-luxury-gold/g, 'bg-[#A60311]');
            content = content.replace(/border-luxury-gold/g, 'border-[#A60311]');
            
            if (content !== original) {
                fs.writeFileSync(filePath, content);
                console.log('Fixed ' + filePath);
            }
        }
    }
}
fixFiles('./src/components');
fixFiles('./src/app');

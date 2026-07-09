const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /text-\[\#1A1A1A\]\/50/g, replacement: 'text-[#1A1A1A]/80' },
  { regex: /text-\[\#1A1A1A\]\/60/g, replacement: 'text-[#1A1A1A]/90' },
  { regex: /text-white\/50/g, replacement: 'text-white/80' },
  { regex: /text-white\/60/g, replacement: 'text-white/90' },
  { regex: /text-gray-500/g, replacement: 'text-[#1A1A1A]/80' },
  { regex: /text-gray-600\/90/g, replacement: 'text-[#1A1A1A]/90' },
  { regex: /text-gray-600/g, replacement: 'text-[#1A1A1A]/80' },
  { regex: /text-slate-gray/g, replacement: 'text-[#1A1A1A]/80' },
  { regex: /text-\[\#1A1A1A\]\/70/g, replacement: 'text-[#1A1A1A]/90' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Text opacities updated successfully.');

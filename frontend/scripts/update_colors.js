const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../public/team04.json');

const colorsToReplace = [
    {
        original: [0.055, 0.647, 0.914], // Blue
        replacement: [0.0, 0.8, 1.0] // Bright Skyblue
    },
    {
        original: [0.388, 0.4, 0.945], // Purple/Blue
        replacement: [0.85, 0.85, 0.85] // Light Gray
    },
    {
        original: [0.796, 0.835, 0.882], // Light Gray
        replacement: [0.2, 0.2, 0.2] // Dark Gray
    },
    {
        original: [0.118, 0.161, 0.231], // Dark Blue
        replacement: [0, 0, 0] // Black
    },
    {
        original: [0.8667, 0.8706, 0.9804], // Light Blueish
        replacement: [0.2, 0.2, 0.2] // Dark Gray
    }
];

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        // Use a small epsilon for float comparison
        if (Math.abs(a[i] - b[i]) > 0.001) return false;
    }
    return true;
}

function traverseAndReplace(obj) {
    if (typeof obj === 'object' && obj !== null) {
        // Check if this object looks like a color property "k": [r,g,b] inside "c" or similar
        // Lottie structure: property "c" (color) -> "k" (value) which is array
        // Sometimes "k" is inside keys.

        // But simpler: just look for arrays of length 3 or 4 that match our colors
        if (Array.isArray(obj)) {
            if (obj.length >= 3 && typeof obj[0] === 'number') {
                for (const map of colorsToReplace) {
                    if (arraysEqual(obj.slice(0, 3), map.original)) {
                        console.log(`Replacing color ${obj} with ${map.replacement}`);
                        obj[0] = map.replacement[0];
                        obj[1] = map.replacement[1];
                        obj[2] = map.replacement[2];
                    }
                }
            }
            obj.forEach(item => traverseAndReplace(item));
        } else {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    traverseAndReplace(obj[key]);
                }
            }
        }
    }
}

try {
    const data = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(data);

    traverseAndReplace(json);

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2)); // Write back formatted
    console.log('Successfully updated colors in team04.json');
} catch (err) {
    console.error('Error processing file:', err);
}

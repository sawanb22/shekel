const fs = require('fs');
const https = require('https');

const fileKey = 'Yj9hI04koEndwwwkRN6g29';
const nodeId = '508:7444';
const token = process.env.FIGMA_TOKEN;

if (!token) {
  console.error("No FIGMA_TOKEN found.");
  process.exit(1);
}

const options = {
  hostname: 'api.figma.com',
  path: `/v1/images/${fileKey}?ids=${nodeId}&format=png`,
  method: 'GET',
  headers: {
    'X-Figma-Token': token
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.err) {
        console.error('API Error:', json.err);
        process.exit(1);
      }
      const imageUrl = json.images[nodeId];
      if (!imageUrl) {
        console.error('Image not found for node:', nodeId);
        process.exit(1);
      }
      
      console.log('Downloading image from:', imageUrl);
      https.get(imageUrl, (imgRes) => {
        fs.mkdirSync('public/section-1-connect-us', { recursive: true });
        const dest = `public/section-1-connect-us/hero-image.png`;
        const file = fs.createWriteStream(dest);
        imgRes.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Image downloaded to ${dest}`);
        });
      });
    } catch (e) {
      console.error('Parse error:', e);
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.end();

const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = {
  'tensorflow.png': 'https://www.tensorflow.org/images/tf_logo_social.png',
  'python.png': 'https://www.python.org/static/community_logos/python-logo-generic.svg',
  'pandas.png': 'https://pandas.pydata.org/static/img/pandas_mark.svg',
  'numpy.png': 'https://numpy.org/images/logo.svg',
  'matplotlib.png': 'https://matplotlib.org/_static/logo2.svg',
  'scikit.png': 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png',
  'colab.png': 'https://colab.research.google.com/img/colab_favicon_256px.png',
  // Custom logos for architectures
  'resnet.png': 'https://production-media.paperswithcode.com/methods/Screen_Shot_2020-06-06_at_10.45.54_PM.png',
  'densenet.png': 'https://production-media.paperswithcode.com/methods/Screen_Shot_2020-06-20_at_11.56.00_PM_pclzWbj.png',
  'vgg.png': 'https://production-media.paperswithcode.com/methods/vgg16.png',
  'inception.png': 'https://production-media.paperswithcode.com/methods/inceptionv3onc--oview_vjAbOYp.png'
};

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/images/tech', filename);
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
      });
    } else {
      console.error(`Failed to download ${filename}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

// Create tech directory if it doesn't exist
const techDir = path.join(__dirname, '../public/images/tech');
if (!fs.existsSync(techDir)) {
  fs.mkdirSync(techDir, { recursive: true });
}

// Download all logos
Object.entries(logos).forEach(([filename, url]) => {
  downloadImage(url, filename);
}); 
import axios from 'axios';

const base = process.env.VITE_API_BASE_URL || 'https://api.escuelajs.co/api/v1';

async function test() {
  try {
    console.log('Testing base URL:', base);
    const r = await axios.get(`${base}/products/1`);
    console.log('Status:', r.status);
    console.log('Data sample:', {
      id: r.data.id,
      title: r.data.title || r.data.name || '(no title field)'
    });
  } catch (e) {
    console.error('Request failed:');
    if (e.response) {
      console.error('Status:', e.response.status);
      console.error('Body:', e.response.data);
    } else {
      console.error(e.message);
    }
    process.exit(1);
  }
}

test();

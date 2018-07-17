import axios from 'axios'

export default function() {
  return axios.get('https://raw.githubusercontent.com/and-digital/and-vue-workshop/adrian1/data/products.json?token=ANYNJ-gzFq-_Hbokdu8oZYxYyj2aDEB_ks5a-uvWwA%3D%3D')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log('error ', error)
    })
}
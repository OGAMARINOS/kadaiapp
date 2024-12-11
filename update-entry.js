new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    ID: '',
    Name: '',
    age: '',
    number: '',
    adress: ''
  },
  created() {
    // URLパラメータからIDを取得
    const urlParams = new URLSearchParams(window.location.search);
    this.ID = urlParams.get('ID');
    this.fetchData(this.ID);
  },
  methods: {
    fetchData: async function(id) {
      const response = await axios.get(`https://m3h-ogasawarafunctionapi.azurewebsites.net/api/SELECT/${id}`);
      const data = response.data;
      this.Name = data.Name;
      this.age = data.age;
      this.number = data.number;
      this.adress = data.adress;
    },
    updateData: async function() {
      const param = {
        ID: this.ID,
        Name: this.Name,
        age: this.age,
        number: this.number,
        adress: this.adress
      };
      const response = await axios.put('https://m3h-ogasawarafunctionapi.azurewebsites.net/api/UPDATE', param);
      console.log(response.data);
      window.location.href = 'index.html'; // 更新後に元のページに戻る
    }
  }
});
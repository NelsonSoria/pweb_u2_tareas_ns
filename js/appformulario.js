
const app = Vue.createApp({
    methods: {
        agregarFormulario() {
            console.log(this.nombre);
            console.log(this.apellido);
            console.log(this.hobby);
            console.log(this.lugarNacimiento);

            const nuevaFormulario = {
                nombre: this.nombre,
                apellido: this.apellido,
                hobby: this.hobby,
                lugarNacimiento: this.lugarNacimiento
            };
            this.listaFormularios.unshift(nuevaFormulario);
            this.nombre = '';
            this.apellido = '';
            this.hobby = '';
            this.lugarNacimiento = '';
        }
    },

    data() {
        return {
            listaFormularios: [],
            nombre: null,
            apellido: null,
            hobby: null,
            lugarNacimiento: null
        };
    }
});

app.mount('#myApp');
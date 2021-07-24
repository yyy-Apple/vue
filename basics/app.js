const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: false,
            title: 'The Weizhe Empire',
            author: 'Weizhe',
            age: 24,
            x: 0,
            y: 0,
            books: [
                { title: 'naruto', author: 'abqs', img: 'assets/naruto.png', isFav: false },
                { title: 'sasuke', author: 'abqs', img: 'assets/sasuke.png', isFav: true },
                { title: 'sakura', author: 'abqs', img: 'assets/sakura.png', isFav: false }
            ],
            url: 'http://www.thenetninja.co.uk'
        }
    },
    methods: {
        changeTitle(title) {
            //this.title = 'Words of me.'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        changeFav(e, book) {
            console.log(e)
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
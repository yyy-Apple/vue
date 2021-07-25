<template>
  <div class="result">Reaction Time: {{ reactionTime }} ms. </div>
  <p class="rank"> {{ rank }} </p>
</template>

<script>
export default {
    props: ['reactionTime'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        console.log('Reulst mounted.')
        if (this.score < 250) {
            this.rank = 'Ninja Fingers'
        } else if (this.score < 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail pace...'
        }
    }
}
</script>

<style>
.result {
    width: 400px;
    border-radius: 5px;
    background: rgb(157, 169, 184);
    color: white;
    text-align: center;
    margin: 40px auto;
}

.rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>
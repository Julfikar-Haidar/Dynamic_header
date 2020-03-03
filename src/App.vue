<template>
    <div id="app">


        <h2>Helloworld table</h2>

        <table class="table">
            <Header v-bind:headerContent="header_title"></Header>
            <Helloworld></Helloworld>
        </table>
        <hr>
        <hr>

        <h2>Player table</h2>

        <table class="table">
            <Header v-bind:headerContent="player_title"></Header>
            <player></player>
        </table>

    </div>
</template>

<script>

    import Header from './components/Header'
    import Player from './components/Player'
    import Helloworld from './components/HelloWorld'

    export default {
        name: 'App',
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Header,
            Player,
            Helloworld
        },
        data() {
            return {
                header_title: ['name', 'body', 'image', 'status'],
                player_title: ['Image', 'Tajal', 'Galib', 'Maruf','Mahfuz','sakib']
            }
        }
    }
</script>

<style>

</style>

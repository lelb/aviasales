<template>
    <div class="container flex">
        <div class="left_sidebar">
            <TicketsFilter/>
        </div>
        <div class="main_col">
            <TicketsSort/>
            <TicketsList/>
        </div>
    </div>
</template>

<script>
    import TicketsFilter from './TicketsFilter'
    import TicketsSort from './TicketsSort'
    import TicketsList from './TicketsList'

    export default {
        name: 'TicketsSearchPage',
        components: {TicketsFilter, TicketsSort, TicketsList},
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

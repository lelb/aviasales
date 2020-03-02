<template>
    <ul class="tab-list flex bordered white_bg bor_rad_5 text_600 uppercase text_center">
        <li class="tab bor_rad_5_l flex-grow-1 flex jc_center ai_center"
            :class="{'active': sortState === 'cheapest'}"
            @click="sortTickets('cheapest')">
            Самый дешевый
        </li>
        <li class="tab bor_rad_5_r flex-grow-1 flex jc_center ai_center"
            :class="{'active': sortState === 'fastest'}"
            @click="sortTickets('fastest')">
            Самый быстрый
        </li>
    </ul>
</template>

<script>

    export default {
        name: 'TicketsSort',
        data() {
            return {

            }
        },
        computed: {
            sortState() {
                return this.$store.state.sortState
            }
        },
        methods: {
            sortTickets(sortState) {
                this.$store.commit('sortStateSet', sortState);
            }
        }
    }
</script>

<style lang="scss">
    .tab-list {
        .tab {
            transition: .3s all;
            cursor: pointer;
        }

        .active {
            background: #2196F3;
            box-shadow: 0 0 0 1px #2196F3;
            color: #ffffff;
            pointer-events: none;
        }
    }

    .flex-grow-1 {
        flex-grow: 1;
    }
</style>

<style lang="scss" scoped>
    .tab {
        min-height: 50px;
    }
</style>
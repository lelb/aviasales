<template>
    <div class="white_bg box_shadow bor_rad_5 p10-b">
        <h3 class="uppercase m10-b p20-rl p20-t">Количество пересадок</h3>
        <ul>
            <li>
                <label class="hover_bg t13 p20-rl p10-tb flex ai_start">
                    <span class="checkbox" :class="{'checked': allTicketsVisible}"></span>
                    <input type="checkbox"
                           class="d-none"
                           v-model="allTicketsVisible"
                           @change="filtersReset(true); updateFilters()"
                           :disabled="allTicketsVisible">
                    <span class="p10-l">Все</span>
                </label>
                <label class="hover_bg t13 p20-rl p10-tb flex ai_start" v-for="(filterParam) in filterStates">
                    <span class="checkbox" :class="{'checked': filterParam.filtered}"></span>
                    <input type="checkbox"
                           class="d-none"
                           v-model="filterParam.filtered"
                           @change="filtersReset(false); updateFilters()">
                    <span class="p10-l">{{filterParam.title}}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TicketsFilter',
        data() {
            return {
                allTicketsVisible: true,
                filterStates: [
                    {
                        stops: 0,
                        title: 'Без пересадок',
                        filtered: false
                    },
                    {
                        stops: 1,
                        title: '1 пересадка',
                        filtered: false
                    },
                    {
                        stops: 2,
                        title: '2 пересадки',
                        filtered: false
                    },
                    {
                        stops: 3,
                        title: '3 пересадки',
                        filtered: false
                    }
                ],
            }
        },
        computed: {},
        methods: {
            filtersReset(reset) {
                if (reset) {
                    this.filterStates.forEach(filter => {
                        filter.filtered = false
                    })
                } else {
                    this.allTicketsVisible = this.filterStates.filter(filter => filter.filtered).length === 0
                }
            },
            updateFilters() {
                this.$store.commit('updateFilters', this.filterStates)
            }
        }
    }
</script>
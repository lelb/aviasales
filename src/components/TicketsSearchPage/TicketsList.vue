<template>
    <ul class="tickets_list">
        <div class="lds-ripple" v-if="loader">
            <div></div>
            <div></div>
        </div>
        <li class="white_bg box_shadow bor_rad_5 p25-tb p20-rl m10-tb text_600"
            v-for="(ticket, index) in filteredTickets"
            :key="index">
            <div class="flex jc_between">
                <span class="d-block blue_text t24 m25-b">{{ticket.price}} ₽</span>
                <span class="ai_start grey_text">{{ticket.carrier}} img</span>
            </div>
            <div class="flex ai_center"
                 v-for="(segment, segmentIndex) in ticket.segments"
                 :class="{'m10-b': segmentIndex !== ticket.segments.length - 1}">
                <div class="w33">
                    <span class="d-block grey_text">
                        {{segmentIndex === 0 ? segment.origin : segment.destination}}
                         -
                        {{segmentIndex === 0 ? segment.destination : segment.origin}}
                    </span>
                    <div class="t14">{{segment.date | moment("HH:mm")}} - {{segment.date | moment('add',
                        segment.duration+ ' minutes') | moment("HH:mm") }}
                    </div>
                </div>
                <div class="w33">
                    <span class="d-block grey_text">В пути</span>
                    <!--<div class="t14">-->
                    <!--{{ (segment.duration / 60 > 0) ? Math.floor(segment.duration / 60) : '' }}ч-->
                    <!--{{segment.duration % 60}}м-->
                    <!--</div>-->
                    <div class="t14">
                        {{ [segment.duration, 'minutes'] | duration('hours')}}ч
                        {{[segment.duration, 'minutes'] | duration('minutes')}}м
                    </div>
                </div>
                <div class="w33">
                    <span class="d-block"
                          :class="{grey_text: segment.stops.length !== 0, 't14 blue_text': segment.stops.length === 0}">
                        {{segment.stops.length === 0 ? 'БЕЗ пересадок' : segment.stops.length === 1 ? segment.stops.length + ' пересадка' : segment.stops.length + ' пересадки'}}
                    </span>
                    <div class="t14">
                        <span v-for="(stop, stopIndex) in segment.stops"
                              :key="stopIndex">
                            {{stop}}{{stopIndex !== segment.stops.length - 1 ? ',':''}}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    </ul>

</template>

<script>
    export default {
        name: 'TicketsList',
        data() {
            return {}
        },
        created() {
            this.$store.dispatch('retrieveSearchId');
        },
        computed: {
            searchId() {
                return this.$store.state.searchId
            },
            loader() {
                return this.$store.state.loader
            },
            filteredTickets() {
                return this.$store.getters.filteredTickets
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    //spinner
    .lds-ripple {
        display: block;
        position: relative;
        width: 64px;
        height: 64px;
        margin: 10px auto;
    }

    .lds-ripple div {
        position: absolute;
        border: 4px solid #f00;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 28px;
            left: 28px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: -1px;
            left: -1px;
            width: 58px;
            height: 58px;
            opacity: 0;
        }
    }
</style>
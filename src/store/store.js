import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'https://front-test.beta.aviasales.ru';

export const store = new Vuex.Store({
    state: {
        loader: true,
        sortState: 'all',
        searchId: false,
        searchStop: 0,
        ticketsSearch: [],
    },
    getters: {
        updateSorting(state) {
            if (state.sortState === 'cheapest') {
                state.ticketsSearch.sort(function (a, b) {
                    return (a.price - b.price);
                })
            } else if (state.sortState === 'fastest') {
                state.ticketsSearch.sort(function (a, b) {
                    if (a.segments[0].duration - b.segments[0].duration !== 0) {
                        return a.segments[0].duration - b.segments[0].duration;
                    } else {
                        return a.segments[1].duration - b.segments[1].duration;
                    }
                    // return a.segments[0].date.localeCompare(b.segments[0].date);
                })
            }
        }
    },
    mutations: {
        retrieveTickets(state, data) {
            state.ticketsSearch = state.ticketsSearch.concat(data.tickets);
            // console.log(data.tickets[0]);
            if (data.stop) {
                state.searchStop = data.stop
            } else {
                state.searchStop++;
            }
            state.loader = false;
        },
        retrieveSearchId(state, id) {
            state.searchId = id;
        },
        sortStateSet(state, sortState) {
            state.sortState = sortState;
        }
    },
    actions: {
        retrieveTickets(context, id) {//todo
            return new Promise((resolve, reject) => {
                axios.get('/tickets', {
                    params: {
                        searchId: id
                    }
                }).then(response => {
                    if (context.state.searchStop !== true) {
                        context.dispatch('retrieveTickets', context.state.searchId)
                    }
                    context.commit('retrieveTickets', response.data);
                    resolve(response)
                }).catch(error => {
                    if (context.state.searchStop !== true) {
                        context.dispatch('retrieveTickets', context.state.searchId)
                    }
                    console.log(error);
                    reject(error)
                })
            });
        },
        retrieveSearchId(context) {
            // axios.get('/search').then(response => {
            //     context.commit('retrieveSearchId', response.data.searchId);
            // }).catch(error => {
            //     console.log(error)
            // })
            return new Promise((resolve, reject) => {
                axios.get('/search'
                ).then(response => {
                    context.commit('retrieveSearchId', response.data.searchId);
                    context.dispatch('retrieveTickets', context.state.searchId)
                    resolve(response)
                }).catch(error => {
                    console.log(error);
                    reject(error)
                })
            });
        }
    }
})
// todo hj
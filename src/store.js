import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(require('vue-moment'));
axios.defaults.baseURL = 'https://front-test.beta.aviasales.ru';

export const store = new Vuex.Store({
	state: {
		loader: true,
		sortState: 'all',
		searchId: false,
		searchStop: 0,
		ticketsSearch: [],
		selectedFilters: []
	},
	getters: {
		filteredTickets(state) {
			let tickets = state.selectedFilters.length > 0 ? [] : state.ticketsSearch;
			state.selectedFilters.forEach(filter => {
				state.ticketsSearch.forEach(ticket => {
					if (ticket.segments[0].stops.length === filter.stops)
						tickets.push(ticket)
				})
			});

			return tickets
		}
	},
	mutations: {
		retrieveTickets(state, data) {
			state.ticketsSearch = state.ticketsSearch.concat(data.tickets);
			// console.log(data.tickets[0]);
			if (data.stop === true) {
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
			if (state.sortState === 'cheapest') {
				state.ticketsSearch.sort(function (a, b) {
					return (a.price - b.price);
				})
			} else if (state.sortState === 'fastest') {
				state.ticketsSearch.sort(function (a, b) {
					return a.segments[0].duration - b.segments[0].duration;
				})
			}
		},
		updateFilters(state, filters) {
			state.selectedFilters = filters.filter(filter => filter.filtered === true);
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
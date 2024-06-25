import { defineStore } from 'pinia';

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    selectedTicket: null,
    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,
    selectedDate: null,
  }),
  actions: {
    setSelectedTicket(ticket) {
      this.selectedTicket = ticket;
    },
    setAdultsCount(count) {
      this.adultsCount = count;
    },
    setChildrenCount(count) {
      this.childrenCount = count;
    },
    setInfantsCount(count) {
      this.infantsCount = count;
    },
    setSelectedDate(date) {
      this.selectedDate = date;
    },
  },
  persist: true,
});

import { j as defineStore } from "../server.mjs";
const useTicketStore = defineStore("ticket", {
  state: () => ({
    selectedTicket: null,
    adultsCount: 0,
    childrenCount: 0,
    infantsCount: 0,
    selectedDate: null
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
    }
  },
  persist: true
});
export {
  useTicketStore as u
};
//# sourceMappingURL=ticket-6ijYPQ9O.js.map

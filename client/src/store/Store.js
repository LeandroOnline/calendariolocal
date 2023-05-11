import { create } from "zustand";
import axiosGetEvents from "../api/axiosGetEvents";

const useGlobalStore = create((set, get) => ({
  events: [],
  GetEvents: async () => await axiosGetEvents().then((data) => set({ events: data })),

}));

export default useGlobalStore;

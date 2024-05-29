import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(persist(
  (set) => ({
    user: {
      "userId": "",
      "nickname": "",
      "userTag": "",
      "isBirthday": false,
    },
    setUser: user => set({ user})
  }),
  {
    name: "user-storage",
    getStorage: () => localStorage,
  }
));

export default useUserStore;
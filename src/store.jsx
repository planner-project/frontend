import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(persist(
  (set) => ({
    user: {},
    setUser: (user) => {
      if (user.profileImgUrl === "") {
        user.profileImgUrl = "images/ragdoll.jpg";
      }
      set({ user });
    }
  }),
  {
    name: "user-storage",
    getStorage: () => localStorage,
  }
));

export default useUserStore;
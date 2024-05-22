import create from 'zustand';

const useUserStore = create(set => ({
  user: {
    "userId" : '',
    "nickname" : '',
    "userTag" : '',
    "isBirthday" : false,
  },
  setUser: user => set({ user }),
}));

export default useUserStore;
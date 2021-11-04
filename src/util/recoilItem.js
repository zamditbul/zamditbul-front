import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
});

export const token = atom({
    key: 'token',
    default: '',
    effects_UNSTABLE: [persistAtom],
});

export const user = atom({
    key: 'user',
    default: '',
    effects_UNSTABLE: [persistAtom],
});

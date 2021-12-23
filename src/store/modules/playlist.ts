import { Module } from 'vuex';
import { RootState, Playlist, PlaylistState, Context } from '../types';
import { ActionTree } from 'vuex';
import { MutationTree } from 'vuex';
import { GetterTree } from 'vuex';

export const state: PlaylistState = {
    items: [],
    authorLogin: ''
};

const namespaced: boolean = true;

export const actions: ActionTree<PlaylistState, RootState> = {
    async fetchPlaylists(context: Context): Promise<void> {
        const res = await fetch('http://localhost:3000/playlists?author_id=' + context.rootState.authenticatedUserId);
        const playlists = await res.json();

        context.commit('updatePlaylists', playlists);
    },
    async fetchAuthorLogin(context: Context, payload: number): Promise<void> {
        const res = await fetch('http://localhost:3000/users?id=' + payload);
        const author = await res.json();

        context.commit('updateAuthorLogin', author[0].login);
    },
};

export const mutations: MutationTree<PlaylistState> = {
    updatePlaylists(state: PlaylistState, payload: Array<Playlist>) {
        state.items = payload;
    },
    updateAuthorLogin(state: PlaylistState, payload: string) {
        state.authorLogin = payload;
    }
};

export const getters: GetterTree<PlaylistState, RootState> = {
    getAllPlaylists(state: PlaylistState) {
        return state.items;
    },
    getCurrentPlaylist(state: PlaylistState, id) {
        return state.items[id - 1];
    },
    getAuthorLogin(state: PlaylistState) {
        return state.authorLogin;
    }
};

export const playlist: Module<PlaylistState, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
};
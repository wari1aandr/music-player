import { Module } from 'vuex';
import { RootState, Playlist, PlaylistState, Context } from '../types';
import { ActionTree } from 'vuex';
import { MutationTree } from 'vuex';
import { GetterTree } from 'vuex';

export const state: PlaylistState = {
    items: []
};

const namespaced: boolean = true;

export const actions: ActionTree<PlaylistState, RootState> = {
    async fetchPlaylists(context: Context): Promise<void> {
        const res = await fetch('http://localhost:3000/playlists?author_id=' + 1);
        const playlists = await res.json();

        context.commit('updatePlaylists', playlists);
    }
};

export const mutations: MutationTree<PlaylistState> = {
    updatePlaylists(state: PlaylistState, payload: Array<Playlist>) {
        state.items = payload;
    },
};

export const getters: GetterTree<PlaylistState, RootState> = {
    getAllPlaylists(state: PlaylistState) {
        return state.items;
    }
};

export const playlist: Module<PlaylistState, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
};
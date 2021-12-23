import { ActionContext } from "vuex";

export interface RootState {
    authenticatedUserId: number;
}

export type Playlist = {
    id: number,
    title: string,
    img: string,
    author_id: number,
    tracks_id: Array<number>
};

export interface PlaylistState {
    items: Array<Playlist>,
    authorLogin: string
}

export type Context = ActionContext<PlaylistState, RootState>
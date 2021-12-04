import { createSelector } from "reselect";

const selectUser = state => state.user   //user from roootreducer

export const selectCurrentUser = createSelector(
    [selectUser],
    (user)=>user.currentUser
)


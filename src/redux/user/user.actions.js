// Action for setting current user (know who's logging in)
export const setCurrentUser = (user) => ({
	/* Simply sets type and payload so reducer knows what action it is and
    does the appropriate state change */
	type: "SET_CURRENT_USER",
	payload: user,
});
const isDashboardAvailable = state => state && state.dashboard && state.dashboard.editor && state.dashboard.editor.available;
const isDashboardEditing = state => state && state.dashboard && state.dashboard.editing;

module.exports = {
    isDashboardAvailable,
    isDashboardEditing

};

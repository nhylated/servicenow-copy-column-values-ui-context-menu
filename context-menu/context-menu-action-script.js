/**
 * Script executed on the Client for this menu action
 *
 * The following variables are available to the script:
 *    'g_list' the GlideList2 that the script is running against (only valid for List context menus)
 *    'g_fieldName' the name of the field that the context menu is running against (only valid for List context menus)
 *    'g_sysId' the sys_id of the row or form that the script is running against
 *    'rowSysId' is also set to the sys_id of the row to support legacy actions, but g_sysId is preferred
 */
runContextAction();

function runContextAction() {
    var dialog = new GlideDialogWindow('copy_column_values');
    dialog.setTitle('Copy values for column: ' + g_fieldLabel);
    dialog.setPreference('list_query', g_list.getQuery({ orderby: true, fixed: true }));
    dialog.setPreference('list_table', g_list.getTableName());
    dialog.setPreference('field_to_copy', g_fieldName);
    dialog.render();
}
